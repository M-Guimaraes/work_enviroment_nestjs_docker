import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../../models/productmodels.';

@Controller('products')
export class ProductController {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>
  ) { }

  @Post()
  store(@Body() body) {
    const product = this.productRepo.create(body);
    return this.productRepo.save(product);
  }

}
