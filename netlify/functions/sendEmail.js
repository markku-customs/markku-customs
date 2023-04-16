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
      from: 'markkucustoms@gmail.com',
      to: 'markkucustoms@gmail.com',
      subject: `New Message from ${name}`,
      text: `Name: ${name}; Email: ${email}; Message: ${message}`,
      html: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`,
    };

    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      }

      console.log('Email sent.', info.response);
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
