import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name: string;
    email: string;
    password: string;
}>;
export interface User extends mongoose.Document {
    id: string;
    name: string;
    email: string;
    password: string;
}
