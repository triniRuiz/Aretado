import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { pesoDto } from 'src/dtos/peso.dto';
import { lotes } from 'src/entidades/lote.entity';
import { pesos } from 'src/entidades/pesos.entity';
import { razas } from 'src/entidades/razas.entity';
import { vacas } from 'src/entidades/vacas.entity';
import { Repository } from 'typeorm';
import { vacaDto } from 'src/dtos/vaca.dto';

@Injectable()
export class VacasService {
  constructor(
    @InjectRepository(vacas)
    private vacasRepository: Repository<vacas>,
    @InjectRepository(lotes)
    private lotesRepository: Repository<lotes>,
    @InjectRepository(razas)
    private razasRepository: Repository<razas>,
    @InjectRepository(pesos)
    private pesosRepository: Repository<pesos>,
  ) {}

  async crearVaca(vacaDto: vacaDto, pesoDto: pesoDto) {
    const lote = await this.lotesRepository.findOne({
      where: { id: vacaDto.lote },
    });
    const raza = await this.razasRepository.findOne({
      where: { id: vacaDto.raza },
    });
    const nuevaVaca = new vacas();
    const peso = new pesos();
    nuevaVaca.arete = vacaDto.arete;
    nuevaVaca.fechaIng = vacaDto.fechaIng;
    nuevaVaca.fechaNac = vacaDto.fechaNac;
    nuevaVaca.fechaReg = vacaDto.fechaReg;
    nuevaVaca.lote = lote;
    nuevaVaca.raza = raza;
    const vaca = await this.vacasRepository.save(nuevaVaca);
    peso.vaca = vaca;
    peso.fechaPeso = pesoDto.fechaPeso;
    peso.peso = pesoDto.peso;
    const pesosNuevo = await this.pesosRepository.save(peso);
  }
}
