import { ID } from "@datorama/akita";
import { Tipo } from "./enums/tipo";
import { Titulo } from "./titulo";

export class Item {
  id: ID | undefined;
  numeroSerie: number | undefined;
  dataAquisicao: Date | undefined;
  public tituloId?: number | undefined;
  tipo: Tipo | undefined;


  constructor(id: ID | undefined = undefined, numeroSerie?: number, dataAquisicao?: Date, tituloId?: number, tipo?: Tipo) {
    this.id = id;
    this.numeroSerie = numeroSerie;
    this.dataAquisicao = dataAquisicao;
    this.tituloId = tituloId;
    this.tipo = tipo;

  }
}
