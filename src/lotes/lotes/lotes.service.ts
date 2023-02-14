import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { lotes } from '../../entidades/lote.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LotesService {
  constructor(
    @InjectRepository(lotes)
    private lotesRepository: Repository<lotes>,
  ) {}

  //  async getLotes(idUsuario: number) {
  //  const lotesU = await this.lotesRepository.find
  //}
}
