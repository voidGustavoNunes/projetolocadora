import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { Dependente } from 'src/app/modules/dependente';
import { Sexo } from 'src/app/modules/enums/sexo';

@Component({
  selector: 'app-cadastro-dependente',
  templateUrl: './cadastro-dependente.component.html',
  styleUrls: ['./cadastro-dependente.component.css']
})
export class CadastroDependenteComponent {
  @Input() dependente: Dependente = new Dependente();
  @Input() sexo: string[] = Object.values(Sexo) as string[];
  @Output() dependenteAdicionado = new EventEmitter<Dependente>();

  salvar(): void {
    if (this.dependente.nome?.trim() && this.dependente.sexo && this.dependente.dataNascimento) {
      this.dependenteAdicionado.emit(this.dependente);
      const modalElement = document.getElementById('modalDependente')!;
      const modal = bootstrap.Modal.getInstance(modalElement);

      if (modal) {
        modal.hide();
      }
    } else {
      alert('Preencha todos os campos do dependente.');
    }
  }
}

