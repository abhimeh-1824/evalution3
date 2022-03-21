const  mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    likes:{
        type:Number,
        required:true
    },
    coverImages:[{
        type:String,
        require:true

    }],
    content:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
},
{
    timestamps:true,
    versionKey:false
});

module.exports = mongoose.model("book",bookSchema)
