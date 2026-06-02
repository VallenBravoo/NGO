import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { db } from '@/lib/db';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-02-24.acacia',
});

export async function POST(request: Request) {
  try {
    const { amount, isMonthly } = await request.json();

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
    }

    // Determine the unit amount in cents (Stripe requires smallest currency unit)
    const unitAmount = Math.round(amount * 100);

    // Create a database record for this pending donation
    const donation = await db.donation.create({
      data: {
        amount,
        isMonthly,
        status: 'PENDING',
      },
    });

    const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: isMonthly ? 'HopeBridge Monthly Donation' : 'HopeBridge One-Time Donation',
              description: 'Thank you for supporting our mission.',
              images: ['https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=200&auto=format&fit=crop'],
            },
            unit_amount: unitAmount,
            ...(isMonthly && { recurring: { interval: 'month' } }),
          },
          quantity: 1,
        },
      ],
      mode: isMonthly ? 'subscription' : 'payment',
      success_url: `${origin}/donate?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/donate?canceled=true`,
      client_reference_id: donation.id,
      metadata: {
        donationId: donation.id,
      },
    });

    // Update the donation record with the Stripe Session ID
    await db.donation.update({
      where: { id: donation.id },
      data: { stripeSession: session.id },
    });

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
