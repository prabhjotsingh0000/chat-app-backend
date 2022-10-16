import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
} from '@nestjs/common';

import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) { }

    @Post()
    async addMessage(
        @Body('chat_id') chat: string,
        @Body('sender_id') sender: string,
        @Body('message') message: string,
    ) {
        const generatedId = await this.messagesService.insertMessage(
            chat,
            sender,
            message,
        );
        return { id: generatedId };
    }

    @Get()
    async getAllMessages() {
        const messages = await this.messagesService.getMessages();
        return messages;
    }

    @Get(':id')
    async getMessage(@Param('id') chatId: string) {
        return await this.messagesService.getMessagesForAChat(chatId);
    }

    @Patch(':id')
    async updateMessage(
        @Param('id') messageId: string,
        @Body('chat_id') chat: string,
        @Body('sender_id') sender: string,
        @Body('message') message: string,
    ) {
        await this.messagesService.updateMessage(messageId, chat, sender, message);
        return null;
    }

    @Delete(':id')
    async removeMessage(@Param('id') messageId: string) {
        await this.messagesService.deleteMessage(messageId);
        return null;
    }
}