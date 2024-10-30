import { ID } from "@datorama/akita";

export class Classe {
  id: ID | undefined;
  nome: string;
  valor: number;
  dataDevolucao: Date;

  constructor(
    id: | undefined = undefined,
    nome: string = '',
    valor: number = 0,
    dataDevolucao: Date = new Date(),
  ) {
    this.id = id;
    this.nome = nome;
    this.valor = valor;
    this.dataDevolucao = dataDevolucao;
  }
}
