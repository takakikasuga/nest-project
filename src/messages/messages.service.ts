import { Injectable } from '@nestjs/common';
import { MessagesRepository } from '~/messages/messages.repository';

@Injectable()
export class MessagesService {
  // NOTE: https://xn--qiita-493d.com/kotaonaga/items/13bec787769d6e8efc52#%E3%82%B3%E3%83%B3%E3%82%B9%E3%83%88%E3%83%A9%E3%82%AF%E3%82%BF
  constructor(public messageRepo: MessagesRepository) {}

  findOne(id: string) {
    const numberId = Number(id);
    return this.messageRepo.findOne(numberId);
  }

  findAll() {
    return this.messageRepo.findAll();
  }

  create(content: string) {
    console.log('content = ', content);
    return this.messageRepo.create(content);
  }
}
