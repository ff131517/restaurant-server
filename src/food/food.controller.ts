import { Controller, Get, Post, Req, Logger } from '@nestjs/common';
import { FoodService } from './food.service';
import { Request } from 'express';
const logger = new Logger();

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Get('getList')
  getList() {
    return this.foodService.getList();
  }
  @Get('getDetail')
  getDetail(@Req() request: Request) {

    return  this.foodService.getDetail(Number(request.param('id')));
  }
  @Post('insert')
  async createFood(@Req() request: Request) {
    logger.log(request.body);
    await this.foodService.insert(request.body);
  }
  @Post('delete')
  async delete(@Req() request: Request) {
    logger.log(request.body);
    await this.foodService.del(request.body);
  }
}
