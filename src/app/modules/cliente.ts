

export class Cliente {
  nome: string;
  cpf: string;
  sexo: string;
  dataNascimento: string;
  ativo: boolean;

  constructor(
    nome: string = '',
    cpf: string = '',
    sexo: string = '',
    dataNascimento: string = '',
    ativo: boolean = true
  ) {
    this.nome = nome;
    this.cpf = cpf;
    this.sexo = sexo;
    this.dataNascimento = dataNascimento;
    this.ativo = ativo;
  }
}
