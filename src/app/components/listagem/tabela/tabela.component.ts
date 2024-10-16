import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ator } from 'src/app/modules/ator';
import { Classe } from 'src/app/modules/classe';
import { Diretor } from 'src/app/modules/diretor';
import { AtorService } from 'src/app/service/atorService';
import { ClasseService } from 'src/app/service/classeService';
import { DiretorService } from 'src/app/service/diretorService';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {


  filtroSelecionado: string = 'atores'; // Inicialmente mostra Atores
  itensFiltrados: any[] = [];

  atores: any[] = [];
  classes: any[] = [];
  diretores: any[] = [];

  constructor(
    private atorService: AtorService,
    private classeService: ClasseService,
    private diretorService: DiretorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Carregar todos os dados inicialmente
    this.carregarAtores();
    this.carregarClasses();
    this.carregarDiretores();
  }

  // Função de filtro
  filtrarDados(): void {
    if (this.filtroSelecionado === 'atores') {
      this.itensFiltrados = this.atores;
    } else if (this.filtroSelecionado === 'classes') {
      this.itensFiltrados = this.classes;
    } else if (this.filtroSelecionado === 'diretores') {
      this.itensFiltrados = this.diretores;
    }
  }

  // Carregar os dados do backend
  carregarAtores(): void {
    this.atorService.getAtoresList().subscribe(
      data => {
        this.atores = data;
        this.filtrarDados();
      },
      error => console.error('Erro ao carregar atores', error)
    );
  }

  carregarClasses(): void {
    this.classeService.getClassesList().subscribe(
      data => {
        this.classes = data;
        this.filtrarDados();
      },
      error => console.error('Erro ao carregar classes', error)
    );
  }

  carregarDiretores(): void {
    this.diretorService.getDiretorList().subscribe(
      data => {
        this.diretores = data;
        this.filtrarDados();
      },
      error => console.error('Erro ao carregar diretores', error)
    );
  }

  // Editar item
  editarItem(item: any): void {
    if (this.filtroSelecionado === 'atores') {
      console.log('Editar Ator', item);
      this.router.navigate(['/cadastro-ator'], { state: { item } }); // Redireciona com o item
    } else if (this.filtroSelecionado === 'classes') {
      console.log('Editar Classe', item);
      this.router.navigate(['/cadastro-classe'], { state: { item } });
    } else if (this.filtroSelecionado === 'diretores') {
      console.log('Editar Diretor', item);
      this.router.navigate(['/cadastro-diretor'], { state: { item } });
    }
  }

  
  apagarItem(item: any): void {
    const confirmacao = confirm(`Tem certeza que deseja apagar ${item.nome}?`);
    if (confirmacao) {
      if (this.filtroSelecionado === 'atores') {
        this.atorService.apagarAtor(item.id).subscribe(
          () => {
            this.carregarAtores(); // Atualiza a lista após exclusão
            this.filtrarDados();
            console.log('Ator apagado com sucesso.');
          },
          error => console.error('Erro ao apagar ator', error)
        );
      } else if (this.filtroSelecionado === 'classes') {
        this.classeService.apagarClasse(item.id).subscribe(
          () => {
            this.carregarClasses(); // Atualiza a lista após exclusão
            this.filtrarDados();
            console.log('Classe apagada com sucesso.');
          },
          error => console.error('Erro ao apagar classe', error)
        );
      } else if (this.filtroSelecionado === 'diretores') {
        this.diretorService.apagarDiretor(item.id).subscribe(
          () => {
            this.carregarDiretores(); // Atualiza a lista após exclusão
            this.filtrarDados();
            console.log('Diretor apagado com sucesso.');
          },
          error => console.error('Erro ao apagar diretor', error)
        );
      }
    }
  }

}
