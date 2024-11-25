import { ID } from "@datorama/akita";
import { Sexo } from "./enums/sexo";
import { Cliente } from "./cliente";

export class Dependente{

  id: ID | undefined;
  nome: string | undefined;
  sexo: Sexo.MASCULINO;
  dataNascimento: Date | undefined;
  cliente: Cliente | undefined;

  constructor(
    id: ID | undefined = undefined,
    nome?: string,
    sexo?: Sexo,
    dataNascimento?: Date,
    cliente?: Cliente
  ) {
    this.id = id;
    this.nome = nome;
    this.sexo = Sexo.MASCULINO;
    this.dataNascimento = dataNascimento;
    this.cliente = cliente;
  }
}
