import { Model } from 'mongoose';
import { Chat } from './chat.model';
export declare class ChatsService {
    private chatModel;
    constructor(chatModel: Model<Chat>);
    insertChat(members: Array<string>): Promise<string>;
    getChats(): Promise<{
        members: string[];
    }[]>;
    getChatsForAUser(userId: string): Promise<any>;
    updateChat(chatId: string, members: Array<string>): Promise<void>;
    deleteChat(chatId: string): Promise<void>;
    private findChat;
}
