const express = require ('express'); // node js does not have es2015 module support... thatsy we didnt usedthe expression 'import'
const mongoose = require ('mongoose');
const keys = require ('./config/keys');
require('./models/User');
require ('./services/passport'); // since we are not returning anything from Passport.js file..

mongoose.connect(keys.mongoURI);

const app = express();

require ('./routes/authRoutes')(app); // as the authRoutes exports a function

const PORT = process.env.PORT || 5000;
app.listen(PORT);
