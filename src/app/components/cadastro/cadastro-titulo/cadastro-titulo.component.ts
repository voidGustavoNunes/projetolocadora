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

  constructor(httpClient: HttpClient, private router: Router, private tituloService: TituloService, private atorService: AtorService, private diretorService: DiretorService, private classeService: ClasseService){
    this.titulo = new Titulo();
  }

  ngOnInit(): void {
    this.listarAtores();
    this.listarDiretores();
    this.listarClasses();
  }

  listarAtores() {
    this.atorService.getList().subscribe(data => {
      this.atores = data;
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
    if (this.titulo.id) {
      this.tituloService.update(this.titulo.id ,this.titulo).subscribe(() => {
        this.router.navigate(['/tabela-titulos']);
      });
    } else {
      this.tituloService.create(this.titulo).subscribe(() => {
        this.router.navigate(['/tabela-titulos']);
      });
    }
  }



}
