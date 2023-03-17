<<<<<<< Updated upstream
import { Controller, ParseIntPipe } from '@nestjs/common';
import { Body, Get, Param, Post, Put } from '@nestjs/common/decorators';
import { edloteDto, loteDto } from 'src/dtos/lote.dto';
=======
import { Controller, Get, Param, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { loteDto } from 'src/dtos/lote.dto';
>>>>>>> Stashed changes
import { LotesService } from './lotes.service';

@Controller('lotes')
export class LotesController {
  constructor(private lotesService: LotesService) {}

<<<<<<< Updated upstream
  //CREAR LOTE
  @Post('crear')
  crearlote(@Body() nuevoLote: loteDto) {
    return this.lotesService.crearLote(nuevoLote);
  }

  //ELIMINAR LOTE

  //EDITAR LOTES **No funciona REVISAR
  @Put(':idLote')
  editarLote(@Param('id', ParseIntPipe) id: number, @Body() lote: edloteDto) {
    return this.lotesService.editarLotes(id, lote);
  }

  //OBTENER LOTES POR USUARIO
  @Get('usuario/:idusuario')
  lotesUsuario(@Param('idusuario') idusuario) {
    return this.lotesService.lotesUsuario(idusuario);
  }
=======
  @Post()
  crearlote(@Body() nuevolote: loteDto) {}

>>>>>>> Stashed changes
}
