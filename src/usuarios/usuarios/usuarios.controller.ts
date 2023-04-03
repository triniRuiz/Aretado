import { Controller, Get, Post, ParseIntPipe } from '@nestjs/common';
import { Body, Delete, Param, Put } from '@nestjs/common/decorators';
import { usuarioDto } from 'src/dtos/usuario.dto';
import { UsuariosService } from './usuarios.service';
import { editarUsuarioDto } from '../../dtos/usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  @Post('crear')
  crearU(@Body() nuevoUsuario: usuarioDto) {
    return this.usuariosService.crearUsuario(nuevoUsuario);
  }

  //RETORNA TODOS LOS USUARIOS ACTIVOS
  @Get('obtener')
  obtenerUsuarios() {
    return this.usuariosService.obtenerUsuarios();
  }

  //Retorna un solo usuario
  @Get('uno/:id')
  obtenerUNombre(@Param('id') id: number) {
    return this.usuariosService.obtenerU(id);
  }

  //ELIMINAR USUARIO
  @Delete('eliminar/:id')
  eliminarUs(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.eliminarU(id);
  }

  //EDITAR USUARIO
  @Put('editar/:id')
  editaRaza(
    @Param('id', ParseIntPipe) id: number,
    @Body() usuario: editarUsuarioDto,
  ) {
    return this.usuariosService.editarU(id, usuario);
  }
}
