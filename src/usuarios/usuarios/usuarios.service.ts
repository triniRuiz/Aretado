import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { usuarioDto } from 'src/dtos/usuario.dto';
import { usuarios } from 'src/entidades/usuarios.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(usuarios)
    private usuariosRepository: Repository<usuarios>,
  ) {}

  //Creacion de usuarios
  async crearUsuario(usuarioDto: usuarioDto) {
    const nuevoUsuario = this.usuariosRepository.create(usuarioDto);
    return this.usuariosRepository.save(nuevoUsuario);
  }

  //Obtener usuarios
  async obtenerUsuarios() {
    return this.usuariosRepository.find();
  }

  //Obtener usuario por nombre
  async obtenerUsuario(id: number) {
    return this.usuariosRepository.findOne({
      where: {
        id,
      },
    });
  }
}
