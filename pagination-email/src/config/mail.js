const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "4cb505411a2db6",
      pass: "59335af6b0a019",
    },
  });

  module.exports = transporter;