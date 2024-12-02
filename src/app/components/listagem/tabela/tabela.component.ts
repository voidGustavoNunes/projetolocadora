import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Ator } from 'src/app/modules/ator';
import { Classe } from 'src/app/modules/classe';
import { Cliente } from 'src/app/modules/cliente';
import { Diretor } from 'src/app/modules/diretor';
import { Item } from 'src/app/modules/item';
import { Locacao } from 'src/app/modules/locacao';
import { Titulo } from 'src/app/modules/titulo';
import { AtorService } from 'src/app/service/atorService';
import { ClasseService } from 'src/app/service/classeService';
import { ClienteService } from 'src/app/service/clienteService';
import { DiretorService } from 'src/app/service/diretorService';
import { ItemService } from 'src/app/service/itemService';
import { LocacaoService } from 'src/app/service/locacaoService';
import { TituloService } from 'src/app/service/tituloService';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  filtroSelecionado: string = 'atores';
  itensFiltrados = new MatTableDataSource<Ator | Classe | Diretor | Item | Titulo | Cliente | Locacao>();

  atores: any[] = [];
  classes: any[] = [];
  diretores: any[] = [];
  titulos: any[] = [];
  itens: any[] = [];
  clientes: any[] = [];
  locacoes: any[] = [];

  displayedColumns: string[] = [];


  constructor(
    private readonly atorService: AtorService,
    private readonly classeService: ClasseService,
    private readonly diretorService: DiretorService,
    private readonly itemService: ItemService,
    private readonly tituloService: TituloService,
    private readonly clienteService: ClienteService,
    private readonly locacaoService: LocacaoService,
    private readonly router: Router
  ) {}



  ngAfterViewInit(): void {
    if (this.paginator) {
      this.itensFiltrados.paginator = this.paginator;
    }

  }

  ngOnInit(): void {

    this.carregarClientes();
    this.carregarAtores();
    this.carregarClasses();
    this.carregarDiretores();
    this.carregarItens();
    this.carregarTitulos();
    this.carregarLocacoes();
  }


  filtrarDados(): void {
    if (this.filtroSelecionado === 'atores') {
      this.itensFiltrados.data = this.atores;
      this.displayedColumns = ['nome', 'acoes'];
    } else if (this.filtroSelecionado === 'classes') {
      this.itensFiltrados.data = this.classes;
      this.displayedColumns = ['nome', 'valor', 'dataDevolucao', 'acoes'];
    } else if (this.filtroSelecionado === 'diretores') {
      this.itensFiltrados.data = this.diretores;
      this.displayedColumns = ['nome', 'acoes'];
    } else if (this.filtroSelecionado === 'itens') {
      this.itensFiltrados.data = this.itens;
      this.displayedColumns = ['numeroSerie', 'dataAquisicao', 'tipo', 'acoes'];
    } else if (this.filtroSelecionado === 'títulos') {
      this.itensFiltrados.data = this.titulos;
      this.displayedColumns = ['nome', 'ano', 'sinopse', 'categoria', 'acoes'];
    } else if (this.filtroSelecionado === 'clientes') {
      this.itensFiltrados.data = this.clientes;
      this.displayedColumns = ['nome', 'acoes'];
    }
    else if (this.filtroSelecionado === 'locacoes') {
      this.itensFiltrados.data = this.locacoes; //
      this.displayedColumns = ['cliente', 'numeroSerieLocacao', 'dataDevolucaoPrevista', 'valorLocacao', 'status', 'acoes'];
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
  carregarClientes(): void {
    this.clienteService.getList().subscribe(
      data => {
        this.clientes = data;
        this.filtrarDados();
      },
      error => console.error('Erro ao carregar clientes', error)
    );
  }

  carregarLocacoes(): void {
    this.locacaoService.getList().subscribe(
      (data: Locacao[]) => {
        this.locacoes = data.map(locacao => ({
          ...locacao,
          cliente: locacao.cliente || { nome: 'Cliente não informado' },
          item: locacao.item || { numeroSerie: 'N/A' },
        }));
        this.filtrarDados();
      },
      error => console.error('Erro ao carregar locações', error)
    );
  }


  editarItem(item: any): void {
    let rotaCadastro = '';

    switch (this.filtroSelecionado) {
      case 'atores':
        rotaCadastro = '/cadastro-ator';
        break;
      case 'classes':
        rotaCadastro = '/cadastro-classe';
        break;
      case 'diretores':
        rotaCadastro = '/cadastro-diretor';
        break;
      case 'itens':
        rotaCadastro = '/cadastro-item';
        break;
      case 'títulos':
        rotaCadastro = '/cadastro-titulo';
        break;
      case 'clientes':
        rotaCadastro = '/cadastro-cliente';
        break;
      case 'locacoes':
          rotaCadastro = '/efetuar-locacao';
          break;
    }

    if (rotaCadastro) {
      this.router.navigate([rotaCadastro], { state: { item } });
    }
  }


  apagarItem(item: any): void {
    let confirmacao = null;
    if(this.filtroSelecionado == 'locacoes'){
      confirmacao = confirm(`Tem certeza que deseja apagar Locação de ID: ${item.id}?`);
    }
    else if(this.filtroSelecionado !== 'itens' && this.filtroSelecionado !== 'locacoes'){
      confirmacao = confirm(`Tem certeza que deseja apagar ${item.nome}?`);
    }else{
      confirmacao = confirm(`Tem certeza que deseja apagar ${item.numeroSerie}?`);
    }
    if (confirmacao) {
      if (!item.id) {
        console.error('O item não possui um ID. Não é possível excluir.');
        return;
      }
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
      else if (this.filtroSelecionado === 'clientes') {
        this.clienteService.delete(item.id).subscribe(
          () => {
            this.carregarClientes();
            this.filtrarDados();
            console.log('Cliente apagado com sucesso.');
          },
          error => console.error('Erro ao apagar cliente', error)
        );
      }
      else if (this.filtroSelecionado === 'locacoes') {
        this.locacaoService.delete(item.id).subscribe(
          () => {
            this.carregarLocacoes();
            this.filtrarDados();
            console.log('Locação apagada com sucesso.');
          },
          error => console.error('Erro ao apagar locação', error)
        );
      }
    }
  }

}
