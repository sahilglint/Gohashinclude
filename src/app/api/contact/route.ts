import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS, 
      },
    });

    await transporter.sendMail({
      from: `"GoHashInclude Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `📩 New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
      <div style="font-family: Arial, sans-serif; background-color:#f9fafb; padding:40px;">
        <table style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.1); overflow:hidden;">
          <tr>
            <td style="background:#0271B1; padding:20px; text-align:center; color:#fff;">
              <h2 style="margin:0;">📬 New Contact Message</h2>
            </td>
          </tr>
          <tr>
            <td style="padding:30px;">
              <p style="font-size:16px; color:#333;">You have received a new contact request. Details are below:</p>
              <table style="width:100%; border-collapse:collapse; margin-top:20px;">
                <tr>
                  <td style="padding:8px; font-weight:bold; color:#0271B1;">Name:</td>
                  <td style="padding:8px; color:#555;">${firstName} ${lastName}</td>
                </tr>
                <tr style="background:#f3f4f6;">
                  <td style="padding:8px; font-weight:bold; color:#0271B1;">Email:</td>
                  <td style="padding:8px; color:#555;">${email}</td>
                </tr>
                <tr>
                  <td style="padding:8px; font-weight:bold; color:#0271B1;">Phone:</td>
                  <td style="padding:8px; color:#555;">${phone || "N/A"}</td>
                </tr>
                <tr style="background:#f3f4f6;">
                  <td style="padding:8px; font-weight:bold; color:#0271B1;">Message:</td>
                  <td style="padding:8px; color:#555;">${message}</td>
                </tr>
              </table>
              <p style="margin-top:30px; font-size:14px; color:#888;">This email was generated from your website’s contact form.</p>
            </td>
          </tr>
          <tr>
            <td style="background:#0271B1; padding:15px; text-align:center; color:#fff; font-size:12px;">
              © ${new Date().getFullYear()} GOHASHINCLUDE. All rights reserved.
            </td>
          </tr>
        </table>
      </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
