const mongoose = require ('mongoose');
const { Schema } = mongoose;  // provide all the properties that will be in the records to be recorded

const userSchema = new Schema ({
    googleId: String
});

mongoose.model('users', userSchema);

// Schema for mongoose is like a whole MongoDB Collection.. in users, the schema will be having all the necessary
// information we are fetching or storing in the MongoDB