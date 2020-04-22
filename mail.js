const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();

const auth = {
    auth: {
        api_key: process.env.API_KEY,
        domain: 'sandbox2ccbeefb3557473f929569c6fc7fc4bb.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


//Chunk 4

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'joshkannenberg@icloud.com',
        subject,
        text
    };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}

module.exports = sendMail;

