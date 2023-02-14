import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { usuarioDto } from '../../dtos/usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  //Retorna todos los usuarios existentes en la bd
  @Get()
  getUsuarios() {
    return this.usuariosService.getUsuarios();
  }

  @Post('usuario')
  postusuario(@Body() nuevousuario: usuarioDto) {
    return this.usuariosService.postUsuario(nuevousuario);
  }
}
