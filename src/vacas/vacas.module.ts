import { Module } from '@nestjs/common';
import { VacasController } from './vacas/vacas.controller';
import { VacasService } from './vacas/vacas.service';

@Module({
  controllers: [VacasController],
  providers: [VacasService],
})
export class VacasModule {}
