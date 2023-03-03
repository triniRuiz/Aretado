import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { loteDto } from 'src/dtos/lote.dto';
import { lotes } from 'src/entidades/lote.entity';
import { usuarios } from 'src/entidades/usuarios.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LotesService {
  constructor(
    @InjectRepository(lotes)
    private lotesRepository: Repository<lotes>,
    @InjectRepository(usuarios)
    private usuariosRepository: Repository<usuarios>,
  ) {}

  //CREACION DE LOTES
  async crearLote(loteDto: loteDto) {
    const nuevoLote = this.lotesRepository.create(loteDto);
    return this.lotesRepository.save(nuevoLote);
  }

  //OBTENER LOTES POR USUARIO

  //EDITAR LOTE
  async editarLote(id: number, lote: loteDto) {
    return this.lotesRepository.update({ id }, lote);
  }
}
