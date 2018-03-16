const sendgrid = require('sendgrid');
const helper = sendgrid.mail; // fetching the mail object from sendgrid
// API KEY
const keys = require('../config/keys');

// inheriting mail object inside mailer class
class Mailer extends helper.Mail {
    
}

module.exports = Mailer;