import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from '~/messages/dtos/create.message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}
  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    console.log('body', body);
  }
  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log('id', id);
  }
}
