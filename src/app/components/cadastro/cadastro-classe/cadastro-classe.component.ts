import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classe } from 'src/app/modules/classe'; // Ajuste o caminho conforme necessário
import { ClasseService } from 'src/app/service/classeService'; // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-cadastro-classe',
  templateUrl: './cadastro-classe.component.html',
  styleUrls: ['./cadastro-classe.component.css']
})
export class CadastroClasseComponent implements OnInit {
  classe: Classe = { id: 0, nome: '', valor: 0, dataDevolucao: new Date() }; // Inicializar classe

  constructor(private classeService: ClasseService, private router: Router) {}

  ngOnInit(): void {
    if (history.state.item) {
      this.classe = history.state.item; // Carregar dados da classe para edição
    }
  }

  salvar(): void {
    if (this.classe.nome.trim() === '' || !this.classe.valor || !this.classe.dataDevolucao) {
      alert('Todos os campos são obrigatórios.');
      return;
    }

    if (this.classe.id) {
      this.classeService.updateClasse(this.classe).subscribe(() => {
        this.router.navigate(['/tabela-classe']);
      });
    } else {
      this.classeService.createClasse(this.classe).subscribe(() => {
        this.router.navigate(['/tabela-classe']);
      });
    }
  }
}
