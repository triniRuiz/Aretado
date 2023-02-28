import { Controller } from '@nestjs/common';
import { VacasService } from './vacas.service';

@Controller('vacas')
export class VacasController {
  constructor(private vacasService: VacasService) {}
}
