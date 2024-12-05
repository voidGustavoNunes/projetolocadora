
export class Dependente {
  socioId: number;
  id?: number;
  nome: string = '';
  dataNascimento: string = '';
  sexo: string = '';

  constructor(
    id: | undefined = undefined,
    nome: string = '',
    sexo: string = '',
    dataNascimento: string = '',
    socioId: number = 0
  ) {
    this.socioId = socioId;
    this.id = id;
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.sexo = sexo;
  }
}
