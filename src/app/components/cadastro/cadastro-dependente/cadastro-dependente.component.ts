import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dependente } from 'src/app/modules/dependente';
import { Sexo } from 'src/app/modules/enums/sexo';

@Component({
  selector: 'app-cadastro-dependente',
  templateUrl: './cadastro-dependente.component.html',
  styleUrls: ['./cadastro-dependente.component.css']
})
export class CadastroDependenteComponent implements OnInit {
  @Input() sexo: string[] = [];
  @Output() dependenteSalvo = new EventEmitter<Dependente>();
  @Output() modalFechado = new EventEmitter<void>();

  dependente: Dependente = new Dependente();

  constructor() {}

  ngOnInit(): void {}

  salvar(): void {
    if (this.dependente.nome && this.dependente.sexo && this.dependente.dataNascimento) {
      console.log('THIS DEPENDENTE: ' + this.dependente);
      console.log('DEPENDENTE SALVO: ' + this.dependenteSalvo);
      this.dependenteSalvo.emit(this.dependente);
    } else {
      alert('Preencha todos os campos.');
    }
  }

  fecharModal(): void {
    this.modalFechado.emit();
  }
}
