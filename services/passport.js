const passport = require ('passport');
const GoogleStrategy = require ('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require ('../config/keys');

const User = mongoose.model('users');

passport.use
    (new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback' // providing a callback after user grants the permission
        },

        (accessToken, refreshToken, profile, done)=> {
            User.findOne({ googleId: profile.id })
                .then((existingUser)=> {
                    if (existingUser) {
                        //we already have a record with given profile id
                    }
                    else {
                        new User({ googleId: profile.id }).save();
                    }
                }
            )

        }
    )
); // providing passport with an instinct of using Google Strategy up next!
// promise is a tool to handle async javascript code
