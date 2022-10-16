import * as mongoose from 'mongoose';

export const ChatSchema = new mongoose.Schema({
    members: {ref: 'User', type: Array<String>, required: true}
});

export interface Chat extends mongoose.Document {
    id: string;
    members: Array<string>;
}