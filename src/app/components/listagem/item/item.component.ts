import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tipo } from 'src/app/modules/enums/tipo';
import { Titulo } from 'src/app/modules/titulo';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

    itemForm!: FormGroup;
    tipos = Object.values(Tipo); 
    titulos: Titulo[] = [];

    constructor(private fb: FormBuilder, private itemService: ItemService, private tituloService: TituloService) { }

    ngOnInit(): void {
      this.itemForm = this.fb.group({
        numeroSerie: ['', [Validators.required]],
        titulo: ['', [Validators.required]],
        dataAquisicao: ['', [Validators.required]],
        tipo: ['', [Validators.required]]
      });

      this.listTitulos(); // Para popular o dropdown de títulos
    }

    listTitulos() {
      this.tituloService.getList().subscribe(data => {
        this.titulos = data;
      });
    }

    onSubmit() {
      if (this.itemForm.valid) {
        this.itemService.create(this.itemForm.value).subscribe(response => {
          console.log('Item cadastrado com sucesso:', response);
          this.itemForm.reset(); // Resetando o formulário após o cadastro
        });
      }
    }
}
