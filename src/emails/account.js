const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  const msg = {
    to: email, // Change to your recipient
    from: 'jayesh.raipure9@gmail.com', // Change to your verified sender
    subject: 'Task-app support team',
    text: `Welcome to the app, ${name}, please let me know how you get along with the app.`
  }

  sgMail.send(msg)
}

const sendCancelationEmail = (email, name) => {
  const msg = {
    to: email, // Change to your recipient
    from: 'jayesh.raipure9@gmail.com', // Change to your verified sender
    subject: 'Task-app support team',
    text: `Good bye, ${name}, hope to see you again!`
  }

  sgMail.send(msg)
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}