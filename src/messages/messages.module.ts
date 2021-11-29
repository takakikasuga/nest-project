import { Module } from '@nestjs/common';
import { AppController } from '~/app.controller';
import { MessagesController } from '~/messages/messages.controller';

@Module({
  controllers: [AppController, MessagesController],
})
export class MessagesModule {}
