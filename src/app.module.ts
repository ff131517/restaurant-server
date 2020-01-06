import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodModule } from './modules/food/food.module';
import { Food } from './modules/food/food.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Ff.131517',
      database: 'foods',
      entities: [Food],
      synchronize: true,
    }),
    FoodModule,
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {
  // constructor() {}
}
