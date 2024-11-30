import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Diretor } from 'src/app/modules/diretor';
import { DiretorService } from 'src/app/service/diretorService';

@Component({
  selector: 'app-cadastro-diretor',
  templateUrl: './cadastro-diretor.component.html',
  styleUrls: ['./cadastro-diretor.component.css']
})
export class CadastroDiretorComponent implements OnInit {
  diretor: Diretor;

  constructor(private diretorService: DiretorService, private router: Router) {
    this.diretor = new Diretor(undefined, '');
  }

  ngOnInit(): void {
    console.log('teste12');
    if (history.state.item) {
      this.diretor = history.state.item;
    }
  }

  salvar(): void {
    if (this.diretor.nome.trim() === '') {
      alert('O nome do diretor é obrigatório.');
      return;
    }

    if (this.diretor.id !== undefined && this.diretor.id !== null) {
      this.diretorService.update(this.diretor.id, this.diretor).subscribe(() => {
        this.router.navigate(['/tabela-diretor']);
      });
    } else {
      this.diretorService.create(this.diretor).subscribe(() => {
        this.router.navigate(['/tabela-diretor']);
      });
    }
  }

  cancelar(): void {
    this.diretor = new Diretor(undefined, '');
    this.router.navigate(['/home']);
  }
}
