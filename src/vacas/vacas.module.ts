import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { lotes } from 'src/entidades/lote.entity';
import { pesos } from 'src/entidades/pesos.entity';
import { razas } from 'src/entidades/razas.entity';
import { vacas } from 'src/entidades/vacas.entity';
import { VacasController } from './vacas/vacas.controller';
import { VacasService } from './vacas/vacas.service';

@Module({
  imports: [TypeOrmModule.forFeature([vacas, lotes, razas, pesos])],
  controllers: [VacasController],
  providers: [VacasService],
})
export class VacasModule {}
