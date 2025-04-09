import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  senderId: {
    type: String, 
    required: true,
  },
  receiverId: {
    type: String, 
    required: true,
  },
  chatId: {
    type: String, 
    required: true,
  },
  text: {
    type: String,
  },
  seen: { 
    type: Boolean, 
    default: false },
  type: { 
    type: String, 
    enum: ['text', 'file', 'audio', 'image', 'video'], 
    default: 'text' 
  },
  fileUrl: { 
    type: String 
  },
  fileName: { 
    type: String 
  },
  fileSize: { 
    type: String 
  },
  fileType: { 
    type: String 
  },
  duration: { 
    type: String 
  }



}, { timestamps: true });

export default mongoose.model("Message", MessageSchema);