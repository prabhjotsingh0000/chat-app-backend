import { Model } from 'mongoose';
import { Message } from './message.model';
export declare class MessagesService {
    private messageModel;
    constructor(messageModel: Model<Message>);
    insertMessage(chat_id: string, sender_id: string, message: string): Promise<string>;
    getMessages(): Promise<{
        id: string;
        chat_id: string;
        sender_id: string;
        message: string;
    }[]>;
    getMessagesForAChat(chatId: string): Promise<any>;
    updateMessage(messageId: string, chat_id: string, sender_id: string, message: string): Promise<void>;
    deleteMessage(messageId: string): Promise<void>;
    private findMessage;
}
