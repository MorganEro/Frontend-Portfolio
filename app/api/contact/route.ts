import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY!;

export async function POST(req: Request) {
  try {
    const { name, email, message, token, website } = await req.json();

    // honeypot check
    if (website)
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 });

    // Verify reCAPTCHA
    const verify = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${RECAPTCHA_SECRET}&response=${token}`,
      }
    );
    const captcha = await verify.json();

    if (!captcha.success || captcha.score < 0.5) {
      return NextResponse.json(
        { error: 'Failed captcha verification' },
        { status: 400 }
      );
    }

    // Send the email
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'morganero1@gmail.com',
      subject: `New Message from ${name}`,
      replyTo: email,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
