import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true 
      },
      type: {
        type: String,
        enum: ['new_job', 'bid_accepted', 'new_message', 'payment', 'review', 'new_bid', 'request_created'],
        required: true
      },
      message: {
        type: String,
        required: true
      },
      meta: {
        type: mongoose.Schema.Types.Mixed
      },
      read: {
        type: Boolean,
        default: false
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
}, { timestamps: true });

const Notification = mongoose.model('Notification', notificationSchema);
export default Notification;