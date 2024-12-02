import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DevolucaoService } from 'src/app/service/devolucaoService';

@Component({
  selector: 'app-efetuar-devolucao',
  templateUrl: './efetuar-devolucao.component.html',
  styleUrls: ['./efetuar-devolucao.component.css']
})
export class EfetuarDevolucaoComponent {
  devolucaoForm: FormGroup;
  locacaoDetalhes: any | null = null;
  erro: string | null = null;

  constructor(
    private fb: FormBuilder,
    private devolucaoService: DevolucaoService
  ) {
    this.devolucaoForm = this.fb.group({
      numeroSerie: ['', Validators.required],
    });
  }

  buscarLocacao() {
    const numeroSerie = this.devolucaoForm.get('numeroSerie')?.value;

    this.devolucaoService.buscarLocacao(numeroSerie).subscribe({
      next: (data) => {
        this.locacaoDetalhes = data;
        this.erro = null;
        console.log(this.locacaoDetalhes)
      },
      error: (err) => {
        this.erro = err.error.message || 'Erro ao buscar locação.';
        this.locacaoDetalhes = null;
      },
    });
  }

  efetuarDevolucao() {
    const numeroSerie = this.devolucaoForm.get('numeroSerie')?.value;

    this.devolucaoService.efetuarDevolucao(numeroSerie).subscribe({
      next: (data) => {
        alert('Devolução realizada com sucesso!');
        this.locacaoDetalhes = null;
        this.devolucaoForm.reset();
      },
      error: (err) => {
        this.erro = err.error.message || 'Erro ao realizar devolução.';
      },
    });
  }
}
