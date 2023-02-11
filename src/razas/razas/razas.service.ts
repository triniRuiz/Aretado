import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { razas } from 'src/entidades/razas.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RazasService {
  constructor(
    @InjectRepository(razas)
    private razasRepository: Repository<razas>,
  ) {}

  async getRaza() {
    return this.razasRepository.find();
  }
}
