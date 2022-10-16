import * as mongoose from 'mongoose';
export declare const ChatSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    members: any[];
}>;
export interface Chat extends mongoose.Document {
    id: string;
    members: Array<string>;
}
