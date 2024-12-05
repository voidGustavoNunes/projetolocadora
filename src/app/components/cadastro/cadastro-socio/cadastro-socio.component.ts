import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { Dependente } from 'src/app/modules/dependente';
import { Sexo } from 'src/app/modules/enums/sexo';
import { DependenteService } from 'src/app/service/dependenteService';
import { SocioService } from '../../../service/socioService';
import { Socio } from 'src/app/modules/socio';

@Component({
  selector: 'app-cadastro-socio',
  templateUrl: './cadastro-socio.component.html',
  styleUrls: ['./cadastro-socio.component.css']
})
export class CadastroSocioComponent {
  socio: Socio;
  dependente: Dependente;
  dependentes: Dependente[] = [];
  sexo: string[] = Object.values(Sexo) as string[];
  dependenteEditando: number | null = null;


  constructor(private socioService: SocioService, private router: Router, private dependenteService: DependenteService) {
    this.socio = new Socio();
    this.dependente = new Dependente();
  }

  ngOnInit(): void {
    if (history.state.item) {
      this.socio = history.state.item;
    }
  }

  salvar(): void {

    if (this.socio.nome?.trim() === '') {
      alert('O nome do socio é obrigatório.');
      return;
    }

    if (!this.socio.telefone?.trim()) {
      alert('O telefone do sócio é obrigatório.');
      return;
    }

    const telefoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    if (!telefoneRegex.test(this.socio.telefone)) {
      alert('O telefone deve estar no formato (XX) XXXXX-XXXX.');
      return;
    }

    if (this.socio.id !== undefined && this.socio.id !== null) {
      this.socioService.update(this.socio.id, this.socio).subscribe(() => {
        this.router.navigate(['/tabela-socio']);
      });
    } else {
      this.socioService.create(this.socio).subscribe(() => {
        this.router.navigate(['/tabela-socio']);
      });
    }
  }

  cancelar(): void {
    this.socio = new Socio();
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
    if (this.socio.dependentes.length >= 3) {
      alert('Não é possível adicionar mais de 3 dependentes.');
      return;
    }

    if (this.dependente.nome?.trim() && this.dependente.sexo && this.dependente.dataNascimento) {
      if (this.dependenteEditando !== null) {
        // Modo de edição
        this.socio.dependentes[this.dependenteEditando] = {...this.dependente};
        this.dependenteEditando = null;
      } else {
        // Modo de adição
        this.socio.dependentes.push({...this.dependente});
      }

      const modalElement = document.getElementById('modalDependente')!;
      const modal = bootstrap.Modal.getInstance(modalElement);

      if (modal) {
        modal.hide();
      }

      // Limpa o formulário de dependente
      this.dependente = new Dependente();
    } else {
      alert('Preencha todos os campos do dependente.');
    }
  }

  removerDependente(index: number): void {
    if (index >= 0 && index < this.socio.dependentes.length) {
      this.socio.dependentes.splice(index, 1);
    } else {
      console.error('Índice inválido ao remover dependente.');
    }
  }

  editarDependente(index: number): void {
    this.dependenteEditando = index;
    this.dependente = {...this.socio.dependentes[index]};

    const modalElement = document.getElementById('modalDependente')!;
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

}
