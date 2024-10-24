import { ID } from "@datorama/akita";
import { GenericService } from "../components/base/service/genericService";
import { Titulo } from "../modules/titulo";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class TituloService extends GenericService<Titulo, ID>{

  protected override baseUrl = "http://localhost:8080/titulos";


  constructor(override httpClient: HttpClient){
    super(httpClient);
  }
}
