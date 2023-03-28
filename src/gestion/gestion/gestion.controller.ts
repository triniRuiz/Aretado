import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { GestionService } from './gestion.service';
import { pesoDto } from '../../dtos/peso.dto';

@Controller('gestion')
export class GestionController {
  constructor(private gestionService: GestionService) {}

  @Post('peso')
  nuevoPeso(@Body() nuevopeso: pesoDto) {
    return this.gestionService.nuevoPeso(nuevopeso);
  }
}
