import { ID } from "@datorama/akita";
import { GenericService } from "../components/base/service/genericService";
import { Item } from "../modules/item";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ItemService extends GenericService<Item, ID>{


  protected override baseUrl = "http://localhost:8080/itens";

  constructor(override httpClient: HttpClient){
    super(httpClient);
  }

  getAll() {
    return this.httpClient.get<Item[]>(`${this.baseUrl}/itens`);
  }

}
