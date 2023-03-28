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
<<<<<<< Updated upstream
  async crearRaza(razaDto: razaDto) {
    const nuevaRaza = this.razasRepository.create(razaDto);
    return this.razasRepository.save(nuevaRaza);
  }

  //EDITAR RAZAS
  async editarRaza(id: number, raza: edRazaDto) {
    return this.razasRepository.update({ id }, raza);
  }

  //"Eliminar" Raza *Revisar Pendiente
  async eliminarRaza(id: number) {
    return this.razasRepository.delete({ id });
  }

  //Regresa todas las razazas que se encuentren activas en la bd
  async obtenerRaza() {
    return this.razasRepository.findBy({
      activo: true,
    });
=======
  async crearRaza(raza: razaDto) {
    const nuevaRaza = this.razasRepository.create(raza);
    return this.razasRepository.save(nuevaRaza);
>>>>>>> Stashed changes
  }
}
