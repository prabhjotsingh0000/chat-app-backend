import { MessagesService } from './messages.service';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    addMessage(chat: string, sender: string, message: string): Promise<{
        id: string;
    }>;
    getAllMessages(): Promise<{
        id: string;
        chat_id: string;
        sender_id: string;
        message: string;
    }[]>;
    getMessage(chatId: string): Promise<any>;
    updateMessage(messageId: string, chat: string, sender: string, message: string): Promise<any>;
    removeMessage(messageId: string): Promise<any>;
}
