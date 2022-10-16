import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './message.model';

@Injectable()

export class MessagesService {
    constructor(
        @InjectModel('Message') private messageModel: Model<Message>,
    ) { }

    async insertMessage(chat_id: string, sender_id: string, message: string) {
        const newMessage = new this.messageModel({
            chat_id,
            sender_id,
            message,
        });
        const result = await newMessage.save();
        console.log(result);
        return result.id;
    }


    async getMessages() {
        const messages = await this.messageModel.find().exec();
        return messages.map(currMessage => ({
            id: currMessage.id,
            chat_id: currMessage.chat_id,
            sender_id: currMessage.sender_id,
            message: currMessage.message,
        }));
    }

    async getMessagesForAChat(chatId: string): Promise<any> {
        const messages = await this.messageModel.find({ chat_id: { $all: [chatId] } });
        console.log(messages);
        return messages;
    }


    async updateMessage(messageId: string, chat_id: string, sender_id: string, message: string) {
        const updatedMessage = await this.findMessage(messageId);
        if (chat_id) {
            updatedMessage.chat_id = chat_id;
        }
        if (sender_id) {
            updatedMessage.sender_id = sender_id;
        }
        if (message) {
            updatedMessage.message = message;
        }
        updatedMessage.save();

    }

    async deleteMessage(messageId: string) {
        const result = await this.messageModel.deleteOne({ _id: messageId }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException('Could not find message.');
        }
    }

    private async findMessage(id: string): Promise<Message> {
        let message;
        try {
            message = await this.messageModel.findById(id).exec();
        } catch (error) {
            throw new NotFoundException('Could not find message.');
        }

        if (!message) {
            throw new NotFoundException('Could not find message.');
        }
        return message;
    }
}