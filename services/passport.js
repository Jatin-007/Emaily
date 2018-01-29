const passport = require ('passport');
const GoogleStrategy = require ('passport-google-oauth20').Strategy;
const keys = require ('../config/keys');

passport.use
    (new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback' // providing a callback after user grants the permission
        },

        (accessToken, refreshToken, profile, done)=> {
            console.log('accessToken', accessToken);
            console.log('refreshToken', refreshToken);
            console.log('Profile', profile);
        }
    )
); // providing passport with an instinct of using Google Strategy up next!

