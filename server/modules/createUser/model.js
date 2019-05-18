import mongoose, { Schema } from 'mongoose';

const NewUserSchema = new Schema({
    uid: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export default mongoose.model('Users', NewUserSchema);
