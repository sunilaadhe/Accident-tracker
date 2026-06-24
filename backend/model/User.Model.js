import { MongoOIDCError } from "mongodb";
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },

    avatar:{
        type:String,
        default:"https://i.pravatar.cc/150?img=3"
    },
    
    createAt:{
        type:Date,
        default:Date.now
    }
});


export const User = mongoose.model("User",userSchema);
