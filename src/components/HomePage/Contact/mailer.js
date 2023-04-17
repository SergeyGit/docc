// const nodemailer = require('nodemailer');
//
// function sendMail(formData) {
//   // Create a SMTP transporter object
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'sstranzzo@gmail.com',
//       pass: '242424Ss',
//     },
//   });
//
//   // Create email message
//   const mailOptions = {
//     from: formData.client_email,
//     to: 'sstranzzo@gmail.com',
//     subject: 'Message from doc website',
//     text: `Name: ${formData.name}\nEmail: ${formData.client_email}\n\nMessage: ${formData.text}`,
//   };
//
//   // Send email
//   return transporter.sendMail(mailOptions);
// }
//
// module.exports = sendMail;

// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey('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');
//
// async function sendMail(formData) {
//   const msg = {
//     to: 's.dmitrash@tranzzo.com', // email получателя
//     from: formData.client_email, // email отправителя
//     subject: 'Message from your website',
//     text: `Name: ${formData.name}\nEmail: ${formData.client_email}\n\nMessage: ${formData.text}`,
//   };
//
//   try {
//     await sgMail.send(msg);
//     console.log('Email sent successfully');
//   } catch (error) {
//     console.error(error);
//   }
// }
//
// module.exports = sendMail;

export const sendEmail = (formData) => {
  const apiKey = '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';
  const url = 'https://api.sendgrid.com/v3/mail/send';

  const data = {
    personalizations: [
      {
        to: [
          {
            email: 's.dmitrash@tranzzo.com', // замените на ваш email получателя
          },
        ],
        subject: 'Message from your website',
      },
    ],
    from: {
      email: formData.client_email, // замените на ваш email отправителя
    },
    content: [
      {
        type: 'text/plain',
        value: `Name: ${formData.nameForm}\nEmail: ${formData.client_email}\n\nMessage: ${formData.text}`,
      },
    ],
  };

  return fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
