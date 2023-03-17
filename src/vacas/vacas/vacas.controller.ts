import { Body, Controller, Post } from '@nestjs/common';
import { VacasService } from './vacas.service';
import { vacaDto } from '../../dtos/vaca.dto';
import { pesoDto } from 'src/dtos/peso.dto';

@Controller('vacas')
export class VacasController {
  constructor(private vacasService: VacasService) {}

  @Post('crear')
  crearVaca(@Body() nuevaVaca: vacaDto, peso: pesoDto) {
    return this.vacasService.crearVaca(nuevaVaca, peso);
  }
}
