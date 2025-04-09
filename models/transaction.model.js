import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  customerId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Customer", 
    required: true 
},
  providerId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "ServiceProvider", 
    required: true 
},
  requestId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Request", 
    required: true 
},
  stripeSessionId: { 
    type: String, 
    required: true 
},
  amount: { 
    type: Number, 
    required: true },
  currency: { 
    type: String, 
    default: "aed" },
  status: { 
    type: String, 
    default: "pending" },
  createdAt: { 
    type: Date, 
    default: Date.now },
}, {
  timestamps:true   //created at, updated at
});

export default mongoose.model("Transaction", transactionSchema);
