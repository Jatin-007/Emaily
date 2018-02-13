const express = require ('express'); // node js does not have es2015 module support... thatsy we didnt usedthe expression 'import'
const mongoose = require ('mongoose');
const cookieSession = require ('cookie-session');
const passport = require ('passport');
const keys = require ('./config/keys');
require('./models/User');
require ('./services/passport'); // since we are not returning anything from Passport.js file..

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30days in milliseconds   
        keys: [keys.cookieKey]
    })  
);

app.use(passport.initialize());
app.use(passport.session());

require ('./routes/authRoutes')(app); // as the authRoutes exports a function
require('./routes/billingRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
