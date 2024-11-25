import { ID } from "@datorama/akita";
import { Sexo } from "./enums/sexo";
import { Dependente } from "./dependente";

export class Cliente{
  id: ID | undefined;
  nome: string | undefined ;
  endereco: string | undefined ;
  cpf: string | undefined;
  sexo: Sexo;
  dataNascimento: Date | undefined;
  dependentes: Dependente[];


  constructor(
    id: ID | undefined = undefined,
    nome?: string,
    endereco?: string,
    cpf?: string,
    sexo?: Sexo,
    dataNascimento?: Date,
    dependentes: Dependente[] = []
  ) {
    this.id = id;
    this.nome = nome;
    this.endereco = endereco;
    this.cpf = cpf;
    this.sexo = Sexo.MASCULINO;
    this.dataNascimento = dataNascimento;
    this.dependentes = dependentes;
  }
}
