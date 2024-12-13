import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Item } from 'src/app/modules/item';
import { ItemService } from 'src/app/service/itemService';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  constructor(private itemService: ItemService){}

  ngOnInit(): void {
    this.listItens();
  }
  itens: Item[] = [];

  listItens(){
    this.itemService.getList().subscribe(
      data => {
        console.log('Itens =' + JSON.stringify(data));
        this.itens = data;
      }
    );
  }
}
