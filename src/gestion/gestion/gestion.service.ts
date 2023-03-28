import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { pesos } from 'src/entidades/pesos.entity';
import { vacas } from 'src/entidades/vacas.entity';
import { Repository } from 'typeorm';
import { pesoDto } from '../../dtos/peso.dto';

@Injectable()
export class GestionService {
  constructor(
    @InjectRepository(pesos)
    private pesosRepository: Repository<pesos>,
    @InjectRepository(vacas)
    private vacaRepository: Repository<vacas>,
  ) {}

  async nuevoPeso(pesoDto: pesoDto) {
    const vacaP = await this.vacaRepository.findOne({
      where: { id: pesoDto.idVaca },
    });
    const nuevoPeso = new pesos();
    nuevoPeso.fechaPeso = pesoDto.fechaPeso;
    nuevoPeso.peso = pesoDto.peso;
    nuevoPeso.vaca = vacaP;
    return this.pesosRepository.save(nuevoPeso);
  }
}
