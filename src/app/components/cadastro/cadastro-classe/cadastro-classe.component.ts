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
  classe: Classe;

  constructor(private classeService: ClasseService, private router: Router) {
    this.classe = new Classe(undefined, '', 0, new Date());
  }

  ngOnInit(): void {
    console.log("dados recebidos: ", history.state.item);
    if (history.state.item) {
      this.classe = history.state.item;
    }
  }

  salvar(): void {
    if (this.classe.nome.trim() === '' || !this.classe.valor || !this.classe.dataDevolucao) {
      alert('Todos os campos são obrigatórios.');
      return;
    }

    if (this.classe.id !== undefined && this.classe.id !== null) {
      this.classeService.update(this.classe.id,this.classe).subscribe(() => {
        this.router.navigate(['/tabela-classe']);
      });
    } else {
      this.classeService.create(this.classe).subscribe(() => {
        this.router.navigate(['/tabela-classe']);
      });
    }
  }
}
