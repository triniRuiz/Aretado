import { Body, Controller, Get, Post } from '@nestjs/common';
import { razaDto } from 'src/dtos/raza.dto';
import { RazasService } from './razas.service';

@Controller('razas')
export class RazasController {
  constructor(private razasService: RazasService) {}

  @Post('crear')
  crearaza(@Body() nuevaRaza: razaDto) {
    return this.razasService.crearRaza(nuevaRaza);
  }

  @Get('obtener')
  obtenerRazas() {
    return this.razasService.obtenerRaza();
  }
}
