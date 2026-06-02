import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 'first-name': firstName, 'last-name': lastName, email, phone, message } = body;

    // We save help requests as contact messages for now, or you can expand the schema
    const helpRequest = await db.contactMessage.create({
      data: {
        firstName: firstName || 'Anonymous',
        lastName: lastName || 'User',
        email,
        phone,
        message: `[HELP REQUEST] ${message}`,
      },
    });

    console.log('Saved help request:', helpRequest.id);

    return NextResponse.json(
      { message: 'Help request received successfully', id: helpRequest.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing help request:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
