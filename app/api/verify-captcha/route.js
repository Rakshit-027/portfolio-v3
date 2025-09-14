import { NextRequest, NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { captcha } = await request.json();
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`,
      { method: 'POST' }
    );
    const data = await response.json();

    if (data.success && data.score >= 0.5) {
      return NextResponse.json({ success: true, score: data.score }, { status: 200 });
    } else {
      return NextResponse.json({
        success: false,
        error: 'CAPTCHA verification failed',
        score: data.score || null,
        errors: data['error-codes'] || [],
      }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Server error during CAPTCHA verification' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}