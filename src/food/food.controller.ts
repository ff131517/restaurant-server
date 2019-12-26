import { Controller, Get, Post, Req } from '@nestjs/common';
import { FoodService } from './food.service';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Get('getFoodList')
  findAll() {
    return this.foodService.findAll();
  }
  @Post("create")
  createFood(@Req() req){
      req
  }
}
