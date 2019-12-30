import { Controller, Get, Post, Req, Logger } from '@nestjs/common';
import { FoodService } from './food.service';
import { Request } from 'express';
@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Get('getFoodList')
  findAll() {
    return this.foodService.findAll();
  }
  @Post('createFood')
 async createFood(@Req() request: Request) {
  const logger = new Logger();
  logger.log(request.body);
  await this.foodService.createFood(request.body);
  return {
      msg: 'success',
    };
  }
}
