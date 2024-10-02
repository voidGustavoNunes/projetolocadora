export class Classe{

  public get valor(): number {
    return this._valor;
  }
  public set valor(value: number) {
    this._valor = value;
  }
  public get id(): number {
    return this._id;
  }
  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }

  public get dataDevolucao(): Date {
    return this._dataDevolucao;
  }
  public set dataDevolucao(value: Date) {
    this._dataDevolucao = value;
  }

  constructor(
    private _id : number,
    private _nome: string,
    private _valor: number,
    private _dataDevolucao: Date,
  ){


  }
}
