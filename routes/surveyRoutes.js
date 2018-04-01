const _ = require('lodash'); // lodash
const Path = require ('path-parser'); // to filter out the path
const { URL } = require ('url'); // is default installed inside node library
const mongoose = require ('mongoose');

const requireLogin = require ('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
    
    app.get('/api/:surveys/:choice', (req, res) => {
        res.send('Thanks for your feedback');
    });
    
    app.post('/api/surveys/webhooks',(req, res) => {
        const p = new Path('/api/surveys/:surveyId/:choice');
        
        _.chain(req.body)
        .map(({email, url})=> {
            const match = p.test(new URL(url).pathname);
            if(match){
                return { email, surveyId: match.surveyId, choice: match.choice};
            }
        })
        .compact()// will show all the events and wont display the undefined objects
        .uniqBy('email', 'surveyId')// will filter out any duplicate email and surveyId
        .each(({surveyId, email,choice }) => {
            Survey.updateOne({
                //_id is how we use for mongoDB
                _id: surveyId,
                recipients: {
                    $elemMatch : { email: email, responded: false }
                }
            }, {
                $inc: { [choice]: 1},
                $set: {'recipients.$.responded': true}
            }).exec();
        })
        .value();
        
        res.send({});
    });

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
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
        
        try{
        await mailer.send(); // to send the survey
    
        // saving the survey
        await survey.save();
        req.user.credits -= 1;
        const user = await req.user.save();

        res.send(user);
        }
        // 422 is for providing user a hint that something inside the form went wrong
        catch(err){
            res.status(422).send(err);
        }
    });
};
