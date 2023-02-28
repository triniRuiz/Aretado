import { Controller, Get, Post } from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators';
import { usuarioDto } from 'src/dtos/usuario.dto';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  //Creacion de nuevos usuarios
  @Post('crear')
  crearaza(@Body() nuevoUsuario: usuarioDto) {
    return this.usuariosService.crearUsuario(nuevoUsuario);
  }
  //Retorna todos los usuarios existentes en la bd
  @Get('obtener')
  obtenerUsuarios() {
    return this.usuariosService.obtenerUsuarios();
  }

  //Retorna usuarios dependiendo del nombre
  @Get(':id')
  obtenerUNombre(@Param('id') id: number) {
    return this.usuariosService.obtenerUsuario(id);
  }

  //Eliminar usuario

  //Editar usuario
}
