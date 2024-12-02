import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DevolucaoService {
  private baseUrl = 'http://localhost:8080/api/devolucao';

  constructor(private http: HttpClient) {}

  buscarLocacao(numeroSerie: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/locacao?numeroSerie=${numeroSerie}`);
  }

  efetuarDevolucao(numeroSerie: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/efetuar`, { numeroSerie });
  }
}
