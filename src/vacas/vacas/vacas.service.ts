import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { vacas } from 'src/entidades/vacas.entity';
import { Repository } from 'typeorm';
import { lotes } from '../../entidades/lote.entity';

@Injectable()
export class VacasService {
  constructor(
    @InjectRepository(vacas)
    private vacasRepository: Repository<vacas>,
    private lotesRepository: Repository<lotes>,
  ) {}

  async getVacasLote(idLote: number) {
    const loteU = await this.lotesRepository.findOne({
      where: { id: idLote },
    });

    const vacas = await this.vacasRepository.find({
      relations: {
        lote: true,
        raza: true,
      },
      where: {
        lote: loteU,
      },
    });
  }
}
