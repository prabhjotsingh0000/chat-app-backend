import * as mongoose from 'mongoose';
export declare const MessageSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    chat_id: string;
    sender_id: string;
    message: string;
}>;
export interface Message extends mongoose.Document {
    id: string;
    chat_id: string;
    sender_id: string;
    message: string;
}
