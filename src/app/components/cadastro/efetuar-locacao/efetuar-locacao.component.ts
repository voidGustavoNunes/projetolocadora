import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modules/cliente';
import { Item } from 'src/app/modules/item';
import { ClienteService } from 'src/app/service/clienteService';
import { ItemService } from 'src/app/service/itemService';
import { LocacaoService } from 'src/app/service/locacaoService';
import { ToastrService } from 'ngx-toastr';  // Importar o serviço Toastr

@Component({
  selector: 'app-efetuar-locacao',
  templateUrl: './efetuar-locacao.component.html',
  styleUrls: ['./efetuar-locacao.component.css']
})
export class EfetuarLocacaoComponent implements OnInit {
  locacao: any = {
    clienteId: null,
    itemId: null,
    dataDevolucaoPrevista: '',
    valor: 0
  };
  clientes: Cliente[] = [];
  itens: Item[] = [];

  constructor(
    private locacaoService: LocacaoService,
    private clienteService: ClienteService,
    private itemService: ItemService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.carregarClientes();
    this.carregarItens();
  }

  carregarClientes(): void {
    this.clienteService.getAll().subscribe({
      next: (clientes: Cliente[]) => {
        this.clientes = clientes;
      },
      error: (err) => {
        this.toastr.error('Erro ao carregar clientes', 'Erro');
        console.error('Erro ao carregar clientes', err);
      },
    });
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
      clienteId: null,
      itemId: null,
      dataDevolucaoPrevista: '',
      valor: 0
    };
    this.router.navigate(['/home']);
  }
}
