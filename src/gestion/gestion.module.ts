import { Module } from '@nestjs/common';
import { GestionController } from './gestion/gestion.controller';
import { GestionService } from './gestion/gestion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { vacas } from 'src/entidades/vacas.entity';
import { pesos } from 'src/entidades/pesos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([vacas, pesos])],
  controllers: [GestionController],
  providers: [GestionService],
})
export class GestionModule {}
