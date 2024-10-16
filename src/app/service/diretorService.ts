import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { Diretor } from "../modules/diretor";

export class DiretorService{

  // private baseUrl = "http://localhost:8080/home";

  private diretorUrl = "http://localhost:8080/diretores";


  constructor(private httpClient: HttpClient) { }

  getDiretorList(): Observable<Diretor[]> {
    return this.httpClient.get<GetResponseDiretor>(this.diretorUrl).pipe(
      map(response => response._embedded.diretores)
    );

  }

  getDiretor(diretorId: number): Observable<Diretor>{
    const diretorUrl = `${this.diretorUrl}/${diretorId}`;
    return this.httpClient.get<Diretor>(diretorUrl);
  }

  createDiretor(diretor: Diretor): Observable<Diretor> {
    return this.httpClient.post<Diretor>(this.diretorUrl, diretor);
  }
}
interface GetResponseDiretor {
  _embedded: {
    diretores: Diretor[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number

  }

}
