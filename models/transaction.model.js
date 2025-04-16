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
  service: { 
    type: String, 
    required: true 
  },
  amount: { 
    type: Number, 
    required: true 
  },
  lastDigits: { 
    type: String, 
    required: true 
  },
  cardBrand: { 
    type: String, 
    required: true 
  },
  currency: { 
    type: String, 
    default: "AED" 
  },
  status: { 
    type: String, 
    default: "received" 
  },
  createdAt: { 
    type: Date, 
    default: Date.now },
}, {
  timestamps:true   //created at, updated at
});

export default mongoose.model("Transaction", transactionSchema);
