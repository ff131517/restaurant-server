import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';
import { Food } from './food.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Food])],
  providers: [FoodService],
  controllers: [FoodController],
})
export class FoodModule {}
