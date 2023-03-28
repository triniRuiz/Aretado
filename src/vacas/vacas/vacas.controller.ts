import { Body, Controller, Delete, Post, ParseIntPipe } from '@nestjs/common';
import { VacasService } from './vacas.service';
import { vacaDto } from '../../dtos/vaca.dto';
import { Get, Param } from '@nestjs/common/decorators';

@Controller('vacas')
export class VacasController {
  constructor(private vacasService: VacasService) {}

  @Post('crear')
  crearVaca(@Body() nuevaVaca: vacaDto) {
    return this.vacasService.crearVaca(nuevaVaca);
  }

  @Delete('eliminar/:id')
  eliminarVaca(@Param('id', ParseIntPipe) id: number) {
    return this.vacasService.eliminarVaca(id);
  }

  @Get('lote/:idLote')
  obtenerVacasLote(@Param('idLote') idLote) {
    return this.vacasService.vacasLote(idLote);
  }
}
