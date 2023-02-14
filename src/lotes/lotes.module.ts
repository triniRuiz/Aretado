import { Module } from '@nestjs/common';
import { LotesController } from './lotes/lotes.controller';
import { LotesService } from './lotes/lotes.service';

@Module({
  controllers: [LotesController],
  providers: [LotesService]
})
export class LotesModule {}
