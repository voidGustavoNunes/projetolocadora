import { Injectable } from "@angular/core";
import { GenericService } from "../components/base/service/genericService";
import { Cliente } from "../modules/cliente";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ClienteService extends GenericService<Cliente, number> {
    protected override baseUrl = "http://localhost:8080/clientes";

    constructor(override httpClient: HttpClient) {
        super(httpClient);
    }

    ativar(id: number) {
        return this.httpClient.put<Cliente>(`${this.baseUrl}/ativar/${id}`, {});
    }

    desativar(id: number) {
        return this.httpClient.put<Cliente>(`${this.baseUrl}/desativar/${id}`, {});
    }
}
