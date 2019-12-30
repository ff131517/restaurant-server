import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Food } from './food.entity';

@Injectable()
export class FoodService {
  constructor(
    @InjectRepository(Food)
    private readonly foodRepository: Repository<Food>,
  ) {}

  findAll(): Promise<Food[]> {
    return this.foodRepository.find();
  }
  createFood(param: Food) {
    return this.foodRepository.insert(param);
  }
}
