import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const { name, email, message } = req.body || {};

    if (!email || !message) {
      return res.status(400).json({ success: false, error: 'Missing email or message' });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER || 'taminhhoang.nk@gmail.com',
        pass: process.env.GMAIL_PASS || Buffer.from('dG5tZCBhenlrIHdtcWMgaGpqcQ==', 'base64').toString('utf-8'),
      },
    });

    const info = await transporter.sendMail({
      from: `"Portfolio TaHoang715" <${process.env.GMAIL_USER || 'taminhhoang.nk@gmail.com'}>`,
      to: 'taminhhoang.nk@gmail.com',
      replyTo: email,
      subject: `[Portfolio TaHoang715] Tin nhắn mới từ ${name || 'Khách truy cập'}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0b1329; color: #f8fafc; border-radius: 12px; border: 1px solid #1e293b;">
          <div style="display: flex; align-items: center; border-bottom: 1px solid #1e293b; padding-bottom: 16px; margin-bottom: 20px;">
            <h2 style="color: #00f2fe; margin: 0; font-size: 20px; font-weight: 700;">Tin nhắn mới từ Portfolio TaHoang715</h2>
          </div>
          <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid #334155; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <p style="margin: 6px 0; font-size: 15px;"><strong>Người gửi:</strong> <span style="color: #38bdf8;">${name || 'Chưa cung cấp'}</span></p>
            <p style="margin: 6px 0; font-size: 15px;"><strong>Email liên hệ:</strong> <a href="mailto:${email}" style="color: #00f2fe; text-decoration: none;">${email}</a></p>
            <p style="margin: 6px 0; font-size: 13px; color: #94a3b8;"><strong>Thời gian:</strong> ${new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}</p>
          </div>
          <p style="font-size: 15px; font-weight: 600; margin-bottom: 8px; color: #cbd5e1;">Nội dung tin nhắn:</p>
          <div style="background: #111827; border-left: 4px solid #00f2fe; padding: 16px; border-radius: 4px; white-space: pre-wrap; line-height: 1.6; font-size: 14px; color: #e2e8f0;">${message}</div>
          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #1e293b; font-size: 12px; color: #64748b; text-align: center;">
            Email được gửi tự động qua hệ thống liên hệ của website <strong>tahoang715.id.vn</strong>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    return res.status(500).json({ success: false, error: error.message || 'Internal Server Error' });
  }
}
