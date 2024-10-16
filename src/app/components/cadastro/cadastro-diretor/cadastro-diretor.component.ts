import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Diretor } from 'src/app/modules/diretor'; // Ajuste o caminho conforme necessário
import { DiretorService } from 'src/app/service/diretorService'; // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-cadastro-diretor',
  templateUrl: './cadastro-diretor.component.html',
  styleUrls: ['./cadastro-diretor.component.css']
})
export class CadastroDiretorComponent implements OnInit {
  diretor: Diretor = { id: 0, nome: '' }; // Inicializar o diretor

  constructor(private diretorService: DiretorService, private router: Router) {}

  ngOnInit(): void {
    if (history.state.item) {
      this.diretor = history.state.item; // Carregar dados do diretor para edição
    }
  }

  salvar(): void {
    if (this.diretor.nome.trim() === '') {
      alert('O nome do diretor é obrigatório.');
      return;
    }

    if (this.diretor.id) {
      this.diretorService.updateDiretor(this.diretor).subscribe(() => {
        this.router.navigate(['/tabela-diretor']);
      });
    } else {
      this.diretorService.createDiretor(this.diretor).subscribe(() => {
        this.router.navigate(['/tabela-diretor']);
      });
    }
  }
}
