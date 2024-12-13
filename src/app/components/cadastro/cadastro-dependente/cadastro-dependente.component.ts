import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Dependente } from 'src/app/modules/dependente';
import { Sexo } from 'src/app/modules/enums/sexo';
import { DependenteService } from 'src/app/service/dependenteService';

@Component({
  selector: 'app-cadastro-dependente',
  templateUrl: './cadastro-dependente.component.html',
  styleUrls: ['./cadastro-dependente.component.css']
})
export class CadastroDependenteComponent implements OnInit {


  dependente: Dependente;
  sexo: string[] = Object.values(Sexo) as string[];


  constructor(private router: Router, private dependenteService: DependenteService) {
    this.dependente = new Dependente();
  }

  ngOnInit(): void {
    if (history.state.item) {
      this.dependente = history.state.item;
    }
  }

  salvar(): void {
    if (!this.dependente.nome || !this.dependente.sexo || !this.dependente.dataNascimento) {
      alert('Preencha todos os campos.');
      return;
    }

    if (this.dependente.id !== undefined && this.dependente.id !== null) {
      this.dependenteService.update(this.dependente.id, this.dependente).subscribe(() => {
        this.router.navigate(['/tabela-dependentes']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/tabela-dependentes']);
  }

}
