import { Controller } from '@nestjs/common';
import { GestionService } from './gestion.service';

@Controller('gestion')
export class GestionController {
  constructor(private gestionService: GestionService) {}
}
