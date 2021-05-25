const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nom:{
        type:String,
        required:true
    },
    prénom:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    email:{
        type:String,
        required:true
    },
    numero:{
        type:String,
        required:true
    }
});
const UserModel = mongoose.model('Users', userSchema);

module.exports = UserModel;