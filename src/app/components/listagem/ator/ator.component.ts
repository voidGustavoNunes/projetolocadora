import { Component, OnInit } from '@angular/core';
import { Ator } from 'src/app/modules/ator';
import { AtorService } from 'src/app/service/atorService';

@Component({
  selector: 'app-ator',
  templateUrl: './ator.component.html',
  styleUrls: ['./ator.component.css']
})
export class AtorComponent implements OnInit{

  atores: Ator[] = [];

  constructor(private atorService: AtorService){

}

  ngOnInit(): void {
    this.listAtores();
  }


  listAtores(){
    this.atorService.getList().subscribe(
      data => {
        console.log('Atores =' + JSON.stringify(data));
        this.atores = data;
      }
    );
  }
}
