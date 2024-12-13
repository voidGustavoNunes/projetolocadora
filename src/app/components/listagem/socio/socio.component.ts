import { Component, OnInit } from '@angular/core';
import { Socio } from 'src/app/modules/socio';
import { SocioService } from 'src/app/service/socioService';

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit{

  ngOnInit(): void {
    this.listSocios();
  }

  constructor(private socioService: SocioService){

}
  socios: Socio[] = [];


  listSocios(){
    this.socioService.getList().subscribe(
      data => {
        console.log('Socios =' + JSON.stringify(data));
        this.socios = data;
      }
    );
  }
}
