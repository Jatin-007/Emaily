const express = require ('express'); // node js does not have es2015 module support... thatsy we didnt usedthe expression 'import'
const passport = require ('passport');
const GoogleStrategy = require ('passport-google-oauth20').Strategy;
const keys = require ('./config/keys');

const app = express();
    passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback' // providing a callback after user grants the permission
    }, (accessToken, refreshToken, profile, done)=> {
        console.log('accessToken', accessToken);
        console.log('refreshToken', refreshToken);
        console.log('Profile', profile);
    })
); // providing passport with an instinct of using Google Strategy up next!

app.get('/auth/google', passport.authenticate('google', { // using Google Strategy tool from passport to get access to google's oauth
    scope: ['profile', 'email'] // scope refers to what data to be required from google. In this case it is profile information and email
}));

app.get('/auth/google/callback', passport.authenticate('google')); // google inside passport.authenticate is provided inside passport's google strategy

const PORT = process.env.PORT || 5000;
app.listen(PORT);
