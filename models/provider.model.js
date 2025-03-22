import mongoose from "mongoose";

const providerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true 
    },
    rating:{
        type: Number,
        min: 0,
        max: 5,
        default: 0,
    },
    revenue:{
        type: Number,
        default: 0,
    },
    service:{
        type: String,
    },
    jobsDone:{
        type: Number,
        default: 0,
    },
    phone:{
        
    }
}, {
    timestamps:true   //created at, updated at
}); 

const Provider = mongoose.model('Provider', providerSchema) //create Service Provider collection

export default Provider;