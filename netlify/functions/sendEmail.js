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

    transporter.sendMail(mailOptions, (error, info) => {
      if (info.messageId) {
        return {
          statusCode: 200,
          body: nodemailer.getTestMessageUrl(info),
        };
      }

      return {
        statusCode: 500,
        body: JSON.stringify(error),
      };
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
