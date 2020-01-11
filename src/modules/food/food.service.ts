import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Food } from './food.entity';

@Injectable()
export class FoodService {
  constructor(
    @InjectRepository(Food)
    private readonly foodRepository: Repository<Food>,
  ) {}

  getList(): Promise<Food[]> {
    return this.foodRepository.find();
  }
  getDetail(id: number): Promise<Food> {
    return  this.foodRepository.findOne({ id });
  }
  insert(param: Food) {
    return this.foodRepository.insert(param);
  }
  async del(id: number) {
    const target = await this.foodRepository.findOne(id);
    new Logger().log(target);
    await this.foodRepository.remove(target);
  }
}
