import { Controller, Get } from '@nestjs/common';
import { FoodService } from './food.service';

@Controller('food')
export class FoodController {
  constructor(private readonly appService: FoodService) {}

  @Get('findAll')
  getHello() {
    return this.appService.findAll();
  }
}
