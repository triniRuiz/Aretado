import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { pesos } from 'src/entidades/pesos.entity';
import { vacas } from 'src/entidades/vacas.entity';
import { Like, Repository } from 'typeorm';
import { pesoDto } from '../../dtos/peso.dto';
import {
  pesoVacaSemana,
  pesoLoteSemana,
} from 'src/interfaces/peso.semana.interface';
import { lotes } from 'src/entidades/lote.entity';

@Injectable()
export class GestionService {
  constructor(
    @InjectRepository(pesos)
    private pesosRepository: Repository<pesos>,
    @InjectRepository(vacas)
    private vacasRepository: Repository<vacas>,
    @InjectRepository(lotes)
    private lotesRepository: Repository<lotes>,
  ) {}

  async nuevoPeso(pesoDto: pesoDto) {
    const vacaP = await this.vacasRepository.findOne({
      where: { id: pesoDto.idVaca },
    });
    const nuevoPeso = new pesos();
    nuevoPeso.fechaPeso = pesoDto.fechaPeso;
    nuevoPeso.peso = pesoDto.peso;
    nuevoPeso.vaca = vacaP;
    return this.pesosRepository.save(nuevoPeso);
  }

  //OBTENER PESO POR VACA POR SEMANA
  async pesoVaca(idVaca: number, anno: string) {
    let skip = 0;
    const TAKE = 7;
    let pesosVaca = await this.obtenerPesoVacaSemana(idVaca, skip, TAKE, anno);
    const PESOS_VACA_SEMANA: pesoVacaSemana[] = [];

    while (pesosVaca.length >= 1) {
      console.log(pesosVaca);
      const REGISTRO: pesoVacaSemana = {
        fecha: pesosVaca[0].fechaPeso,
        pesos: [],
      };
      for (const peso of pesosVaca) {
        REGISTRO.pesos.push({
          fecha: peso.fechaPeso,
          peso: peso.peso,
        });
      }
      PESOS_VACA_SEMANA.push(REGISTRO);
      pesosVaca = [];
      skip = skip + 7;
      pesosVaca = await this.obtenerPesoVacaSemana(idVaca, skip, TAKE, anno);
    }
    return PESOS_VACA_SEMANA;
  }

  //OBTENER PESO POR VACA MES
  async pesoVacaMes(idVaca: number, anno: string, mes: string) {
    return await this.obtenerPesoMesV(idVaca, anno, mes);
  }

  //OBTENER PESO POR LOTE SEMANA
  async pesoLote(idLote: number, anno: string) {
    let skip = 0;
    const TAKE = 7;
    let pesosLote = await this.obtenerPesoVacaSemana(idLote, skip, TAKE, anno);
    const PESOS_LOTE_SEMANA: pesoLoteSemana[] = [];

    while (pesosLote.length >= 1) {
      console.log(pesosLote);
      const REGISTRO: pesoLoteSemana = {
        fecha: pesosLote[0].fechaPeso,
        pesos: [],
      };
      for (const peso of pesosLote) {
        REGISTRO.pesos.push({
          fecha: peso.fechaPeso,
          peso: peso.peso,
        });
      }
      PESOS_LOTE_SEMANA.push(REGISTRO);
      pesosLote = [];
      skip = skip + 7;
      pesosLote = await this.obtenerPesoVacaSemana(idLote, skip, TAKE, anno);
    }
    return PESOS_LOTE_SEMANA;
  }

  //OBTENER PESO LOTE MES
  async pesoLoteMes(idLote: number, anno: string, mes: string) {
    return await this.obtenerPesoLoteMes(idLote, anno, mes);
  }

  //OBTENER PESO POR LOTE
  private async pesoLoteSemana(
    idLote: number,
    skip: number,
    take: number,
    anno: string,
  ) {
    const lote = await this.lotesRepository.findOne({
      where: { id: idLote },
    });
    const vacas = await this.vacasRepository.find({
      where: {
        lote: lote,
      },
    });
    const pesoL = await this.pesosRepository.find({
      where: {
        vaca: vacas,
        fechaPeso: Like(`%${anno}%`),
      },
      order: {
        fechaPeso: 'ASC',
      },
      skip,
      take,
    });
    return pesoL;
  }

  private async obtenerPesoLoteMes(idLote: number, anno: string, mes: string) {
    const loteM = await this.lotesRepository.findOne({
      where: { id: idLote },
    });
    const vacas = await this.vacasRepository.findOne({
      where: {
        lote: loteM,
      },
    });
    const pesoML = await this.pesosRepository.find({
      where: {
        vaca: vacas,
        fechaPeso: Like(`%/${mes}/${anno}%`),
      },
      order: {
        fechaPeso: 'ASC',
      },
    });
    return pesoML;
  }

  private async obtenerPesoVacaSemana(
    idVaca: number,
    skip: number,
    take: number,
    anno: string,
  ) {
    const vaca = await this.vacasRepository.findOne({
      where: { id: idVaca },
    });
    const pesos = await this.pesosRepository.find({
      select: {
        fechaPeso: true,
        peso: true,
        id: true,
      },
      where: {
        vaca: vaca,
        fechaPeso: Like(`%${anno}%`),
      },
      order: {
        fechaPeso: 'ASC',
      },
      skip,
      take,
    });
    return pesos;
  }

  private async obtenerPesoMesV(idVaca: number, anno: string, mes: string) {
    const vacaM = await this.vacasRepository.findOne({
      where: { id: idVaca },
    });
    const pesoMV = await this.pesosRepository.find({
      select: {
        fechaPeso: true,
        peso: true,
        id: true,
      },
      where: {
        vaca: vacaM,
        fechaPeso: Like(`%/${mes}/${anno}%`),
      },
      order: {
        fechaPeso: 'ASC',
      },
    });
    return pesoMV;
  }
}
