import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ator } from 'src/app/modules/ator'; // Ajuste o caminho conforme necessário
import { Titulo } from 'src/app/modules/titulo';
import { AtorService } from 'src/app/service/atorService'; // Ajuste o caminho conforme necessário
import { TituloService } from 'src/app/service/tituloService';

@Component({
  selector: 'app-cadastro-ator',
  templateUrl: './cadastro-ator.component.html',
  styleUrls: ['./cadastro-ator.component.css']
})
export class CadastroAtorComponent implements OnInit {
  ator: Ator;
  titulos: Titulo[] = [];

  constructor(private atorService: AtorService, private router: Router, private tituloService: TituloService) {
    this.ator = new Ator(undefined, '', undefined);
  }

  ngOnInit(): void {
    this.carregarTitulos();
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

  carregarTitulos(): void {
    this.tituloService.getList().subscribe(data => {
      this.titulos = data;
      this.titulos = data.map(titulo => ({ ...titulo, selecionado: false }));
    });
  }

  toggleTitulo(titulo: Titulo, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.ator.titulos.push(titulo);
    } else {
      this.ator.titulos = this.ator.titulos.filter(t => t.id !== titulo.id);
    }
  }
}
