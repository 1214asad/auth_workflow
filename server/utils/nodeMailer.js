const nodemailer = require("nodemailer");
const mailCongig = require("../utils/emailConfig");
const sendEmail = async ({ to, subject, html }) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport(mailCongig);

  return await transporter.sendMail({
    from: '"Asad khan" <asadkhan8445@gmail.com>',
    to,
    subject,
    html,
  });
};

module.exports = sendEmail;
