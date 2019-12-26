import { Controller, Get } from '@nestjs/common';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
  constructor(private readonly appService: PhotoService) {}

  @Get('findAll')
  getHello() {
    return this.appService.findAll();
  }
}
