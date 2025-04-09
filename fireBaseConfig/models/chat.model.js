const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  participants: [String],
  lastMessage: String,
  lastMessageAt: Date,
  requestId: String
});

module.exports = mongoose.model('Chat', chatSchema);