import { HttpClient } from "@angular/common/http";
import { Classe } from "../modules/classe";
import { Injectable } from "@angular/core";
import { GenericService } from "./genericService";
import { ID } from "@datorama/akita";


@Injectable({
  providedIn: 'root'
})
export class ClasseService extends GenericService<Classe, ID>{

  // private baseUrl = "http://localhost:8080/home";

  protected override baseUrl = "http://localhost:8080/classes";


  constructor(override httpClient: HttpClient) {
    super(httpClient);
   }

  // getClassesList(): Observable<Classe[]> {
  //   return this.httpClient.get<Classe[]>(this.classeUrl).pipe(
  //     map(response => response)
  //   );

  // }

  // getClasse(classeId: number): Observable<Classe>{
  //   const classeUrl = `${this.classeUrl}/${classeId}`;
  //   return this.httpClient.get<Classe>(classeUrl);
  // }

  // createClasse(classe: Classe): Observable<Classe> {
  //   return this.httpClient.post<Classe>(this.classeUrl, classe);
  // }

  // updateClasse(classe: Classe): Observable<Classe> {
  //   return this.httpClient.put<Classe>(`${this.classeUrl}/${classe.id}`, classe);
  // }

  // apagarClasse(id: number): Observable<void> {
  //   return this.httpClient.delete<void>(`${this.classeUrl}/${id}`);
  // }


}
interface GetResponseClasses {
    classes: Classe[];

}
