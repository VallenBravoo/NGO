import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Map form fields from VolunteerForm.tsx to Prisma schema
    const application = await db.volunteerApplication.create({
      data: {
        firstName: body['first-name'],
        lastName: body['last-name'],
        email: body.email,
        phone: body.phone,
        interest: body.interest,
        availability: body.availability,
        message: body.message,
      },
    });

    console.log('Saved volunteer application:', application.id);

    return NextResponse.json(
      { message: 'Volunteer application received successfully', id: application.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing volunteer application:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
