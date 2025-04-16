import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ to, subject, html }) => {
  try {
    const response = await resend.emails.send({
      from: 'ServiBid <noreply@servibid.tech>', // You can verify domain later
      to,
      subject,
      html,
    });
    console.log("Email sent:", response);
  } catch (err) {
    console.error("Failed to send email:", err);
  }
};