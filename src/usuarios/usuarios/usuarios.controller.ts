<<<<<<< Updated upstream
import { Controller, Get, Post, ParseIntPipe } from '@nestjs/common';
import { Body, Param, Put } from '@nestjs/common/decorators';
import { usuarioDto } from 'src/dtos/usuario.dto';
import { UsuariosService } from './usuarios.service';
import { editarUsuarioDto } from '../../dtos/usuario.dto';
=======
import { Controller, Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { usuarioDto } from 'src/dtos/usuario.dto';
import { UsuariosService } from './usuarios.service';
>>>>>>> Stashed changes

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

<<<<<<< Updated upstream
  //CREACION DE USUARIOS
  @Post('crear')
  crearaza(@Body() nuevoUsuario: usuarioDto) {
    return this.usuariosService.crearUsuario(nuevoUsuario);
=======
  //Retorna todos los usuarios existentes en la bd
  @Get()
  obtenerUsuarios() {
    return this.usuariosService.getUsuarios();
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
  //EDITAR USUARIO
  @Put('editar/:id')
  editarUsuario(
    @Param('id', ParseIntPipe) id: number,
    @Body() usuario: editarUsuarioDto,
  ) {
    return this.usuariosService.editarU(id, usuario);
=======
  //Creacion de nuevos usuarios
  @Post()
  crearUsuarios(@Body() nuevoUsuario: usuarioDto) {
    return this.usuariosService.crearUsuario(nuevoUsuario);
>>>>>>> Stashed changes
  }
}
