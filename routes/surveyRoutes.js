const mongoose = require ('mongoose');

const requireLogin = require ('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
        // checking up if the user is logged in or no in the app by using the requireLogin
    // requesting title, subject, body and recipients
        const { title, subject, body, recipients } = req.body;

        // heres we create the survey
        const survey = new Survey ({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            // getting the recipients in a well managed way.
            // split method is splitting the emails wherever , is located and storing emails in a seperate object
            _user: req.user.id,
            dateSent: Date.now() // providing the date the survey is sent
        });

        // Great place to send an email...
        const mailer = new Mailer(survey, surveyTemplate(survey));
        mailer.send(); // to send the survey
    });
};
