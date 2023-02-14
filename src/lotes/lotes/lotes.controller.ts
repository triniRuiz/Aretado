import { Controller, Get, Param } from '@nestjs/common';
import { LotesService } from './lotes.service';

@Controller('lotes')
export class LotesController {
  constructor(private lotesService: LotesService) {}

  @Get('usuario')
  getlotes(@Param('idUsuario') idUsuario) {
    // return this.lotesService.getLotes(idUsuario);
  }
}
