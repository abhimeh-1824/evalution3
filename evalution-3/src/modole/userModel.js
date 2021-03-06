const  mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:false
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    profileImages:[{
        type:String,
        require:true

    }]
},
{
    timestamps:true,
    versionKey:false
});

module.exports = mongoose.model("user",userSchema)
