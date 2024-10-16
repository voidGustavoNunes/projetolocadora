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
  ator: Ator = { id: 0, nome: '' }; // Inicializar ator vazio para o cadastro

  constructor(private atorService: AtorService, private router: Router) {}

  ngOnInit(): void {
    // Verificar se existe um ator no estado, para a edição
    if (history.state.item) {
      this.ator = history.state.item; // Carregar dados do ator para edição
    }
  }

  // Método para salvar ou editar o ator
  salvar(): void {
    if (this.ator.nome.trim() === '') {
      // Se o nome estiver vazio ou apenas com espaços
      alert('O nome do ator é obrigatório.');
      return;
    }

    if (this.ator.id) {
      // Atualizar o ator existente
      this.atorService.updateAtor(this.ator).subscribe(() => {
        this.router.navigate(['/tabela']); // Redirecionar para a lista após a edição
      });
    } else {
      // Criar novo ator
      this.atorService.createAtor(this.ator).subscribe(() => {
        this.router.navigate(['/tabela']); // Redirecionar para a lista após a criação
      });
    }
  }
}
