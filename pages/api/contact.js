import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'crimemagazineid@gmail.com', // your Gmail address
        pass: 'Navinjoyjeff131977' // your Gmail password or app password
      }
    });

    try {
      // Send mail with defined transport object
      await transporter.sendMail({
        from: email,
        to: 'crimemagazineid@gmail.com',
        subject: `New message from ${name}`,
        text: message
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending message:', error);
      res.status(500).json({ success: false, error: 'Failed to send message' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
