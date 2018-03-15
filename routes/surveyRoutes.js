const requireLogin = require ('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
        // checking up if the user is logged in or no in the app by using the requireLogin

    });
};