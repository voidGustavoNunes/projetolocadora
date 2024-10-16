import { HttpClient } from "@angular/common/http";
import { Classe } from "../modules/classe";
import { map, Observable } from "rxjs";

export class ClasseService {

  // private baseUrl = "http://localhost:8080/home";

  private classeUrl = "http://localhost:8080/classes";


  constructor(private httpClient: HttpClient) { }

  getClassesList(): Observable<Classe[]> {
    return this.httpClient.get<GetResponseClasses>(this.classeUrl).pipe(
      map(response => response._embedded.classes)
    );

  }

  getClasse(classeId: number): Observable<Classe>{
    const classeUrl = `${this.classeUrl}/${classeId}`;
    return this.httpClient.get<Classe>(classeUrl);
  }

  createClasse(classe: Classe): Observable<Classe> {
    return this.httpClient.post<Classe>(this.classeUrl, classe);
  }

}
interface GetResponseClasses {
  _embedded: {
    classes: Classe[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number

  }
}
