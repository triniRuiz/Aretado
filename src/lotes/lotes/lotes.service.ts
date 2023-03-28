import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
<<<<<<< Updated upstream
import { edloteDto, loteDto } from 'src/dtos/lote.dto';
import { lotes } from 'src/entidades/lote.entity';
import { usuarios } from 'src/entidades/usuarios.entity';
=======
import { lotes } from 'src/entidades/lote.entity';
>>>>>>> Stashed changes
import { Repository } from 'typeorm';

@Injectable()
export class LotesService {
  constructor(
    @InjectRepository(lotes)
    private lotesRepository: Repository<lotes>,
    @InjectRepository(usuarios)
    private usuariosRepository: Repository<usuarios>,
  ) {}
<<<<<<< Updated upstream

  //CREACION DE LOTES
  async crearLote(loteDto: loteDto) {
    const usuario = await this.usuariosRepository.findOne({
      where: { id: loteDto.usuario },
    });
    const nuevoLote = new lotes();
    nuevoLote.lote = loteDto.lote;
    nuevoLote.usuario = usuario;
    return this.lotesRepository.save(nuevoLote);
  }

  //OBTENER LOTES POR USUARIO
  async loteUsuario() {
    // return this.lotesRepository.findBy({
    //});
  }

  //EDITAR Lotes
  async editarLote(id: number, editarLote: edloteDto) {
    return this.lotesRepository.update({ id }, editarLote);
  }

  //Eliminar Lote
  async eliminarLote(id: number) {
    return this.lotesRepository.delete({ id });
  }
=======
>>>>>>> Stashed changes
}
