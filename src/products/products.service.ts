import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto'; // <--- Добавили импорт

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  // Создание
  create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: createProductDto,
    });
  }

  // Список всех
  findAll() {
    return this.prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  // Один товар
  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  // Обновление (которого не хватало)
  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  // Удаление
  remove(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}