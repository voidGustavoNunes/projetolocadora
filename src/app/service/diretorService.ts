import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { Diretor } from "../modules/diretor";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class DiretorService{

  // private baseUrl = "http://localhost:8080/home";

  private diretorUrl = "http://localhost:8080/diretores";


  constructor(private httpClient: HttpClient) { }

  getDiretorList(): Observable<Diretor[]> {
    return this.httpClient.get<Diretor[]>(this.diretorUrl).pipe(
      map(response => response)
    );

  }

  getDiretor(diretorId: number): Observable<Diretor>{
    const diretorUrl = `${this.diretorUrl}/${diretorId}`;
    return this.httpClient.get<Diretor>(diretorUrl);
  }

  createDiretor(diretor: Diretor): Observable<Diretor> {
    return this.httpClient.post<Diretor>(this.diretorUrl, diretor);
  }

  updateDiretor(diretor: Diretor): Observable<Diretor> {
    return this.httpClient.put<Diretor>(`${this.diretorUrl}/${diretor.id}`, diretor);
  }

  apagarDiretor(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.diretorUrl}/${id}`);
  }
}
interface GetResponseDiretor {
  diretores: Diretor[];


}
