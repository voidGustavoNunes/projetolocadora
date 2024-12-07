import { Cliente } from './cliente';
import { Dependente } from './dependente';

export class Socio extends Cliente {
  endereco: string;
  telefone: string;
  dependentes: Dependente[];

  constructor(
    id: number | undefined = undefined,
    nome: string = '',
    cpf: string = '',
    sexo: string = '',
    dataNascimento: string = '',
    ativo: boolean = true,
    endereco: string = '',
    telefone: string = '',
    dependentes: Dependente[] = []
  ) {
    super(id, nome, cpf, sexo, dataNascimento, ativo);
    this.endereco = endereco;
    this.telefone = telefone;
    this.dependentes = dependentes;
  }

  // adicionarDependente(dependente: Dependente): void {
  //   if (this.dependentes.length >= 3) {
  //     alert('O sócio já possui três dependentes ativos.');
  //     throw new Error('O sócio já possui três dependentes ativos.');
  //   }
  //   this.dependentes.push(dependente);
  // }
}
