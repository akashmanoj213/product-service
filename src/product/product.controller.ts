import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductRecommendationDto } from './dto/product-recommendation.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('recommendation')
  getRecommendation(@Body() productRecommendationDto: ProductRecommendationDto) {
    return this.productService.getRecommendation(productRecommendationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.getProduct(+id);
  }
}
