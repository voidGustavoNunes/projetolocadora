import { Component } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { Classe } from 'src/app/modules/classe';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ClasseService } from 'src/app/service/classeService';

@Component({
  selector: 'app-cadastro-classe',
  templateUrl: './cadastro-classe.component.html',
  styleUrls: ['./cadastro-classe.component.css']
})
export class CadastroClasseComponent extends BaseComponent{
  classe: Classe = new Classe(0, '', 0, new Date()); // Inicializa a classe com valores padrão

  constructor(private classeService: ClasseService, protected override router: Router) {
    super(router); // Chama o construtor da classe base
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.classeService.createClasse(this.classe).subscribe(
        response => {
          console.log('Classe cadastrada com sucesso:', response);
          form.reset(); // Limpa o formulário após o envio bem-sucedido
        },
        error => {
          console.error('Erro ao cadastrar classe:', error);
        }
      );
    }
  }


}
