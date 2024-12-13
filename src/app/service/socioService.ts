import { Injectable } from "@angular/core";
import { ID } from "@datorama/akita";
import { GenericService } from "../components/base/service/genericService";
import { Cliente } from "../modules/cliente";
import { HttpClient } from "@angular/common/http";
import { Socio } from "../modules/socio";


@Injectable({
  providedIn: 'root'
})
export class SocioService extends GenericService<Socio, number>{

  protected override baseUrl = "http://localhost:8080/socios";


  constructor(override httpClient: HttpClient) {
    super(httpClient);
  }

  getAll() {
    return this.httpClient.get<Socio[]>(`${this.baseUrl}/socios`);
  }


}
