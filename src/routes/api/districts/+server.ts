import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

export function GET() {
  try {
    const districts = [
      { id: 1, name: 'District A' },
      { id: 2, name: 'District B' },
      { id: 3, name: 'District C' },
    ];

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'nicogroupportal@gmail.com',
        pass: 'uqwrjljmxihmhtvz',
      },
    });

    const mailOptions = {
      from: 'nicogroupportal@gmail.com',
      to: 'watipasochirambo5@gmail.com',
      subject: 'Your Subject',
      text: 'Your email content',
    };

    transporter.sendMail(mailOptions, (error: any, info: { response: any }) => {
      if (error) {
        console.error('Email error:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    return json(mailOptions.text);
  } catch (error) {
    console.error('An error occurred:', error);
    return json({ error: 'An error occurred while sending the email.' });
  }
}
