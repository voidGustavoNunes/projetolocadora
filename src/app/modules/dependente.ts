import { Cliente } from "./cliente";
import { Socio } from "./socio";

export class Dependente extends Cliente {
  socio: Socio | undefined;
  socioId?: number;

  constructor(
    id: number | undefined = undefined,
    nome: string = '',
    sexo: string = '',
    dataNascimento: string = '',
    ativo: boolean = true,
    socioId?: number
  ) {
    super(id, nome, '', sexo, dataNascimento, ativo);
    this.socioId = socioId;
  }
}