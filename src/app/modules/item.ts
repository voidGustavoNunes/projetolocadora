import { ID } from "@datorama/akita";
import { Tipo } from "./enums/tipo";
import { Titulo } from "./titulo";

export class Item {
  id: ID | undefined;
  numeroSerie: number | undefined;
  dataAquisicao: Date | undefined;
  titulo?: Titulo;
  tipo: Tipo | undefined;


  constructor(id: ID | undefined = undefined, numeroSerie?: number, dataAquisicao?: Date, titulo?: Titulo, tipo?: Tipo) {
    this.id = id;
    this.numeroSerie = numeroSerie;
    this.dataAquisicao = dataAquisicao;
    this.titulo = titulo;
    this.tipo = tipo;

  }
}
