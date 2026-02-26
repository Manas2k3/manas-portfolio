import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        // Configure the Nodemailer transporter
        // Assumes you are using a Gmail account. If another service is preferred, change the service name.
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // This should be an App Password, not your actual Gmail password
            },
        });

        // Setup email data
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to your own email address
            replyTo: email,
            subject: `New Contact from Portfolio: ${name}`,
            text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <h2 style="color: #4a6d7d;">New Portfolio Contact</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <br/>
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap; background: #f9f9f9; padding: 12px; border-radius: 8px;">${message}</p>
                </div>
            `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email via Nodemailer:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
