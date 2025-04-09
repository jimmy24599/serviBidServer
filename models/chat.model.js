import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  customerId: {
    type: String,
    required:true
  },
  providerId: {
    type: String,
    required:true
  },
  last_message: {
    type: String,
    required: true
  },
  last_message_type: {
    type: String,
    enum: ['text', 'file', 'image', 'video', 'audio'],
    default: 'text'
  }
}, { timestamps: true });

const Chat = mongoose.model('Chat', chatSchema);
export default Chat;