import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    role:{
        type: String,
    },
    email:{
        type: String,
        required: true
    },
    phone_number:{
        type: String,
    },
    location:{
        type: String,
    },
    city:{
        type: String,
    },
    emirate:{
        type: String,
    },
    
}, {
    timestamps:true   //created at, updated at
}); 

const Customer = mongoose.model('Customer', customerSchema) //create customer collection

export default Customer;