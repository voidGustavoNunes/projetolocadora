import { ID } from "@datorama/akita";
import { Dependente } from "../modules/dependente";
import { GenericService } from "../components/base/service/genericService";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class DependenteService extends GenericService<Dependente, ID>{


  protected override baseUrl = "http://localhost:8080/dependentes";


  constructor(override httpClient: HttpClient) {
    super(httpClient);
   }

}
