import { ChatsService } from './chats.service';
export declare class ChatsController {
    private readonly chatsService;
    constructor(chatsService: ChatsService);
    addChat(members: Array<string>): Promise<{
        id: string;
    }>;
    getAllChats(): Promise<{
        members: string[];
    }[]>;
    getChat(userId: string): Promise<any>;
    updateChat(chatId: string, members: Array<string>): Promise<any>;
    removeChat(chatId: string): Promise<any>;
}
