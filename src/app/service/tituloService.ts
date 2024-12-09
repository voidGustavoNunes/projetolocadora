import { ID } from "@datorama/akita";
import { GenericService } from "../components/base/service/genericService";
import { Titulo } from "../modules/titulo";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TituloService extends GenericService<Titulo, ID>{

  protected override baseUrl = "http://localhost:8080/titulos";


  constructor(override httpClient: HttpClient){
    super(httpClient);
  }

  buscarPorNome(nome: string): Observable<Titulo[]> {
    const url = `${this.baseUrl}/buscar?nome=${encodeURIComponent(nome)}`;
    return this.httpClient.get<Titulo[]>(url);
  }

  buscarPorCategoria(categoria: string): Observable<Titulo[]> {
    const url = `${this.baseUrl}/buscar?categoria=${encodeURIComponent(categoria)}`;
    return this.httpClient.get<Titulo[]>(url);
  }

  buscarPorAtor(ator: string): Observable<Titulo[]> {
    const url = `${this.baseUrl}/buscar?ator=${encodeURIComponent(ator)}`;
    return this.httpClient.get<Titulo[]>(url);
  }

}
