import { ID } from '@datorama/akita';
import { Titulo } from './titulo';


export class Ator {
  id: ID | undefined;
  nome: string;
  selecionado: boolean = false;
  titulos: Titulo[] = [];

  constructor(id: | undefined = undefined, nome: string = '', titulos: Titulo[] = []) {
    this.id = id;
    this.nome = nome;
    this.titulos = titulos;

  }
}
