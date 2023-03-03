import { Controller, ParseIntPipe } from '@nestjs/common';
import { Body, Param, Post, Put } from '@nestjs/common/decorators';
import { loteDto } from 'src/dtos/lote.dto';
import { LotesService } from './lotes.service';

@Controller('lotes')
export class LotesController {
  constructor(private lotesService: LotesService) {}

  //CREAR LOTE
  @Post('crear')
  crearlote(@Body() nuevoLote: loteDto) {
    return this.lotesService.crearLote(nuevoLote);
  }

  //ELIMINAR LOTE

  //EDITAR LOTES
  @Put('editar/:id')
  editarLote(@Param('id', ParseIntPipe) id: number, @Body() lote: loteDto) {
    return this.lotesService.editarLote(id, lote);
  }

  //OBTENER LOTES POR USUARIO
}
