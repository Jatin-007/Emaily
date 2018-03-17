const sendgrid = require('sendgrid');
const helper = sendgrid.mail; // fetching the mail object from sendgrid
// API KEY
const keys = require('../config/keys');

// inheriting mail object inside mailer class
class Mailer extends helper.Mail {
    constructor({ subject, recipients }, content) {
        super();

        this.sgApi = sendgrid(keys.sendGridKey); // fetching api key

        // helper function is provided by sendgrid 
        this.from_email = new helper.Email('np-reply@emaily.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients);

        this.addContent(this.body); // addContent is a defined function inside helper.Mail which we are extending
        this.addClickTracking();
        this.addRecipients();
    }

    formatAddresses(recipients){
        // mapping up each email and formatting them in the correct way
        return recipients.map(({ email }) => {
            return new helper.Email(email); // formatiing email with the help of helper.Email which formats them in a specific way
        });
    }

    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking (true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

    addRecipients() {
        const personalize = new helper.Personalization();
        this.recipients.forEach(recipient => {
            personalize.addTo(recipient);
        });
        this.addPersonalization(personalize);
    }

    // below function sends the email
    async send() {
        const request = this.sgApi.emptyRequest ({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON();
        });

        const response = this.sgApi.API(request); //API is a function provided by sendgrid
        return response;
    }
}

// whenever we create a new statement (which we did new surveyROutes)
// Constructor is automatically called...
module.exports = Mailer;