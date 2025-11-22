// src/products/dto/create-product.dto.ts
export class CreateProductDto {
  title: string;
  brand: string;
  category: string;
  priceKzt: number;
  priceRub: number;
  description?: string;
  imageUrl?: string;
}