import { EmailTemplate } from '@/app/components/EmailTemplate';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(response: NextRequest) {
  try {
    const { name, email, tel } = await response.json();

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'jonatasricardo90@gmail.com',
      subject: `Novo lead VTEX: ${name}`,
      html: `
        <div>
            nome: ${name} <br>
            email: ${email} <br>
            tel: ${tel} <br>
        </div>
      `
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}