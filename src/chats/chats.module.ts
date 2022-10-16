import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ChatsController } from './chats.controller';
import { ChatsService } from './chats.service';
import { ChatSchema } from './chat.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Chat', schema: ChatSchema }]),
  ],
  controllers: [ChatsController],
  providers: [ChatsService],
  exports: [ChatsService]
})

export class ChatsModule { }