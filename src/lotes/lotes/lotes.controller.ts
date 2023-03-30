import { Controller, ParseIntPipe } from '@nestjs/common';
import { Body, Delete, Param, Patch, Post } from '@nestjs/common/decorators';
import { edloteDto, loteDto } from 'src/dtos/lote.dto';
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
  @Delete('eliminar/:id')
  eliminarLote(@Param('id', ParseIntPipe) id: number) {
    return this.lotesService.eliminarLote(id);
  }

  //EDITAR Lote
  @Patch(':id')
  editaRaza(@Param('id', ParseIntPipe) id: number, @Body() lotes: edloteDto) {
    return this.lotesService.editarLote(id, lotes);
  }
}
