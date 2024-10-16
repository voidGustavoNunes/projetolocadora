export class Classe {
  public id: number; // Propriedade pública para id
  public nome: string; // Propriedade pública para nome
  public valor: number; // Propriedade pública para valor
  public dataDevolucao: Date; // Propriedade pública para dataDevolucao

  constructor(
    id: number,
    nome: string,
    valor: number,
    dataDevolucao: Date,
  ) {
    this.id = id; // Inicializa o id no construtor
    this.nome = nome; // Inicializa o nome no construtor
    this.valor = valor; // Inicializa o valor no construtor
    this.dataDevolucao = dataDevolucao; // Inicializa a data de devolução no construtor
  }
}
