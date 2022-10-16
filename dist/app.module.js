"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const messages_module_1 = require("./messages/messages.module");
const chats_module_1 = require("./chats/chats.module");
const app_gateway_1 = require("./app.gateway");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            messages_module_1.MessagesModule,
            users_module_1.UsersModule,
            chats_module_1.ChatsModule,
            mongoose_1.MongooseModule.forRoot('mongodb+srv://chatapplication:prabhjotchat@cluster0.epro8ox.mongodb.net/chat-db?retryWrites=true&w=majority')
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, app_gateway_1.AppGateway],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map