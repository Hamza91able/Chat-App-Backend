import mongoose, { Schema } from 'mongoose';

const ChatScheema = new Schema({
  message: {
    type: String,
    required: true,
  },
  sentBy: {
    type: String,
    required: true,
  },
  sentTo: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
  },
}, { timestamps: true });

export default mongoose.model('Chat', ChatScheema);
