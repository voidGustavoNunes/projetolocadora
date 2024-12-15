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

  atoresSelecionados: number[] = [];



  diretorId: ID | undefined;
  classeId: ID | undefined;

  constructor(httpClient: HttpClient, private router: Router, private tituloService: TituloService, private atorService: AtorService, private diretorService: DiretorService, private classeService: ClasseService){
    this.titulo = new Titulo();
    this.titulo.atores = [];
  }

  ngOnInit(): void {
    if (history.state.item) {
      this.titulo = {...history.state.item};

      // Inicializa atoresSelecionados com os IDs dos atores do título
      this.atoresSelecionados = this.titulo.atores.map(ator => ator.id).filter(id => id !== undefined) as number[];

      this.diretorId = this.titulo.diretor?.id;
      this.classeId = this.titulo.classe?.id;
    }

    this.listarAtores();
    this.listarDiretores();
    this.listarClasses();
  }

  listarAtores() {
    this.atorService.getList().subscribe(data => {
      this.atores = data;
    });
  }

  isAtorSelecionado(atorId: number): boolean {
    return this.atoresSelecionados.includes(atorId);
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
    // Garante que o título mantenha os atores originais se nenhuma alteração for feita
    if (this.atoresSelecionados.length === 0 && this.titulo.atores.length > 0) {
      this.atoresSelecionados = this.titulo.atores.map(ator => ator.id).filter(id => id !== undefined) as number[];
    }

    // Atualiza os atores do título
    this.titulo.atores = this.atores.filter(ator =>
      typeof ator.id === 'number' && this.atoresSelecionados.includes(ator.id)
    );

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
    // Verifica se o ID do ator é um número válido
    if (ator.id !== undefined) {
      const index = typeof ator.id === 'number' ? this.atoresSelecionados.indexOf(ator.id) : -1;

      if (index > -1) {
        // Remove o ator se já estiver selecionado
        this.atoresSelecionados.splice(index, 1);
      } else {
        // Adiciona o ator se não estiver selecionado
        if (typeof ator.id === 'number') {
          this.atoresSelecionados.push(ator.id);
        }
      }

      // Atualiza a lista de atores do título com base nos IDs selecionados
      this.titulo.atores = this.atores.filter(a =>
        typeof a.id === 'number' && this.atoresSelecionados.includes(a.id)
      );
    }
  }

  cancelar(): void {
    this.titulo = new Titulo();
    this.router.navigate(['/home']);
  }

}
