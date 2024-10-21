import { ID } from "@datorama/akita";
import { GenericService } from "./genericService";
import { Item } from "../modules/item";
import { HttpClient } from '@angular/common/http';

export class ItemService extends GenericService<Item, ID>{


  protected override baseUrl = "http://localhost:8080/itens";

  constructor(override httpClient: HttpClient){
    super(httpClient);
  }

}
