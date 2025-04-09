const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  senderId: String,
  content: String,
  timestamp: Date,
  chatId: String,
  read: Boolean
});

module.exports = mongoose.model('Message', messageSchema);