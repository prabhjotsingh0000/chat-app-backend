import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
    chat_id: {ref: 'Chat', type: String, required: true},
    sender_id: {ref: 'User', type: String, required: true},
    message: {type: String, required: true}
});

export interface Message extends mongoose.Document {
    id: string;
    chat_id: string;
    sender_id: string;
    message: string;
}