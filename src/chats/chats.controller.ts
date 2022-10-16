import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
} from '@nestjs/common';

import { ChatsService } from './chats.service';

@Controller('chats')
export class ChatsController {
    constructor(private readonly chatsService: ChatsService) { }

    @Post()
    async addChat(
        @Body('members') members: Array<string>
    ) {
        const generatedId = await this.chatsService.insertChat(
            members
        );
        return { id: generatedId };
    }

    @Get()
    async getAllChats() {
        const chats = await this.chatsService.getChats();
        return chats;
    }

    @Get(':id')
    async getChat(@Param('id') userId: string) {
        return await this.chatsService.getChatsForAUser(userId);
    }

    @Patch(':id')
    async updateChat(
        @Param('id') chatId: string,
        @Body('members') members: Array<string>,
    ) {
        await this.chatsService.updateChat(chatId, members);
        return null;
    }

    @Delete(':id')
    async removeChat(@Param('id') chatId: string) {
        await this.chatsService.deleteChat(chatId);
        return null;
    }
}