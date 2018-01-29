const express = require ('express'); // node js does not have es2015 module support... thatsy we didnt usedthe expression 'import'
const passport = require ('passport');
const GoogleStrategy = require ('passport-google-oauth20').Strategy;

const app = express();
passport.use(new GoogleStrategy()); // providing passport with an instinct of using Google Strategy up next!



const PORT = process.env.PORT || 5000;
app.listen(PORT);
