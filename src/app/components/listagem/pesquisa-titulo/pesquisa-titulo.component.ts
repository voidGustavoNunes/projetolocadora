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
  filteredTitulos: Titulo[] = [];
  errorMessage: string = '';
  atores: Ator[] = [];
  categorias: string[] = [];
  nomesTitulos: string[] = [];
  nomesAtores: string[] = [];

  // Variáveis para armazenar filtros selecionados
  selectedCategory: string = 'Categorias';
  selectedActor: string = 'Atores';
  selectedTituloNome: string = 'NomeTitulo';

  constructor(
    private tituloService: TituloService,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.listarTitulos();
  }

  listarTitulos(): void {
    this.tituloService.getList().subscribe({
      next: (titulosData) => {
        this.titulos = titulosData;
        this.filteredTitulos = [...this.titulos];

        // Extraindo categorias únicas
        this.categorias = [
          ...new Set(
            this.titulos
              .map((titulo) => titulo.categoria)
              .filter((categoria): categoria is string => categoria !== undefined)
          ),
        ];

        // Extraindo nomes únicos
        this.nomesTitulos = [
          ...new Set(
            this.titulos
              .map((titulo) => titulo.nome)
              .filter((nome): nome is string => nome !== undefined)
          ),
        ];

        this.nomesAtores = [
          ...new Set(
            this.titulos
              .flatMap((titulo) => titulo.atores.map((ator) => ator.nome))
              .filter((nome): nome is string => nome !== undefined)
          )
        ];
      },
      error: (err) => {
        this.errorMessage = `Erro ao carregar os títulos: ${err.message}`;
      },
    });
  }

  // Método para aplicar filtros combinados
  applyFilters(): void {
    this.filteredTitulos = this.titulos.filter(titulo => {
      const categoryMatch =
        this.selectedCategory === 'Categorias' ||
        titulo.categoria === this.selectedCategory;

      const actorMatch =
        this.selectedActor === 'Atores' ||
        titulo.atores?.some(ator => ator.nome === this.selectedActor);

      const tituloNomeMatch =
        this.selectedTituloNome === 'NomeTitulo' ||
        titulo.nome === this.selectedTituloNome;

      return categoryMatch && actorMatch && tituloNomeMatch;
    });
  }

  onCategoriaChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCategory = selectElement.value;
    this.applyFilters();
  }

  onAtorChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedActor = selectElement.value;
    this.applyFilters();
  }

  onTituloNomeChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedTituloNome = selectElement.value;
    this.applyFilters();
  }

  getNomesAtores(atores: { nome: string }[] | undefined): string {
    if (!atores || atores.length === 0) {
      return 'Sem atores';
    }
    return atores.map(ator => ator.nome).join(', ');
  }
}
