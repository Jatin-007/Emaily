const mongoose = require ('mongoose'); // requiring mongoose framework
const {Schema} = mongoose; // Loading up the Schema

//Creating a surveySchema to store all the properties
const surveySchema = new Schema({ 
    title: String,
    body: String,
    subject: String,
    recipients: [String],
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0}
});

// Taking the surveySchema to a dataset named- surveys
mongoose.model('surveys', surveySchema);