import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { razas } from 'src/entidades/razas.entity';
import { Repository } from 'typeorm';
import { razaDto } from '../../dtos/raza.dto';

@Injectable()
export class RazasService {
  constructor(
    @InjectRepository(razas)
    private razasRepository: Repository<razas>,
  ) {}
  //Regresa todas las razas existentes en la base de datos
  async getRaza() {
    return this.razasRepository.find();
  }

  //Creacion de nuevas razas
  async postRaza(razaDto: razaDto) {
    const nuevaRaza = new razas();
    nuevaRaza.nombre = razaDto.nombre;
    const raza = await this.razasRepository.save(nuevaRaza);
    console.log(raza);
    return { mensaje: 'exito' };
  }
}
