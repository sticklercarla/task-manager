const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({ 
//     to: 'carlastickler@gmail.com',
//     from: 'carlastickler@gmail.com',
//     subject: 'This is my first creation',
//     text: 'I hope this one actually gets to you'
//  })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'carlastickler@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'carlastickler@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Sorry to see you go ${name}, come back whenever you want!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}