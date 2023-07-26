const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  const { name, email, phone, message } = JSON.parse(event.body);

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'markkucustoms@gmail.com',
        pass: process.env.VITE_GMAIL_PASS,
      },
    });

    const formattedPhone = phone.length > 5 ? phone : '–';

    const mailOptions = {
      from: 'markkucustoms@gmail.com',
      to: 'markkucustoms@gmail.com',
      subject: `New Message from ${name}`,
      text: `Name: ${name}; Email: ${email}; Phone Number: ${formattedPhone}; Message: ${message}`,
      html: `Name: ${name}<br>Email: ${email}<br>Phone Number: ${formattedPhone}<br>Message: ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);

    if (info.messageId) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: nodemailer.getTestMessageUrl(info) }),
      };
    }

    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Oops' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
