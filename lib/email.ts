import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const { name, email, company, message } = data;

  const notificationHtml = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:linear-gradient(135deg,#6C63FF,#00D9A6);padding:20px;border-radius:8px 8px 0 0;">
        <h1 style="color:#fff;margin:0;font-size:20px;">New Contact Form Submission</h1>
      </div>
      <div style="background:#1a1a1a;padding:24px;border-radius:0 0 8px 8px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:10px 0;color:#999;font-size:14px;border-bottom:1px solid #333;">Name</td><td style="padding:10px 0;color:#fff;font-size:14px;border-bottom:1px solid #333;">${name}</td></tr>
          <tr><td style="padding:10px 0;color:#999;font-size:14px;border-bottom:1px solid #333;">Email</td><td style="padding:10px 0;color:#fff;font-size:14px;border-bottom:1px solid #333;">${email}</td></tr>
          <tr><td style="padding:10px 0;color:#999;font-size:14px;border-bottom:1px solid #333;">Company</td><td style="padding:10px 0;color:#fff;font-size:14px;border-bottom:1px solid #333;">${company || 'N/A'}</td></tr>
        </table>
        <div style="margin-top:16px;">
          <p style="color:#999;font-size:14px;margin:0 0 8px;">Message:</p>
          <p style="color:#fff;font-size:14px;margin:0;line-height:1.6;">${message}</p>
        </div>
      </div>
    </div>
  `;

  const autoReplyHtml = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:linear-gradient(135deg,#6C63FF,#00D9A6);padding:20px;border-radius:8px 8px 0 0;">
        <h1 style="color:#fff;margin:0;font-size:20px;">Thank You for Contacting Pyronets</h1>
      </div>
      <div style="background:#1a1a1a;padding:24px;border-radius:0 0 8px 8px;">
        <p style="color:#fff;font-size:15px;line-height:1.6;">Hi ${name},</p>
        <p style="color:#ccc;font-size:14px;line-height:1.6;">Thank you for reaching out to Pyronets! We have received your inquiry and our team will review it shortly.</p>
        <p style="color:#ccc;font-size:14px;line-height:1.6;">We typically respond within 2 hours during business hours (Monday - Friday, 9 AM - 6 PM EST).</p>
        <div style="margin:24px 0;padding:16px;background:#222;border-radius:6px;border-left:3px solid #6C63FF;">
          <p style="color:#999;font-size:13px;margin:0 0 6px;">Your message:</p>
          <p style="color:#fff;font-size:14px;margin:0;font-style:italic;">"${message}"</p>
        </div>
        <p style="color:#ccc;font-size:14px;line-height:1.6;">Best regards,<br/>The Pyronets Team</p>
        <hr style="border:none;border-top:1px solid #333;margin:20px 0;">
        <p style="color:#666;font-size:12px;margin:0;">Pyronets | Web Scraping Services<br/>contactus@pyronets.com | pyronets.com</p>
      </div>
    </div>
  `;

  const from = `"Pyronets" <${process.env.SMTP_EMAIL}>`;

  const notificationRecipients = [
    'shahzebnaveed621@gmail.com',
    'zaryabhaider888@gmail.com',
  ];

  await Promise.all([
    transporter.sendMail({
      from,
      to: email,
      subject: 'Thank You for Contacting Pyronets',
      html: autoReplyHtml,
      text: `Hi ${name},\n\nThank you for reaching out to Pyronets! We have received your inquiry and our team will review it shortly.\n\nWe typically respond within 2 hours during business hours (Monday - Friday, 9 AM - 6 PM EST).\n\nYour message:\n"${message}"\n\nBest regards,\nThe Pyronets Team`,
    }),
    transporter.sendMail({
      from,
      to: notificationRecipients.join(', '),
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: notificationHtml,
      text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nMessage: ${message}`,
    }),
  ]);
}
