import mongoose, { Schema } from 'mongoose';

const ChatScheema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

export default mongoose.model('Chat', ChatScheema);