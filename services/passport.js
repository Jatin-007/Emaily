const passport = require ('passport');
const GoogleStrategy = require ('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require ('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done)=> {
    done(null, user.id);
    // user.id refers to the `_id` inside database with user
    // reason for using user.id instead of googleId is that there might be chances, user will login with Facebook or other platforms and not google everytime
});

passport.deserializeUser((id, done)=> {
    User.findById(id).then (user => {
        done(null, user);
    });
});


passport.use
    (new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback', // providing a callback after user grants the permission,
            proxy: true
        },

        async (accessToken, refreshToken, profile, done)=> {
            const existingUser = await User.findOne({ googleId: profile.id })
            
            if (existingUser) {
                //we already have a record with given profile id
               return done(null, existingUser);
            }  
            else {
                const user = await new User({ googleId: profile.id }).save()
                done(null, user);
            }
        }
    )
); 

// providing passport with an instinct of using Google Strategy up next!
// promise is a tool to handle async callbacks