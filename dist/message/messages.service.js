"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let MessagesService = class MessagesService {
    constructor(messageModel) {
        this.messageModel = messageModel;
    }
    async insertMessage(chat_id, sender_id, message) {
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
    async getMessagesForAChat(chatId) {
        const messages = await this.messageModel.find({ chat_id: { $all: [chatId] } });
        console.log(messages);
        return messages;
    }
    async updateMessage(messageId, chat_id, sender_id, message) {
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
    async deleteMessage(messageId) {
        const result = await this.messageModel.deleteOne({ _id: messageId }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException('Could not find message.');
        }
    }
    async findMessage(id) {
        let message;
        try {
            message = await this.messageModel.findById(id).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find message.');
        }
        if (!message) {
            throw new common_1.NotFoundException('Could not find message.');
        }
        return message;
    }
};
MessagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Message')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MessagesService);
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map