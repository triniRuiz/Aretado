import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { usuarios } from 'src/entidades/usuarios.entity';
import { Repository } from 'typeorm';
//import { inicioSesionDto } from '../../dtos/usuario.dto';

@Injectable()
export class AutenticacionService {
  constructor(
    @InjectRepository(usuarios)
    private usuariosRepository: Repository<usuarios>,
  ) {}
}
