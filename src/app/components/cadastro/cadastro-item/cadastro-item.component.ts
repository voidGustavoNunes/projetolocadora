import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tipo } from 'src/app/modules/enums/tipo';
import { Item } from 'src/app/modules/item';
import { Titulo } from 'src/app/modules/titulo';
import { ItemService } from 'src/app/service/itemService';
import { TituloService } from 'src/app/service/tituloService';

@Component({
  selector: 'app-cadastro-item',
  templateUrl: './cadastro-item.component.html',
  styleUrls: ['./cadastro-item.component.css']
})
export class CadastroItemComponent implements OnInit{
  item: Item;
  titulos: Titulo[] = [];
  tipos = Object.values(Tipo);

  constructor(private itemService: ItemService, private router: Router, private tituloService: TituloService) {
    this.item = new Item(undefined, 0, new Date, new Titulo, Tipo.BLUERAY); // Inicializa o nome com uma string vazia, e o id com 0
  }

  ngOnInit(): void {
    if (history.state.item) {
      this.item = history.state.item;
    }
    this.listTitulos();
  }

  listTitulos() {
    this.tituloService.getList().subscribe(data => {
      this.titulos = data;
    });
  }

  salvar(): void {
    if (this.item.titulo === null) {
      alert('É obrigatório selecionar um título.');
      return;
    }

    if (this.item.id !== undefined && this.item.id !== null) {
      this.itemService.update(this.item.id, this.item).subscribe(() => {
        this.router.navigate(['/tabela-item']);
      });
    } else {
      this.itemService.create(this.item).subscribe(() => {
        this.router.navigate(['/tabela-item']);
      });
    }
  }


































  // itemForm!: FormGroup;
  // tipos = Object.values(Tipo);
  // titulos: Titulo[] = [];

  // constructor(private fb: FormBuilder, private itemService: ItemService, private tituloService: TituloService) { }

  // ngOnInit(): void {
  //   this.itemForm = this.fb.group({
  //     numeroSerie: ['', [Validators.required]],
  //     titulo: ['', [Validators.required]],
  //     dataAquisicao: ['', [Validators.required]],
  //     tipo: ['', [Validators.required]]
  //   });

  //   this.listTitulos(); // Para popular o dropdown de títulos
  // }

  // listTitulos() {
  //   this.tituloService.getList().subscribe(data => {
  //     this.titulos = data;
  //   });
  // }

  // onSubmit() {
  //   if (this.itemForm.valid) {
  //     this.itemService.create(this.itemForm.value).subscribe(response => {
  //       console.log('Item cadastrado com sucesso:', response);
  //       this.itemForm.reset();
  //     });
  //   }
  // }
}
