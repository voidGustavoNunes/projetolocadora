import { Component } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { Diretor } from 'src/app/modules/diretor';
import { NgForm } from '@angular/forms';
import { DiretorService } from 'src/app/service/diretorService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-diretor',
  templateUrl: './cadastro-diretor.component.html',
  styleUrls: ['./cadastro-diretor.component.css']
})
export class CadastroDiretorComponent extends BaseComponent{

  constructor(private diretorService: DiretorService, protected override router: Router) {
    super(router);
  }

  diretor: Diretor = new Diretor(0, '');

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.diretorService.createDiretor(this.diretor).subscribe(
        response => {
          console.log('Diretor cadastrado com sucesso:', response);
          form.reset();
        },
        error => {
          console.error('Erro ao cadastrar diretor:', error);
        }
      );
    }
  }
}
