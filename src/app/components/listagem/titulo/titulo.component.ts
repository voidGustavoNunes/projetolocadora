import { Component } from '@angular/core';
import { Titulo } from 'src/app/modules/titulo';
import { ItemService } from 'src/app/service/itemService';
import { TituloService } from 'src/app/service/tituloService';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent {
  constructor(private tituloService: TituloService){}

  ngOnInit(): void {
    this.listTitulos();
  }
  titulos: Titulo[] = [];

  listTitulos(){
    this.tituloService.getList().subscribe(
      data => {
        console.log('Títulos =' + JSON.stringify(data));
        this.titulos = data;
      }
    );
  }
}
