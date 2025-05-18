const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter your name"]
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:false
    }
})

const User = mongoose.model("User",UserSchema)

module.exports = User