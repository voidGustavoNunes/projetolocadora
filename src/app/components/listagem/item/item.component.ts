import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tipo } from 'src/app/modules/enums/tipo';
import { Titulo } from 'src/app/modules/titulo';
import { ItemService } from 'src/app/service/itemService';
import { TituloService } from 'src/app/service/tituloService';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

}
