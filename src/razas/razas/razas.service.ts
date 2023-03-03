import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { edRazaDto, razaDto } from 'src/dtos/raza.dto';
import { razas } from 'src/entidades/razas.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RazasService {
  constructor(
    @InjectRepository(razas)
    private razasRepository: Repository<razas>,
  ) {}

  //Creacion de nuevas razas
  async crearRaza(razaDto: razaDto) {
    const nuevaRaza = this.razasRepository.create(razaDto);
    return this.razasRepository.save(nuevaRaza);
  }

  //Editar Razas
  async editarRaza(id: number, raza: edRazaDto) {
    return this.razasRepository.update({ id }, raza);
  }

  //Eliminar Raza

  //Regresa todas las razas existentes en la base de datos
  async obtenerRaza() {
    return this.razasRepository.find();
  }
}
