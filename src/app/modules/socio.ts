import { ID } from '@datorama/akita';
import { Cliente } from './cliente';
import { Dependente } from './dependente';

export class Socio extends Cliente {
  id: ID | undefined = undefined;
  endereco: string;
  telefone: string;
  dependentes: Dependente[];

  constructor(
    id: | undefined = undefined,
    nome: string = '',
    cpf: string = '',
    sexo: string = '',
    dataNascimento: string = '',
    ativo: boolean = true,
    endereco: string = '',
    telefone: string = '',
    dependentes: Dependente[] = []
  ) {
    super(nome, cpf, sexo, dataNascimento, ativo);
    this.id = id;
    this.endereco = endereco;
    this.telefone = telefone;
    this.dependentes = dependentes;
  }

  adicionarDependente(dependente: Dependente): void {
    if (this.dependentes.length >= 3) {
      throw new Error('O sócio já possui três dependentes ativos.');
    }
    this.dependentes.push(dependente);
  }
}
