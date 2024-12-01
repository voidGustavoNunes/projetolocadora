import { ID } from "@datorama/akita";
import { Cliente } from "./cliente";
import { Item } from "./item";

export class Locacao {
  id: ID | undefined;
  cliente: Cliente | undefined;
  item: Item | undefined;
  dataLocacao: Date | undefined;
  dataDevolucaoPrevista: Date | undefined;
  dataDevolucaoEfetiva: Date | undefined;
  valor: number | undefined;

  constructor(id: ID | undefined = undefined, cliente: Cliente | undefined, item: Item | undefined, dataLocacao: Date | undefined, dataDevolucaoPrevista: Date | undefined, dataDevolucaoEfetiva: Date | undefined, valor: number | undefined) {
    this.id = id;
    this.cliente = cliente;
    this.item = item;
    this.dataLocacao = dataLocacao;
    this.dataDevolucaoPrevista = dataDevolucaoPrevista;
    this.dataDevolucaoEfetiva = dataDevolucaoEfetiva;
    this.valor = valor;
  }


}



