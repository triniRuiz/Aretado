import { Module } from '@nestjs/common';
import { RazasController } from './razas/razas.controller';
import { RazasService } from './razas/razas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { razas } from '../entidades/razas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([razas])],
  controllers: [RazasController],
  providers: [RazasService],
})
export class RazasModule {}
