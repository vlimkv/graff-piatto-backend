import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

  // Создать
  create(data: any) {
    return this.prisma.event.create({ data });
  }

  // Найти все
  findAll() {
    return this.prisma.event.findMany({ orderBy: { createdAt: 'desc' } });
  }

  // Найти одно (ЭТОГО НЕ ХВАТАЛО)
  findOne(id: number) {
    return this.prisma.event.findUnique({ where: { id } });
  }

  // Обновить (ЭТОГО НЕ ХВАТАЛО)
  update(id: number, data: any) {
    return this.prisma.event.update({
      where: { id },
      data,
    });
  }

  // Удалить
  remove(id: number) {
    return this.prisma.event.delete({ where: { id } });
  }
}