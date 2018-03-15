const mongoose = require ('mongoose'); // requiring mongoose framework
const {Schema} = mongoose; // Loading up the Schema
const RecipientSchema = require ('./Recipient');

//Creating a surveySchema to store all the properties
const surveySchema = new Schema({ 
    title: String,
    body: String,
    subject: String,
    recipients: [RecipientSchema],
    // the recipient properties are stored in Recipient.js
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0},
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
   // _user is created to tell mongoose that specific surveys will belong to specific users only
   // it has a type and ref- to the User

   dateSent: Date,
   lastResponded: Date
});

// Taking the surveySchema to a dataset named- surveys
mongoose.model('surveys', surveySchema);