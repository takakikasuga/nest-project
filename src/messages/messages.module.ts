import { Module } from '@nestjs/common';
import { MessagesController } from '~/messages/messages.controller';
import { MessagesService } from '~/messages/messages.service';
import { MessagesRepository } from '~/messages/messages.repository';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository],
})
export class MessagesModule {}
