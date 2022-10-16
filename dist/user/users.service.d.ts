import { Model } from 'mongoose';
import { User } from './user.model';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    insertUser(name: string, email: string, password: string): Promise<string>;
    getUsers(): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
    }[]>;
    getSingleUser(userId: string): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
    }>;
    updateUser(userId: string, name: string, email: string, password: string): Promise<void>;
    deleteUser(userId: string): Promise<void>;
    private findUser;
}
