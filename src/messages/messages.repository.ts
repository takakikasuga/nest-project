import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class MessagesRepository {
  async findOne(id: number) {
    const content = await prisma.messages.findFirst({
      where: { id },
    });
    return content;
  }
  async findAll() {
    const contents = await prisma.messages.findMany();
    return contents;
  }
  async create(content: string) {
    await prisma.messages.create({ data: { content } });
  }
}
