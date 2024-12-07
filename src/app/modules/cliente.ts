

export class Cliente {
  id: number | undefined = undefined;
  nome: string;
  cpf?: string;
  sexo: string;
  dataNascimento: string;
  ativo: boolean;
  ehDependente: boolean;

  constructor(
    id: number | undefined = undefined,
    nome: string = '',
    cpf: string = '',
    sexo: string = '',
    dataNascimento: string = '',
    ativo: boolean = true,
    ehDependente: boolean = false
  ) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.sexo = sexo;
    this.dataNascimento = dataNascimento;
    this.ativo = ativo;
    this.ehDependente = ehDependente;
  }
}
