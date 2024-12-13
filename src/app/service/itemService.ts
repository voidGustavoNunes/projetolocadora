import { ID } from "@datorama/akita";
import { GenericService } from "../components/base/service/genericService";
import { Item } from "../modules/item";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, switchMap } from "rxjs";
import { Classe } from "../modules/classe";
import { Titulo } from "../modules/titulo";

@Injectable({
  providedIn: 'root'
})
export class ItemService extends GenericService<Item, ID>{


  protected override baseUrl = "http://localhost:8080/itens";

  constructor(override httpClient: HttpClient){
    super(httpClient);
  }

  getAll() {
    return this.httpClient.get<Item[]>(`${this.baseUrl}`);
  }

  getById(id: ID): Observable<Item> {
    return this.httpClient.get<Item>(`${this.baseUrl}/${id}`);
  }

    /**
   * Obtém o título associado a um item pelo ID do título.
   * @param tituloId ID do título associado ao item
   */
    getTituloByItemId(tituloId: ID): Observable<Titulo> {
      const tituloUrl = `http://localhost:8080/titulos/${tituloId}`; // Ajuste conforme o endpoint do backend.
      return this.httpClient.get<Titulo>(tituloUrl);
    }

    /**
     * Obtém a classe associada ao título.
     * @param classeId ID da classe associada ao título
     */
    getClasseByTitulo(classeId: ID): Observable<Classe> {
      const classeUrl = `http://localhost:8080/classes/${classeId}`; // Ajuste conforme o endpoint do backend.
      return this.httpClient.get<Classe>(classeUrl);
    }

    /**
     * Obtém a classe associada a um item diretamente.
     * @param itemId ID do item
     */
    getClasseByItemId(itemId: ID): Observable<Classe> {
      return this.getById(itemId).pipe(
        switchMap((item) => this.getTituloByItemId(item.tituloId!)),
        switchMap((titulo) => this.getClasseByTitulo(titulo.classe!.id!))
      );
    }

    getCountByTituloId(tituloId: number): Observable<number> {
      const itemUrl = `http://localhost:8080/itens/count`;

      return this.httpClient.get<number>(`${this.baseUrl}?tituloId=${tituloId}`);
    }

}
