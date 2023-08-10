const sendEmail = require("./nodeMailer");

const verificationEmail = ({ name, email, verifyToken, origin }) => {
  let varifyEmail = `${origin}/user/verify-email/?token=${verifyToken}&email=${email}`;
  let message = `<p>Please confirm your email by clicking on : <a href="${varifyEmail}">Verify Email</a><p>`;

  return sendEmail({
    to: email,
    subject: "Email varification token ",
    html: `<h4> Hello ${name} <h4> ${message}`,
  });
};

module.exports = verificationEmail;
