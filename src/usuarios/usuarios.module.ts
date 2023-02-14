import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usuarios } from 'src/entidades/usuarios.entity';
import { UsuariosController } from './usuarios/usuarios.controller';
import { UsuariosService } from './usuarios/usuarios.service';

@Module({
  imports: [TypeOrmModule.forFeature([usuarios])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
