export class usuarioDto {
  nombre: string;
  correo: string;
  pass: string;
}

export class editarUsuarioDto {
  nombre?: string;
  correo?: string;
  pass?: string;
}

export class inicioSesionDto {
  correo: string;
  pass: string;
}
