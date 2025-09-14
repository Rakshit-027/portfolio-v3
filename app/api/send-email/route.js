import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
  try {
    const body = await request.json();
    console.log('Received request body:', body);

    const response = await axios.post(
      'https://api.resend.com/emails',
      body,
      {
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Resend API response:', response.data);
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error('Error details:', error.response ? error.response.data : error.message);
    return NextResponse.json(
      { error: 'Something went wrong', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}