import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Ator } from 'src/app/modules/ator';
import { Classe } from 'src/app/modules/classe';
import { Cliente } from 'src/app/modules/cliente';
import { Dependente } from 'src/app/modules/dependente';
import { Diretor } from 'src/app/modules/diretor';
import { Item } from 'src/app/modules/item';
import { Locacao } from 'src/app/modules/locacao';
import { Socio } from 'src/app/modules/socio';
import { Titulo } from 'src/app/modules/titulo';
import { AtorService } from 'src/app/service/atorService';
import { ClasseService } from 'src/app/service/classeService';
import { ClienteService } from 'src/app/service/clienteService';
import { DependenteService } from 'src/app/service/dependenteService';
import { DiretorService } from 'src/app/service/diretorService';
import { ItemService } from 'src/app/service/itemService';
import { LocacaoService } from 'src/app/service/locacaoService';
import {  SocioService } from 'src/app/service/socioService';
import { TituloService } from 'src/app/service/tituloService';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  filtroSelecionado: string = 'atores';
  itensFiltrados = new MatTableDataSource<Ator | Classe | Diretor | Item | Titulo | Socio | Locacao | Cliente | Dependente>();

  atores: any[] = [];
  classes: any[] = [];
  diretores: any[] = [];
  titulos: any[] = [];
  itens: any[] = [];
  socios: any[] = [];
  locacoes: any[] = [];
  clientes: any[] = [];
  dependentes: any[] = [];

  displayedColumns: string[] = [];


  constructor(
    private readonly atorService: AtorService,
    private readonly classeService: ClasseService,
    private readonly diretorService: DiretorService,
    private readonly itemService: ItemService,
    private readonly tituloService: TituloService,
    private readonly locacaoService: LocacaoService,
    private readonly socioService: SocioService,
    private readonly clienteService: ClienteService,
    private readonly dependenteService: DependenteService,
    private readonly router: Router
  ) {}



  ngAfterViewInit(): void {
    if (this.paginator) {
      this.itensFiltrados.paginator = this.paginator;
    }

  }

  ngOnInit(): void {

    this.carregarSocios();
    this.carregarAtores();
    this.carregarClasses();
    this.carregarDiretores();
    this.carregarItens();
    this.carregarTitulos();
    this.carregarLocacoes();
    this.carregarDependentes();
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
    } else if (this.filtroSelecionado === 'socios') {
      this.itensFiltrados.data = this.socios;
      this.displayedColumns = ['nome', 'acoes', 'statusCliente'];
    } else if (this.filtroSelecionado === 'dependentes') {
      this.itensFiltrados.data = this.dependentes;
      this.displayedColumns = ['nome', 'acoes'];
    }
    else if (this.filtroSelecionado === 'locacoes') {
      this.itensFiltrados.data = this.locacoes; //
      this.displayedColumns = ['socios', 'numeroSerieLocacao', 'dataDevolucaoPrevista', 'valorLocacao', 'status', 'acoes'];
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

  carregarDependentes(): void {
    this.dependenteService.getList().subscribe(
      data => {
        this.dependentes = data;
        this.filtrarDados();
      },
      error => console.error('Erro ao carregar dependentes', error)
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
  carregarSocios(): void {
    this.clienteService.getList().subscribe(
      data => {
        this.socios = data;
        this.filtrarDados();
      },
      error => console.error('Erro ao carregar sócios', error)
    );
  }

  carregarLocacoes(): void {
    this.locacaoService.getList().subscribe(
      (data: Locacao[]) => {
        this.locacoes = data.map(locacao => ({
          ...locacao,
          socio: locacao.socio || { nome: 'Sócio não informado' },
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
      case 'socios':
        rotaCadastro = '/cadastro-socio';
        break;
      case 'locacoes':
          rotaCadastro = '/efetuar-locacao';
          break;
      case 'dependentes':
          rotaCadastro = '/cadastro-dependente';
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
      else if (this.filtroSelecionado === 'socios') {
        this.socioService.delete(item.id).subscribe(
          () => {
            this.carregarSocios();
            this.filtrarDados();
            console.log('Sócio apagado com sucesso.');
          },
          error => console.error('Erro ao apagar sócio', error)
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
      else if (this.filtroSelecionado === 'dependentes') {
        this.dependenteService.delete(item.id).subscribe(
          () => {
            this.carregarDependentes();
            this.filtrarDados();
            console.log('Dependente apagado com sucesso.');
          },
          error => console.error('Erro ao apagar dependente', error)
        );
      } 
    }
  }

  toggleAtivo(item: any): void {
    if(item.ativo == true){
      this.clienteService.desativar(item.id).subscribe(response => {
        alert('Item desativado com sucesso');
        console.log('Status atualizado:', response);
      });
    } else {
      this.clienteService.ativar(item.id).subscribe(response => {
        alert('Item ativado com sucesso');
        console.log('Status atualizado:', response);
      });
    }

    // Inverte o valor do atributo 'ativo'
    item.ativo = !item.ativo;


  }

}
