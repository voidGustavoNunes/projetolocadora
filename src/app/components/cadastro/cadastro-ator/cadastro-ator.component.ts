import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ator } from 'src/app/modules/ator';
import { AtorService } from 'src/app/service/atorService';
import { BaseComponent } from '../../base/base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-ator',
  templateUrl: './cadastro-ator.component.html',
  styleUrls: ['./cadastro-ator.component.css']
})
export class CadastroAtorComponent extends BaseComponent{

  ator: Ator = new Ator(0, '');

  constructor(private atorService: AtorService, protected override router: Router) {
    super(router);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.atorService.createAtor(this.ator).subscribe(
        response => {
          console.log('Ator cadastrado com sucesso:', response);
          form.reset();
        },
        error => {
          console.error('Erro ao cadastrar ator:', error);
        }
      );
    }
  }

}
