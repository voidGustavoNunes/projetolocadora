import { Socio } from "./socio";

export class Dependente {
  socio: Socio | undefined;
  id?: number;
  nome: string = '';
  dataNascimento: string = '';
  sexo: string = '';

  constructor(
    id: | undefined = undefined,
    nome: string = '',
    sexo: string = '',
    dataNascimento: string = '',
    socio?: Socio
  ) {
    this.socio = socio;
    this.id = id;
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.sexo = sexo;
  }
}
