import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';
import { ChatsModule } from './chats/chats.module';
import { AppGateway } from './app.gateway';

@Module({
  imports: [
    MessagesModule,
    UsersModule, 
    ChatsModule,
    MongooseModule.forRoot('mongodb+srv://chatapplication:prabhjotchat@cluster0.epro8ox.mongodb.net/chat-db?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
