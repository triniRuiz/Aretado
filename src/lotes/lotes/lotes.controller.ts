import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { loteDto } from 'src/dtos/lote.dto';
import { LotesService } from './lotes.service';

@Controller('lotes')
export class LotesController {
  constructor(private lotesService: LotesService) {}

  //Creacion de lotes
  @Post('crear')
  crearlote(@Body() nuevoLote: loteDto) {
    return this.lotesService.crearLote(nuevoLote);
  }

  //Eliminar lotes

  //Editar lotes

  //Obtener lotes por usuario
}
