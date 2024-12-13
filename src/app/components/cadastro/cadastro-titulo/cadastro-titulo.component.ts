import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ator } from 'src/app/modules/ator';
import { Classe } from 'src/app/modules/classe';
import { Diretor } from 'src/app/modules/diretor';
import { Titulo } from 'src/app/modules/titulo';
import { AtorService } from 'src/app/service/atorService';
import { ClasseService } from 'src/app/service/classeService';
import { DiretorService } from 'src/app/service/diretorService';
import { TituloService } from '../../../service/tituloService';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-cadastro-titulo',
  templateUrl: './cadastro-titulo.component.html',
  styleUrls: ['./cadastro-titulo.component.css']
})
export class CadastroTituloComponent implements OnInit{
  titulo: Titulo;
  atores: Ator[] = [];
  diretores: Diretor[] = [];
  classes: Classe[] = [];
  classe = new Classe();
  diretor = new Diretor();



  diretorId: ID | undefined;
  classeId: ID | undefined;

  constructor(httpClient: HttpClient, private router: Router, private tituloService: TituloService, private atorService: AtorService, private diretorService: DiretorService, private classeService: ClasseService){
    this.titulo = new Titulo();
    this.titulo.atores = [];
  }

  ngOnInit(): void {
    if (history.state.item) {
      this.titulo = history.state.item;
      this.diretorId = this.titulo.diretor?.id;
      this.classeId = this.titulo.classe?.id;
    }
    this.listarAtores();
    this.listarDiretores();
    this.listarClasses();


  }

  listarAtores() {
    this.atorService.getList().subscribe(data => {
      this.atores = data.map(ator => ({
        ...ator,
        selecionado: this.titulo.atores.some(a => a.id === ator.id)
      }));
    });
  }
  listarDiretores() {
    this.diretorService.getList().subscribe(data => {
      this.diretores = data;
    });
  }

  listarClasses() {
    this.classeService.getList().subscribe(data => {
      this.classes = data;
    });
  }

  salvar(): void {
    this.titulo.atores = this.atores.filter(ator => ator.selecionado);

    if (this.diretorId) {
      this.titulo.diretor = this.diretores.find(d => d.id === this.diretorId);
    }
    if (this.classeId) {
      this.titulo.classe = this.classes.find(c => c.id === this.classeId);
    }

    if (this.titulo.id) {
      this.tituloService.update(this.titulo.id, this.titulo).subscribe(() => {
        this.router.navigate(['/tabela-titulos']);
      });
    } else {
      this.tituloService.create(this.titulo).subscribe(() => {
        this.router.navigate(['/tabela-titulos']);
      });
    }
  }

  toggleAtor(ator: Ator): void {
    const atorOriginal = this.atores.find(a => a.id === ator.id);

    if (atorOriginal) {
      // atorOriginal.selecionado = !atorOriginal.selecionado;

      if (atorOriginal.selecionado) {
        if (!this.titulo.atores.some(a => a.id === atorOriginal.id)) {
          this.titulo.atores.push(atorOriginal);
        }
      } else {
        this.titulo.atores = this.titulo.atores.filter(a => a.id !== atorOriginal.id);
      }
    }
  }

  cancelar(): void {
    this.titulo = new Titulo();
    this.router.navigate(['/home']);
  }

}
