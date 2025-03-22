import mongoose from "mongoose";

const servicesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String, // Changed from Number to String
        required: true
    },
    description: {
        type: String,
        required: true
    },
    icon: {
        type: String, 
        required: true
    },
}, {
    timestamps: true   // Adds createdAt and updatedAt timestamps
}); 

const Services = mongoose.model('Services', servicesSchema); // Fixed variable name
export default Services;
