import {
    OnGatewayConnection,
    OnGatewayInit,
    OnGatewayDisconnect,
    SubscribeMessage,
    MessageBody,
    WebSocketGateway,
    WebSocketServer,
    ConnectedSocket,
} from '@nestjs/websockets';

import { Socket, Server } from 'socket.io';
import { MessagesService } from './messages/messages.service';
import { Logger } from '@nestjs/common';
import { Message } from './messages/message.model';

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})

export class AppGateway
    implements OnGatewayConnection, OnGatewayInit, OnGatewayDisconnect {
    constructor(private readonly messagesService: MessagesService) { }

    @WebSocketServer()
    server: Server;

    private logger: Logger = new Logger('AppGateway');

    @SubscribeMessage('message')
    async handleSendMessage(
        @ConnectedSocket() client: Socket,
        @MessageBody() payload: Message,
    ): Promise<void> {
        await this.messagesService.insertMessage(payload.chat_id, payload.sender_id, payload.message);
        await this.server.emit('message', payload);
    }

    afterInit(server: Server) {
        this.logger.log(server);
        //Do stuffs
    }

    handleDisconnect(client: Socket) {
        this.logger.log(`Client disconnected: ${client.id}`);
        //Do stuffs
    }

    async handleConnection(client: Socket, ...args: any[]) {
        this.logger.log(`Client connected: ${client.id}`);
        //Do stuffs
    }
}