import { Controller, Get, Post, Req, Logger } from '@nestjs/common';
import { FoodService } from './food.service';
import { Request } from 'express';
@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Get('getList')
  getList() {
    return this.foodService.getList();
  }
  @Post('insert')
  async createFood(@Req() request: Request) {
    const logger = new Logger();
    logger.log(request.body);
    await this.foodService.insert(request.body);
  }
  @Post('delete')
  async delete(@Req() request: Request) {
    const logger = new Logger();
    logger.log(request.body);
    await this.foodService.del(request.body);
  }
}
