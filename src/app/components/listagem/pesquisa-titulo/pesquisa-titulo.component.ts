import { Component } from '@angular/core';
import { Titulo } from 'src/app/modules/titulo';
import { TituloService } from 'src/app/service/tituloService';

@Component({
  selector: 'app-pesquisa-titulo',
  templateUrl: './pesquisa-titulo.component.html',
  styleUrls: ['./pesquisa-titulo.component.css']
})
export class PesquisaTituloComponent {
  titulos: Titulo[] = [];
  errorMessage: string = '';

  constructor(private tituloService: TituloService) {}

  ngOnInit(): void {
    // Exemplo de busca por nome
    // this.buscarTitulosPorNome('Matrix');
  }

  buscarTitulosPorNome(nome: string): void {
    this.tituloService.buscarPorNome(nome).subscribe({
      next: (result) => this.titulos = result,
      error: (err) => this.errorMessage = `Erro ao buscar por nome: ${err.message}`
    });
  }

  buscarTitulosPorCategoria(categoria: string): void {
    this.tituloService.buscarPorCategoria(categoria).subscribe({
      next: (result) => this.titulos = result,
      error: (err) => this.errorMessage = `Erro ao buscar por categoria: ${err.message}`
    });
  }

  buscarTitulosPorAtor(ator: string): void {
    this.tituloService.buscarPorAtor(ator).subscribe({
      next: (result) => this.titulos = result,
      error: (err) => this.errorMessage = `Erro ao buscar por ator: ${err.message}`
    });
  }
}
