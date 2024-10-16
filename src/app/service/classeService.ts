import { HttpClient } from "@angular/common/http";
import { Classe } from "../modules/classe";
import { map, Observable } from "rxjs";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  // private baseUrl = "http://localhost:8080/home";

  private classeUrl = "http://localhost:8080/classes";


  constructor(private httpClient: HttpClient) { }

  getClassesList(): Observable<Classe[]> {
    return this.httpClient.get<Classe[]>(this.classeUrl).pipe(
      map(response => response)
    );

  }

  getClasse(classeId: number): Observable<Classe>{
    const classeUrl = `${this.classeUrl}/${classeId}`;
    return this.httpClient.get<Classe>(classeUrl);
  }

  createClasse(classe: Classe): Observable<Classe> {
    return this.httpClient.post<Classe>(this.classeUrl, classe);
  }

  updateClasse(classe: Classe): Observable<Classe> {
    return this.httpClient.put<Classe>(`${this.classeUrl}/${classe.id}`, classe);
  }

  apagarClasse(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.classeUrl}/${id}`);
  }


}
interface GetResponseClasses {
    classes: Classe[];

}
