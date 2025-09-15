// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Simple validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Gmail transporter configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // application password
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL, //mail to receive messages
      subject: `New message from ${name}`,
      html: `
        <h3>New message from contact form (coming from my portfolio)</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
