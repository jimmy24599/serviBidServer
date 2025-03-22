import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
    customerID:{
        type:String,
        required:true
    },
    providerId:{
        type:String,
    },
    description:{
        type: String,
    },
    budget:{
        type: Number,
        required: true
    },
    service:{
        type: String,
        required: true
    },
    price:{
        type:Number,
    },
    date:{
        type: Date,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    state:{
        type: String,
        default: 'in-progress',
    },
    //Needed??
    reviewId:{
        type: String,
    }
    
}, {
    timestamps:true   //created at, updated at
}); 

const Request = mongoose.model('Request', requestSchema) //create request collection

export default Request;