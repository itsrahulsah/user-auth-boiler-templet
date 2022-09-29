const mongooes = require('mongoose')

const Schema  = mongoose.Schema;

const UserSchema = new Schema({
    name : {
        firstname : {
            type : String,
            required : true
        },
        lastname : {
            type: String
        }
    }
})