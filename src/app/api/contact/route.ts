import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    const contactMessage = await db.contactMessage.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        message,
      },
    });

    console.log('Saved contact submission:', contactMessage.id);

    return NextResponse.json(
      { message: 'Contact request received successfully', id: contactMessage.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact request:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
