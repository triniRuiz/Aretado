import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { edRazaDto, razaDto } from 'src/dtos/raza.dto';
import { RazasService } from './razas.service';

@Controller('razas')
export class RazasController {
  constructor(private razasService: RazasService) {}

<<<<<<< Updated upstream
  //CREACION DE RAZAS
  @Post('crear')
  crearaza(@Body() nuevaRaza: razaDto) {
    return this.razasService.crearRaza(nuevaRaza);
  }

  //RETORNA TODAS LAS RAZAS Activas
  @Get('obtener')
  obtenerRazas() {
    return this.razasService.obtenerRaza();
  }

  //EDITAR RAZA
  @Put(':id')
  editaRaza(@Param('id', ParseIntPipe) id: number, @Body() raza: edRazaDto) {
    return this.razasService.editarRaza(id, raza);
  }

  //Eliminar Raza
  @Put('eliminar/:id')
  elimarRaza(@Param('id', ParseIntPipe) id: number, @Body() raza: edRazaDto) {
    return this.razasService.eliminarRaza(id, raza);
=======
  @Get()
  obtenerRazas() {
    return this.razasService.getRaza();
  }

  @Post('raza')
  CrearRazas(@Body() nuevaRaza: razaDto) {
    return this.razasService.crearRaza(nuevaRaza);
>>>>>>> Stashed changes
  }
}
