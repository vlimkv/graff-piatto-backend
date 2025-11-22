// src/products/products.module.ts
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService],
  exports: [ProductsService],
})
export class ProductsModule {}