import { Module } from '@nestjs/common';
import { GestionController } from './gestion/gestion.controller';
import { GestionService } from './gestion/gestion.service';

@Module({
  controllers: [GestionController],
  providers: [GestionService]
})
export class GestionModule {}
