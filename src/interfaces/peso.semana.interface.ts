export interface pesoVacaSemana {
  fecha: string;
  pesos: pesoDia[];
}

export interface pesoDia {
  fecha: string;
  peso: number;
}

export interface pesoLoteSemana {
  fecha: string;
  pesos: pesoDia[];
}
