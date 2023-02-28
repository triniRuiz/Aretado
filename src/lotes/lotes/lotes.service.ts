import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { loteDto } from 'src/dtos/lote.dto';
import { lotes } from 'src/entidades/lote.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LotesService {
  constructor(
    @InjectRepository(lotes)
    private lotesRepository: Repository<lotes>,
  ) {}

  //Creacion de lotes
  async crearLote(loteDto: loteDto) {
    const nuevoLote = this.lotesRepository.create(loteDto);
    return this.lotesRepository.save(nuevoLote);
  }
}
