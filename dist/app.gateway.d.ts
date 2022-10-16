import { OnGatewayConnection, OnGatewayInit, OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { MessagesService } from './messages/messages.service';
import { Message } from './messages/message.model';
export declare class AppGateway implements OnGatewayConnection, OnGatewayInit, OnGatewayDisconnect {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    server: Server;
    private logger;
    handleSendMessage(client: Socket, payload: Message): Promise<void>;
    afterInit(server: Server): void;
    handleDisconnect(client: Socket): void;
    handleConnection(client: Socket, ...args: any[]): Promise<void>;
}
