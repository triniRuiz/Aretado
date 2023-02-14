import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { usuarios } from 'src/entidades/usuarios.entity';
import { Repository } from 'typeorm';
import { usuarioDto } from '../../dtos/usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(usuarios)
    private usuariosRepository: Repository<usuarios>,
  ) {}

  async getUsuarios() {
    return this.usuariosRepository.find();
  }

  async postUsuario(usuarioDto: usuarioDto) {
    const nuevoUsuario = new usuarios();
    nuevoUsuario.nombre = usuarioDto.nombre;
    nuevoUsuario.correo = usuarioDto.correo;
    nuevoUsuario.pass = usuarioDto.pass;
    const usuario = await this.usuariosRepository.save(nuevoUsuario);
    console.log(usuario);
    return { mensaje: 'exito' };
  }
}
