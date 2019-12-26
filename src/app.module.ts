import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo/photo.entity';
import { PhotoModule } from './photo/photo.module';
import { FoodModule } from './food/food.module';
import { Food } from './food/food.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Ff.131517',
      database: 'foods',
      entities: [Photo, Food],
      synchronize: true,
    }),
    PhotoModule,
    FoodModule,
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {
  // constructor() {}
}
