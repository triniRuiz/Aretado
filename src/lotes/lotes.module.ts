import { Module } from '@nestjs/common';
import { LotesController } from './lotes/lotes.controller';
import { LotesService } from './lotes/lotes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usuarios } from 'src/entidades/usuarios.entity';
import { lotes } from 'src/entidades/lote.entity';

@Module({
  imports: [TypeOrmModule.forFeature([lotes, usuarios])],
  controllers: [LotesController],
  providers: [LotesService],
})
export class LotesModule {}
