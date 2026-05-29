import { NextResponse } from "next/server";
import { z } from "zod";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const validated = contactSchema.parse(body);

    // Save to Supabase
    const { error } = await supabase
      .from("contact_messages")
      .insert([
        {
          name: validated.name,
          email: validated.email,
          subject: validated.subject,
          message: validated.message,
        },
      ]);

    if (error) {
      return NextResponse.json(
        { error: "Database error" },
        { status: 500 }
      );
    }

    // Send Email
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_RECEIVER_EMAIL!,
      subject: `New Contact Form: ${validated.subject}`,
      html: `
        <h2>New Portfolio Inquiry</h2>

        <p><strong>Name:</strong> ${validated.name}</p>
        <p><strong>Email:</strong> ${validated.email}</p>
        <p><strong>Subject:</strong> ${validated.subject}</p>

        <p><strong>Message:</strong></p>
        <p>${validated.message}</p>
      `,
    });

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid form submission" },
      { status: 400 }
    );
  }
}
