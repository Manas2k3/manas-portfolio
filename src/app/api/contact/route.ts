import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function getTransporter() {
    // Support either service-based transport (e.g. service: 'gmail') or full SMTP config.
    // Preferred env vars:
    // - EMAIL_SERVICE (optional, e.g. 'gmail')
    // - EMAIL_HOST, EMAIL_PORT, EMAIL_SECURE (optional)
    // - EMAIL_USER, EMAIL_PASS (required for auth)

    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!user || !pass) {
        throw new Error(
            "Missing email credentials. Set EMAIL_USER and EMAIL_PASS environment variables (use an App Password or SMTP credentials)."
        );
    }

    // If a full SMTP host is provided, use it. Otherwise fall back to service.
    const host = process.env.EMAIL_HOST;
    const port = process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT, 10) : undefined;
    const secure = typeof process.env.EMAIL_SECURE !== "undefined" ? process.env.EMAIL_SECURE === "true" : undefined;

    if (host) {
        return nodemailer.createTransport({
            host,
            port,
            secure,
            auth: { user, pass },
        });
    }

    const service = process.env.EMAIL_SERVICE ?? "gmail";
    return nodemailer.createTransport({
        service,
        auth: { user, pass },
    });
}

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        let transporter;
        try {
            transporter = getTransporter();
        } catch (err) {
            console.error("Email transporter configuration error:", err);
            return NextResponse.json({ error: "Email configuration error" }, { status: 500 });
        }

        const from = process.env.EMAIL_FROM ?? process.env.EMAIL_USER;
        const to = process.env.EMAIL_TO ?? process.env.EMAIL_USER;

        const mailOptions = {
            from,
            to,
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

        const info = await transporter.sendMail(mailOptions);

        console.log("Email sent:", info?.messageId ?? info);

        return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email via Nodemailer:", error);
        // Return the internal message in dev only (not exposing secrets). Keep generic for production.
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
