import mongoose from "mongoose";

const bidSchema = new mongoose.Schema({
    description:{
        type: String,
    },
    price:{
        type: Number,
        required: true
    },
    providerId:{
        type: String,
        required: true
    },
    requestId:{
        type: String,
        required:true,
    },
    
}, {
    timestamps:true   //created at, updated at
}); 

const Bid = mongoose.model('Bid', bidSchema) //create request collection

export default Bid;