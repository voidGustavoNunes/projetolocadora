import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AtorService } from 'src/app/service/atorService';
import { ClasseService } from 'src/app/service/classeService';
import { DiretorService } from 'src/app/service/diretorService';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Ator } from 'src/app/modules/ator';
import { Classe } from 'src/app/modules/classe';
import { Diretor } from 'src/app/modules/diretor';
import { ItemService } from 'src/app/service/itemService';
import { TituloService } from 'src/app/service/tituloService';
import { Item } from 'src/app/modules/item';
import { Titulo } from 'src/app/modules/titulo';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  filtroSelecionado: string = 'atores';
  itensFiltrados = new MatTableDataSource<Ator | Classe | Diretor | Item | Titulo>();

  atores: any[] = [];
  classes: any[] = [];
  diretores: any[] = [];
  titulos: any[] = [];
  itens: any[] = [];


  displayedColumns: string[] = [];


  constructor(
    private readonly atorService: AtorService,
    private readonly classeService: ClasseService,
    private readonly diretorService: DiretorService,
    private readonly itemService: ItemService,
    private readonly tituloService: TituloService,
    private readonly router: Router
  ) {}



  ngAfterViewInit(): void {
    if (this.paginator) {
      this.itensFiltrados.paginator = this.paginator;
    }

  }

  ngOnInit(): void {

    this.carregarAtores();
    this.carregarClasses();
    this.carregarDiretores();
    this.carregarItens();
    this.carregarTitulos();
  }


  filtrarDados(): void {
    if (this.filtroSelecionado === 'atores') {
      this.itensFiltrados.data = this.atores;
      this.displayedColumns = ['nome'];
    } else if (this.filtroSelecionado === 'classes') {
      this.itensFiltrados.data = this.classes;
      this.displayedColumns = ['nome', 'valor', 'dataDevolucao'];
    } else if (this.filtroSelecionado === 'diretores') {
      this.itensFiltrados.data = this.diretores;
      this.displayedColumns = ['nome'];
    }else if (this.filtroSelecionado === 'itens') {
      this.itensFiltrados.data = this.itens;
      this.displayedColumns = ['numeroSerie', 'dataAquisicao', 'tipo'];
    }else if (this.filtroSelecionado === 'títulos') {
      this.itensFiltrados.data = this.titulos;
      this.displayedColumns = ['nome', 'ano', 'sinopse', 'categoria'];
    }

    if (this.paginator) {
      this.itensFiltrados.paginator = this.paginator;
    }
  }

  // Carregar os dados do backend
  carregarAtores(): void {
    this.atorService.getList().subscribe(
      data => {
        this.atores = data;
        this.filtrarDados();
      },
      error => console.error('Erro ao carregar atores', error)
    );
  }

  carregarClasses(): void {
    this.classeService.getList().subscribe(
      data => {
        this.classes = data;
        this.filtrarDados();
      },
      error => console.error('Erro ao carregar classes', error)
    );
  }

  carregarDiretores(): void {
    this.diretorService.getList().subscribe(
      data => {
        this.diretores = data;
        this.filtrarDados();
      },
      error => console.error('Erro ao carregar diretores', error)
    );
  }

  carregarItens(): void {
    this.itemService.getList().subscribe(
      data => {
        this.itens = data;
        this.filtrarDados();
      },
      error => console.error('Erro ao carregar itens', error)
    );
  }
  carregarTitulos() {
    this.tituloService.getList().subscribe(
      data => {
        this.titulos = data;
        this.filtrarDados();
      },
      error => console.error('Erro ao carregar títulos', error)
    );
  }


  editarItem(item: any): void {
    if (this.filtroSelecionado === 'atores') {
      console.log('Editar Ator', item);
      this.router.navigate(['/cadastro-ator'], { state: { item } });
    } else if (this.filtroSelecionado === 'classes') {
      console.log('Editar Classe', item);
      this.router.navigate(['/cadastro-classe'], { state: { item } });
    } else if (this.filtroSelecionado === 'diretores') {
      console.log('Editar Diretor', item);
      this.router.navigate(['/cadastro-diretor'], { state: { item } });
    }else if (this.filtroSelecionado === 'itens') {
      console.log('Editar Item', item);
      this.router.navigate(['/cadastro-item'], { state: { item } });
    }else if (this.filtroSelecionado === 'títulos') {
      console.log('Editar Título', item);
      this.router.navigate(['/cadastro-titulo'], { state: { item } });
    }
  }


  apagarItem(item: any): void {
    const confirmacao = confirm(`Tem certeza que deseja apagar ${item.nome}?`);
    if (confirmacao) {
      if (this.filtroSelecionado === 'atores') {
        this.atorService.delete(item.id).subscribe(
          () => {
            this.carregarAtores();
            this.filtrarDados();
            console.log('Ator apagado com sucesso.');
          },
          error => console.error('Erro ao apagar ator', error)
        );
      } else if (this.filtroSelecionado === 'classes') {
        this.classeService.delete(item.id).subscribe(
          () => {
            this.carregarClasses();
            this.filtrarDados();
            console.log('Classe apagada com sucesso.');
          },
          error => console.error('Erro ao apagar classe', error)
        );
      } else if (this.filtroSelecionado === 'diretores') {
        this.diretorService.delete(item.id).subscribe(
          () => {
            this.carregarDiretores();
            this.filtrarDados();
            console.log('Diretor apagado com sucesso.');
          },
          error => console.error('Erro ao apagar diretor', error)
        );
      }
      else if (this.filtroSelecionado === 'itens') {
        this.itemService.delete(item.id).subscribe(
          () => {
            this.carregarItens();
            this.filtrarDados();
            console.log('Item apagado com sucesso.');
          },
          error => console.error('Erro ao apagar item', error)
        );
      }
      else if (this.filtroSelecionado === 'títulos') {
        this.tituloService.delete(item.id).subscribe(
          () => {
            this.carregarTitulos();
            this.filtrarDados();
            console.log('Título apagado com sucesso.');
          },
          error => console.error('Erro ao apagar título', error)
        );
      }
    }
  }

}
