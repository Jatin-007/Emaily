const _ = require('lodash'); // lodash
// const Path = require ('path-parser'); // to filter out the path
const { URL } = require ('url'); // is default installed inside node library
const UrlPath = require('url-pattern'); // testing
const mongoose = require ('mongoose');

const requireLogin = require ('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
    
    app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        res.send('Thanks for your feedback');
    });
    
    app.post('/api/surveys/webhooks',(req, res) => {
        // mapping over req.body to fetch out every event
        const events = _.map(req.body, ({email, url})=> {
            // assigning a pathname to fetch out just the URL provided in event
            const pathname = new URL(url).pathname;
            
            //FROM DIFFERENT LIBRARY // path-parser // const p = Path.createPath('/api/surveys/:surveyId/:choice');
            const p = new UrlPath('/api/surveys/:surveyId/:choice');
            // console.log(p.match(pathname));

            const test = p.match(pathname);
            if(test){
                return {email, surveyId: test.surveyId, choice: test.choice};
            }
        });

        console.log(events);
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
