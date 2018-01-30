const mongoose = require ('mongoose');
const { Schema } = mongoose;  // provide all the properties that will be in the records to be recorded

const userSchema = new Schema ({
    googleId: String
});

mongoose.model('users', userSchema);