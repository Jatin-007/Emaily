const passport = require ('passport');

module.exports = app=> {
    app.get(
        '/auth/google',
        passport.authenticate('google', { // using Google Strategy tool from passport to get access to google's oauth
            scope: ['profile', 'email'] // scope refers to what data to be required from google. In this case it is profile information and email
        }));
    
    app.get('/auth/google/callback', passport.authenticate('google')); // google inside passport.authenticate is provided inside passport's google strategy
}
