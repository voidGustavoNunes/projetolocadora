

export class Cliente {
  id: number | undefined = undefined;
  nome: string;
  cpf: string;
  sexo: string;
  dataNascimento: string;
  ativo: boolean;

  constructor(
    id: number | undefined = undefined,
    nome: string = '',
    cpf: string = '',
    sexo: string = '',
    dataNascimento: string = '',
    ativo: boolean = true
  ) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.sexo = sexo;
    this.dataNascimento = dataNascimento;
    this.ativo = ativo;
  }
}
