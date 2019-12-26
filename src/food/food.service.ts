import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Food } from './food.entity';

@Injectable()
export class FoodService {
  constructor(
    @InjectRepository(Food)
    private readonly photoRepository: Repository<Food>,
  ) {}

  findAll(): Promise<Food[]> {
    return this.photoRepository.find();
  }
}
