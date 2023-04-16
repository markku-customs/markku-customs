const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'markkucustoms@gmail.com',
        pass: 'seiguejtcvnhwdhj',
      },
    });

    const mailOptions = {
      from: 'foo@example.com>',
      to: 'markkucustoms@gmail.com',
      subject: 'New Message from Someone',
      text: `Name: ${name}, Email: ${email}, Message: ${message}`,
    };

    transporter.sendMail(mailOptions, (_, info) => {
      console.log(`Email sent: ${info.response}`);
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Success' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
