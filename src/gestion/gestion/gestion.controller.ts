import { Controller } from '@nestjs/common';
import { Body, Get, Param, Post } from '@nestjs/common/decorators';
import { GestionService } from './gestion.service';
import { pesoDto } from '../../dtos/peso.dto';

@Controller('gestion')
export class GestionController {
  constructor(private gestionService: GestionService) {}

  @Post('peso')
  nuevoPeso(@Body() nuevopeso: pesoDto) {
    return this.gestionService.nuevoPeso(nuevopeso);
  }

  //PESO POR VACA POR SEMANA
  @Get('vacaSemana/:idvaca/:anno')
  pesoVacaSemana(@Param('idvaca') idvaca: number, @Param('anno') anno: string) {
    return this.gestionService.pesoVaca(idvaca, anno);
  }

  //PESO POR VACA POR MES
  @Get('vacaMes/:idvaca/:mes/:anno')
  pesoVacaMes(
    @Param('idvaca') idvaca: number,
    @Param('anno') anno: string,
    @Param('mes') mes: string,
  ) {
    return this.gestionService.pesoVacaMes(idvaca, anno, mes);
  }

  //PESO POR LOTE mes
  @Get('loteMes/:idLote/:mes/:anno')
  pesoLote(
    @Param('idLote') idLote: number,
    @Param('anno') anno: string,
    @Param('mes') mes: string,
  ) {
    return this.gestionService.pesoLoteMes(idLote, anno, mes);
  }

  //Varianza lote semana
  @Get('lote/:idLote/:anno')
  loteMes(@Param('idLote') idLote: number, @Param('anno') anno: string) {
    return this.gestionService.pesoLote(idLote, anno);
  }
}
