import mongoose from "mongoose";
import "../db/connection.js";

const userSchema = mongoose.Schema({
    phrasalVerb : {
        type: String,
        maxLength: 20,
        required: true
    },
    meaning : {
        type: String,
        minLength: 10,
        maxLength: 1000,
        required: true
    },
    example : {
        type: String,
        minLength: 10,
        maxLength: 1000,
        required: true
    },
    type: {
        type: String,
        
    },

});

const userModel = mongoose.model('phrasalVerbs', userSchema);

export default userModel;