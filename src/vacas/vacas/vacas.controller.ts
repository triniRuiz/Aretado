import { Controller, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { vacas } from 'src/entidades/vacas.entity';
import { Repository } from 'typeorm';
import { VacasService } from './vacas.service';

@Controller('vacas')
export class VacasController {
  constructor(private vacasService: VacasService) {}

  @Get('lote')
  getvacaslote(@Param('idLote') idLote) {
    return this.vacasService.getVacasLote(idLote);
  }
}
