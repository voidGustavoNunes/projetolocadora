import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ID } from "@datorama/akita";
import { GenericService } from "../components/base/service/genericService";
import { Locacao } from "../modules/locacao";

@Injectable({
  providedIn: 'root'
})
export class LocacaoService extends GenericService<Locacao, ID>{


  protected override baseUrl = "http://localhost:8080/locacoes";

  constructor(override httpClient: HttpClient){
    super(httpClient);
  }

}
