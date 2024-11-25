import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modules/cliente';
import { Dependente } from 'src/app/modules/dependente';
import { Sexo } from 'src/app/modules/enums/sexo';
import { ClienteService } from 'src/app/service/clienteService';
import { DependenteService } from 'src/app/service/dependenteService';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent {
  cliente: Cliente;
  dependente: Dependente;
  dependentes: Dependente[] = [];
  sexo: string[] = Object.values(Sexo) as string[];

  constructor(private clienteService: ClienteService, private router: Router, private dependenteService: DependenteService) {
    this.cliente = new Cliente();
    this.dependente = new Dependente();
  }

  ngOnInit(): void {
    if (history.state.item) {
      this.cliente = history.state.item;
    }
  }

  salvar(): void {

    if (this.cliente.nome?.trim() === '') {
      alert('O nome do cliente é obrigatório.');
      return;
    }

    if (this.cliente.id !== undefined && this.cliente.id !== null) {
      this.clienteService.update(this.cliente.id, this.cliente).subscribe(() => {
        this.router.navigate(['/tabela-cliente']);
      });
    } else {
      this.clienteService.create(this.cliente).subscribe(() => {
        this.router.navigate(['/tabela-cliente']);
      });
    }
  }

  cancelar(): void {
    this.cliente = new Cliente();
    this.router.navigate(['/home']);
  }



  ///DEPENDENTES

  abrirModalDependente(): void {
    this.dependente = new Dependente();
    const modalElement = document.getElementById('modalDependente')!;
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  adicionarDependente(): void {
    if (this.dependente.nome?.trim() && this.dependente.sexo && this.dependente.dataNascimento) {
      this.cliente.dependentes.push(this.dependente);

      const modalElement = document.getElementById('modalDependente')!;
      const modal = bootstrap.Modal.getInstance(modalElement);

      if (modal) {
        modal.hide();
      } else {
        console.error('Modal instance not found.');
      }
    } else {
      alert('Preencha todos os campos do dependente.');
    }
  }
  removerDependente(index: number): void {
    if (index >= 0 && index < this.cliente.dependentes.length) {
      this.cliente.dependentes.splice(index, 1);
    } else {
      console.error('Índice inválido ao remover dependente.');
    }
  }

}
