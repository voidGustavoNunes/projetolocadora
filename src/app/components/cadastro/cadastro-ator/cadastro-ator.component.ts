import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ator } from 'src/app/modules/ator'; // Ajuste o caminho conforme necessário
import { AtorService } from 'src/app/service/atorService'; // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-cadastro-ator',
  templateUrl: './cadastro-ator.component.html',
  styleUrls: ['./cadastro-ator.component.css']
})
export class CadastroAtorComponent implements OnInit {
  ator: Ator;

  constructor(private atorService: AtorService, private router: Router) {
    this.ator = new Ator(undefined, ''); // Inicializa o nome com uma string vazia, e o id com 0
  }

  ngOnInit(): void {
    if (history.state.item) {
      this.ator = history.state.item; // Se o ator já existe, o id será carregado
    }
  }

  salvar(): void {
    if (!this.ator.nome.trim()) {
      alert('O nome do ator é obrigatório.');
      return;
    }

    if (this.ator.id !== undefined && this.ator.id !== null) {
      this.atorService.update(this.ator.id, this.ator).subscribe(() => {
        this.router.navigate(['/tabela']);
      });
    } else {
      this.atorService.create(this.ator).subscribe(() => {
        this.router.navigate(['/tabela']);
      });
    }
  }
}
