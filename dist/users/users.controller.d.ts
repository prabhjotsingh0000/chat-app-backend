import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    addUser(userName: string, userEmail: string, userPassword: string): Promise<{
        id: string;
    }>;
    getAllUsers(): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
    }[]>;
    getUser(userId: string): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
    }>;
    getUserByEmail(userEmail: string, userPassword: string): Promise<any>;
    updateUser(userId: string, userName: string, userEmail: string, userPassword: string): Promise<any>;
    removeUser(userId: string): Promise<any>;
}
