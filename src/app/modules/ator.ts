export class Ator{

  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }
  public get id(): number {
    return this._id;
  }
  constructor(
    private _id: number,
    private _nome: string,

  )
  {


  }
}
