import { NextResponse } from "next/server";
import { z } from "zod";
import { supabaseServer } from "@/lib/supabase-server";
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
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;

    if (!receiverEmail) {
      return NextResponse.json(
        { error: "CONTACT_RECEIVER_EMAIL is missing" },
        { status: 500 }
      );
    }

    const { error } = await supabaseServer
      .from("messages")
      .insert([{ ...validated }]);

    if (error) {
      return NextResponse.json(
        {
          error: "Database error",
          detail: error.message,
        },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: receiverEmail,
      subject: `Portfolio Inquiry • ${validated.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio Contact Inquiry</title>
        </head>

        <body
          style="
            margin:0;
            padding:0;
            background:#f5f7fa;
            font-family:Arial,sans-serif;
          "
        >

        <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
        <td align="center" style="padding:40px 16px;">

        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          style="
            max-width:700px;
            background:#ffffff;
            border-radius:12px;
            overflow:hidden;
            border:1px solid #e5e7eb;
          "
        >

        <tr>
        <td
          style="
            background:#111827;
            padding:32px;
            color:#ffffff;
          "
        >
          <h1 style="margin:0;font-size:24px;">
            New Portfolio Inquiry
          </h1>

          <p
            style="
              margin:10px 0 0;
              color:#d1d5db;
              font-size:14px;
            "
          >
            A new enquiry has been submitted through your portfolio website.
          </p>
        </td>
        </tr>

        <tr>
        <td style="padding:32px;">

        <table width="100%" cellpadding="0" cellspacing="0">

        <tr>
        <td style="padding-bottom:18px;">
          <strong>Name</strong><br />
          ${validated.name}
        </td>
        </tr>

        <tr>
        <td style="padding-bottom:18px;">
          <strong>Email</strong><br />
          ${validated.email}
        </td>
        </tr>

        <tr>
        <td style="padding-bottom:18px;">
          <strong>Project Inquiry</strong><br />
          ${validated.subject}
        </td>
        </tr>

        <tr>
        <td>
          <strong>Message</strong><br /><br />
          ${validated.message.replace(/\n/g, "<br />")}
        </td>
        </tr>

        </table>

        </td>
        </tr>

        <tr>
        <td
          style="
            padding:24px 32px;
            background:#f9fafb;
            border-top:1px solid #e5e7eb;
            color:#6b7280;
            font-size:13px;
          "
        >
          Sent from your portfolio website contact form.
        </td>
        </tr>

        </table>

        </td>
        </tr>
        </table>

        </body>
        </html>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully.",
      },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      {
        error: "Invalid form submission",
        detail:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 400 }
    );
  }
}
