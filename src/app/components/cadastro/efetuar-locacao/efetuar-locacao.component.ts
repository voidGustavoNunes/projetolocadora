import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; // Importar o serviço Toastr
import { Cliente } from 'src/app/modules/cliente';
import { Item } from 'src/app/modules/item';
import { Socio } from 'src/app/modules/socio';
import { ItemService } from 'src/app/service/itemService';
import { LocacaoService } from 'src/app/service/locacaoService';
import { SocioService } from 'src/app/service/socioService';

@Component({
  selector: 'app-efetuar-locacao',
  templateUrl: './efetuar-locacao.component.html',
  styleUrls: ['./efetuar-locacao.component.css']
})
export class EfetuarLocacaoComponent implements OnInit {
  locacao: any = {
    socioId: null,
    itemId: null,
    dataDevolucaoPrevista: '',
    valor: 0
  };
  socios: Socio[] = [];
  itens: Item[] = [];

  constructor(
    private locacaoService: LocacaoService,
    private socioService: SocioService,
    private itemService: ItemService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    if (history.state.item) {
      this.locacao = history.state.item;


    }
    this.carregarSocios();
    this.carregarItens();
    console.log(this.locacao);
  }

  carregarSocios(): void {
    this.socioService.getAll().subscribe({
      next: (socio: Socio[]) => {
        this.socios = socio;
      },
      error: (err) => {
        this.toastr.error('Erro ao carregar socios', 'Erro');
        console.error('Erro ao carregar socios', err);
      },
    });
  }

  atualizarDataDevolucaoPrevista(): void {
    const itemId = this.locacao.itemId;

    if (itemId) {
      this.itemService.getById(itemId).subscribe({
        next: (item: Item) => {
          if (item && item.tituloId) {
            this.itemService.getTituloByItemId(item.tituloId).subscribe({
              next: (titulo) => {
                if (titulo && titulo.classe) {
                  // Substituí prazoDias por lógica baseada na dataDevolucao
                  const dataDevolucao = new Date(titulo.classe.dataDevolucao);
                  this.locacao.dataDevolucaoPrevista = dataDevolucao.toISOString().split('T')[0];
                  this.locacao.valor = titulo.classe.valor;
                }
              },
              error: (err) => {
                console.error('Erro ao buscar o título associado', err);
              },
            });
          }
        },
        error: (err) => {
          console.error('Erro ao buscar o item', err);
        },
      });
    }
  }


  carregarItens(): void {
    this.itemService.getAll().subscribe({
      next: (itens: Item[]) => {
        this.itens = itens;
      },
      error: (err) => {
        this.toastr.error('Erro ao carregar itens', 'Erro');
        console.error('Erro ao carregar itens', err);
      },
    });
  }

  salvar(): void {
    if (this.locacao.id) {
      this.locacaoService.update(this.locacao.id, this.locacao).subscribe({
        next: () => {
          this.toastr.success('Locação atualizada com sucesso!', 'Sucesso');
          this.cancelar();
        },
        error: (err) => {
          this.toastr.error('Erro ao atualizar locação', 'Erro');
          console.error('Erro ao atualizar locação', err);
        }
      });
    } else {
      this.locacaoService.create(this.locacao).subscribe({
        next: () => {
          this.toastr.success('Locação criada com sucesso!', 'Sucesso');
          this.cancelar();
        },
        error: (err) => {
          this.toastr.error('Erro ao criar locação', 'Erro');
          console.error('Erro ao criar locação', err);
        }
      });
    }
  }

  cancelar(): void {
    this.locacao = {
      socioId: null,
      itemId: null,
      dataDevolucaoPrevista: '',
      valor: 0
    };
    this.router.navigate(['/home']);
  }
}
