import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { lotes } from 'src/entidades/lote.entity';
import { razas } from 'src/entidades/razas.entity';
import { vacas } from 'src/entidades/vacas.entity';
import { Repository } from 'typeorm';
import { vacaDto } from 'src/dtos/vaca.dto';
import { pesos } from '../../entidades/pesos.entity';
//import { editarVacaDto } from '../../dtos/vaca.dto';

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

  //Creacion de Nueva vaca, al momento de crearla lo unico que
  //no registrara es la fecha de peso
  async crearVaca(vacaDto: vacaDto) {
    const raza = await this.razasRepository.findOne({
      where: { id: vacaDto.raza },
    });
    const lote = await this.lotesRepository.findOne({
      where: { id: vacaDto.lote },
    });
    const nuevaVaca = new vacas();
    const nuevoPeso = new pesos();
    nuevaVaca.arete = vacaDto.arete;
    nuevaVaca.fechaIng = vacaDto.fechaIng;
    nuevaVaca.fechaNac = vacaDto.fechaNac;
    nuevaVaca.fechaReg = vacaDto.fechaReg;
    nuevaVaca.lote = lote;
    nuevaVaca.raza = raza;
    const vaca = await this.vacasRepository.save(nuevaVaca);
    nuevoPeso.vaca = vaca;
    nuevoPeso.peso = vacaDto.peso;
    return this.pesosRepository.save(nuevoPeso);
  }

  //Eliminar Vaca
  async eliminarVaca(id: number) {
    return this.vacasRepository.delete({ id });
  }

  //Editar Vaca
  //async editarVaca(id: number, editarVaca: editarVacaDto) {
  //return this.vacasRepository.update({ id }, editarVaca);
  //}

  //Obtener Vacas por lote
  async vacasLote(idLote: number) {
    const loteF = await this.lotesRepository.findOne({
      where: { id: idLote },
    });

    const vacas: any = await this.vacasRepository.find({
      relations: {
        lote: true,
        raza: true,
      },
      where: {
        lote: loteF,
      },
    });
    for (let i = 0; i < vacas.length; i++) {
      const pesos = await this.pesosRepository.find({
        where: {
          vaca: {
            arete: vacas[i].arete,
          },
        },
      });
      console.log(pesos);
      vacas[i] = {
        ...vacas[i],
        pesos: pesos,
      };
    }
    return vacas;
  }
}
