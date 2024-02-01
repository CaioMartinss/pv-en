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
        maxLength: 100,
        required: true
    },
    example : {
        type: String,
        minLength: 10,
        maxLength: 100,
        required: true
    },

});

const userModel = mongoose.model('phrasalVerbs', userSchema);

export default userModel;