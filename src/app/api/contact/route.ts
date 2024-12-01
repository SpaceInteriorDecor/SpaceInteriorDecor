import { NextRequest, NextResponse } from "next/server";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

// Initialize the MailerSend client
const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY || "",
});

// Set sender and recipient details
const sentFrom = new Sender(process.env.MAIL_SENDER_EMAIL || "", "Your Name");
const recipients = [
  new Recipient(process.env.RECIPIENT_EMAIL || "", "Recipient Name"),
];

// Handle POST requests
export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { name, email, message } = await req.json();

    // Validate request data
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const personalization = [
      {
        email: process.env.RECIPIENT_EMAIL || "",
        data: { name, email, message },
      },
    ];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setPersonalization(personalization)
      .setSubject(`New Contact from ${name}`).setHtml(`
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `).setText(`
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `);

    // Send the email using MailerSend
    await mailerSend.email.send(emailParams);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(
      "MailerSend Error:",
      error.response || error.message || error
    );
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
