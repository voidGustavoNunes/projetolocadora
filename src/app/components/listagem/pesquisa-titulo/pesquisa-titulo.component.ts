import { Component } from '@angular/core';
import { Ator } from 'src/app/modules/ator';
import { Titulo } from 'src/app/modules/titulo';
import { ItemService } from 'src/app/service/itemService';
import { TituloService } from 'src/app/service/tituloService';

@Component({
  selector: 'app-pesquisa-titulo',
  templateUrl: './pesquisa-titulo.component.html',
  styleUrls: ['./pesquisa-titulo.component.css'],
})
export class PesquisaTituloComponent {
  titulos: Titulo[] = [];
  errorMessage: string = '';
  quantidade: any[] = [];
  atores: Ator[] = [];
  categorias: string[] = [];

  constructor(
    private tituloService: TituloService,
    private itemService: ItemService
  ) {}

  itemCount: number = 0;

  ngOnInit(): void {
    // Exemplo de busca por nome
    // this.buscarTitulosPorNome('Matrix');

    this.listarTitulos();
  }

  buscarTitulosPorNome(nome: string): void {
    this.tituloService.buscarPorNome(nome).subscribe({
      next: (result) => (this.titulos = result),
      error: (err) =>
        (this.errorMessage = `Erro ao buscar por nome: ${err.message}`),
    });
  }

  buscarTitulosPorCategoria(categoria: string): void {
    this.tituloService.buscarPorCategoria(categoria).subscribe({
      next: (result) => (this.titulos = result),
      error: (err) =>
        (this.errorMessage = `Erro ao buscar por categoria: ${err.message}`),
    });
  }

  buscarTitulosPorAtor(ator: string): void {
    this.tituloService.buscarPorAtor(ator).subscribe({
      next: (result) => (this.titulos = result),
      error: (err) =>
        (this.errorMessage = `Erro ao buscar por ator: ${err.message}`),
    });
  }

  listarTitulos(): void {
    this.tituloService.getList().subscribe({
      next: (titulosData) => {
        this.titulos = titulosData;

        // Extraindo categorias únicas
        this.categorias = [
          ...new Set(
            this.titulos
              .map((titulo) => titulo.categoria)
              .filter(
                (categoria): categoria is string => categoria !== undefined
              )
          ),
        ];

        // Após carregar os títulos, buscar as quantidades correspondentes
        this.tituloService.listarTitulosComQuantidade().subscribe({
          next: (quantidadesData) => {
            this.titulos = this.titulos.map((titulo) => {
              const quantidade = quantidadesData.find(
                (q) => q.id === titulo.id
              );
              return {
                ...titulo,
                quantidade: quantidade ? quantidade.quantidade : 0,
              };
            });
          },
          error: (err) => {
            this.errorMessage = `Erro ao carregar as quantidades: ${err.message}`;
          },
        });
      },
      error: (err) => {
        this.errorMessage = `Erro ao carregar os títulos: ${err.message}`;
      },
    });
  }

  onCategoriaChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedCategory = selectElement.value;

    if (selectedCategory) {
      this.filtrarPorCategoria(selectedCategory);
    } else {
      console.error('Categoria selecionada inválida');
    }
  }

  filtrarPorCategoria(categoria: string): void {
    if (categoria === 'Todas') {
      this.listarTitulos(); // Recarrega todos os títulos
    } else {
      this.titulos = this.titulos.filter(
        (titulo) => titulo.categoria === categoria
      );
    }
  }

  onAtorChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedActorName = selectElement.value;

    if (selectedActorName) {
      const selectedActor = this.atores.find(
        (ator) => ator.nome === selectedActorName
      );
      if (selectedActor) {
        this.filtrarPorAtor(selectedActor);
      } else {
        console.error('Ator não encontrado');
      }
    } else {
      console.error('Ator selecionado inválido');
    }
  }

  onTituloNomeChange(event: Event): void {}

  filtrarPorAtor(ator: Ator): void {
    if (ator.nome === 'Todos') {
      this.listarTitulos(); // Recarrega todos os títulos
    } else {
      this.titulos = this.titulos.filter((titulo) =>
        titulo.atores?.some((a) => a.id === ator.id)
      );
    }
  }

  filtrarPorNomeTitulo(titulo: Titulo) {
    if (titulo.nome === titulo.nome) {
      this.titulos = this.titulos.filter(
        (titulo) => titulo.nome === titulo.nome
      );
    } else {
      this.listarTitulos();
    }
  }
}
