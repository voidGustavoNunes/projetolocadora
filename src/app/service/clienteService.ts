import { Injectable } from "@angular/core";
import { ID } from "@datorama/akita";
import { GenericService } from "../components/base/service/genericService";
import { Cliente } from "../modules/cliente";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ClienteService extends GenericService<Cliente, ID>{

  protected override baseUrl = "http://localhost:8080/clientes";


  constructor(override httpClient: HttpClient) {
    super(httpClient);
   }

   getAll() {
    return this.httpClient.get<Cliente[]>(`${this.baseUrl}/clientes`);
  }

}
