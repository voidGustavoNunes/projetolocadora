import { ID } from "@datorama/akita";
import { Item } from "./item";
import { Socio } from "./socio";

export class Locacao {
  id: ID | undefined;
  socio: Socio | undefined;
  item: Item | undefined;
  dataLocacao: Date | undefined;
  dataDevolucaoPrevista: Date | undefined;
  dataDevolucaoEfetiva: Date | undefined;
  valor: number | undefined;

  constructor(id: ID | undefined = undefined, socio: Socio | undefined, item: Item | undefined, dataLocacao: Date | undefined, dataDevolucaoPrevista: Date | undefined, dataDevolucaoEfetiva: Date | undefined, valor: number | undefined) {
    this.id = id;
    this.socio = socio;
    this.item = item;
    this.dataLocacao = dataLocacao;
    this.dataDevolucaoPrevista = dataDevolucaoPrevista;
    this.dataDevolucaoEfetiva = dataDevolucaoEfetiva;
    this.valor = valor;
  }


}



