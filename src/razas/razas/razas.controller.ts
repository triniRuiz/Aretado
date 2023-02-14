import { Body, Controller, Get, Post } from '@nestjs/common';
import { RazasService } from './razas.service';
import { razaDto } from '../../dtos/raza.dto';

@Controller('razas')
export class RazasController {
  constructor(private razasService: RazasService) {}

  @Get()
  getrazas() {
    return this.razasService.getRaza();
  }

  @Post('raza')
  postrazas(@Body() nuevaRaza: razaDto) {
    return this.razasService.postRaza(nuevaRaza);
  }
}
