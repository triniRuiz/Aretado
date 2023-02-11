import { Controller, Get } from '@nestjs/common';
import { RazasService } from './razas.service';

@Controller('razas')
export class RazasController {
  constructor(private razasService: RazasService) {}

  @Get()
  getrazas() {
    return this.razasService.getRaza();
  }
}
