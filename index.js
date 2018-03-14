const express = require ('express'); // node js does not have es2015 module support... thatsy we didnt usedthe expression 'import'
const mongoose = require ('mongoose');
const cookieSession = require ('cookie-session');
const passport = require ('passport');
const bodyParser = require ('body-parser');
const keys = require ('./config/keys');
require('./models/User');
require ('./services/passport'); // since we are not returning anything from Passport.js file..

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json()); // This helps to handle post requests since Express does not handles post req properly // middleware being used with Express framework

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

// this particular code is confiming with node if the app is running a production environment or development
// if production, and its looking to browse to a certain file, try searching up in the client/build directory
// if we werent able to find it, just return homepage(dashboard)
if(process.env.NODE_ENV === 'production'){
    // Express will serve up the production assets like our main.js file or main.css file
    app.use(express.static('client/build'))

    //Express will serve up the index.html file if it doesnt recognize the route
    const path = require ('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
