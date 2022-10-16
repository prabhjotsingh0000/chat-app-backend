import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chat } from './chat.model';

@Injectable()

export class ChatsService {
    constructor(
        @InjectModel('Chat') private chatModel: Model<Chat>,
    ) { }

    async insertChat(members: Array<string>) {
        const newChat = new this.chatModel({
            members
        });
        const result = await newChat.save();
        console.log(result);
        return result.id;
    }


    async getChats() {
        const chats = await this.chatModel.find().exec();
        return chats.map(chat => ({
            members: chat.members,
        }));
    }

    async getChatsForAUser(userId: string): Promise<any> {
        const chats = await this.chatModel.find({ members : { $all: [userId] } });
        console.log(userId);
        console.log(chats);
        return chats;
    }


    async updateChat(chatId: string, members: Array<string>) {
        const updatedChat = await this.findChat(chatId);
        if (members) {
            updatedChat.members = members;
        }
        updatedChat.save();

    }

    async deleteChat(chatId: string) {
        const result = await this.chatModel.deleteOne({ _id: chatId }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException('Could not find chat.');
        }
    }

    private async findChat(id: string): Promise<Chat> {
        let chat;
        try {
            chat = await this.chatModel.findById(id).exec();
        } catch (error) {
            throw new NotFoundException('Could not find chat.');
        }

        if (!chat) {
            throw new NotFoundException('Could not find chat.');
        }
        return chat;
    }
}