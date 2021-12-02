import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from '~/messages/dtos/create.message.dto';
import { MessagesService } from '~/messages/messages.service';

@Controller('messages')
export class MessagesController {
  // NOTE: https://xn--qiita-493d.com/kotaonaga/items/13bec787769d6e8efc52#%E3%82%B3%E3%83%B3%E3%82%B9%E3%83%88%E3%83%A9%E3%82%AF%E3%82%BF
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    console.log('body', body);
    const { content } = body;
    return this.messagesService.create(content);
  }
  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if (message) return message;
    throw new NotFoundException('Message not found!');
  }
}
