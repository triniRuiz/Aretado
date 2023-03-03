import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { usuarioDto } from 'src/dtos/usuario.dto';
import { usuarios } from 'src/entidades/usuarios.entity';
import { Repository } from 'typeorm';
import { editarUsuarioDto } from '../../dtos/usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(usuarios)
    private usuariosRepository: Repository<usuarios>,
  ) {}

  //CREAR USUARIO
  async crearUsuario(usuarioDto: usuarioDto) {
    const nuevoUsuario = this.usuariosRepository.create(usuarioDto);
    return this.usuariosRepository.save(nuevoUsuario);
  }

  //OBTENER USUARIOS
  async obtenerUsuarios() {
    return this.usuariosRepository.find();
  }

  //OBTENER UN SOLO USUARIO
  async obtenerU(id: number) {
    return this.usuariosRepository.findOne({
      where: {
        id,
      },
    });
  }

  //EDITAR USUARIO
  async editarU(id: number, usuario: editarUsuarioDto) {
    return this.usuariosRepository.update({ id }, usuario);
  }
}
