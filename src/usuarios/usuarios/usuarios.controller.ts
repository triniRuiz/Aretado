import { Controller, Get, Post, ParseIntPipe } from '@nestjs/common';
import { Body, Param, Put } from '@nestjs/common/decorators';
import { usuarioDto } from 'src/dtos/usuario.dto';
import { UsuariosService } from './usuarios.service';
import { editarUsuarioDto } from '../../dtos/usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  //CREACION DE USUARIOS
  @Post('crear')
  crearaza(@Body() nuevoUsuario: usuarioDto) {
    return this.usuariosService.crearUsuario(nuevoUsuario);
  }
  //RETORNA TODOS LOS USUARIOS
  @Get('todos')
  obtenerUsuarios() {
    return this.usuariosService.obtenerUsuarios();
  }

  @Get(':id')
  obtenerUNombre(@Param('id') id: number) {
    return this.usuariosService.obtenerU(id);
  }

  //ELIMINAR USUARIO

  //EDITAR USUARIO
  @Put('editar/:id')
  editarUsuario(
    @Param('id', ParseIntPipe) id: number,
    @Body() usuario: editarUsuarioDto,
  ) {
    return this.usuariosService.editarU(id, usuario);
  }
}
