import { Component, OnInit } from '@angular/core';
import { Diretor } from 'src/app/modules/diretor';
import { DiretorService } from 'src/app/service/diretorService';

@Component({
  selector: 'app-diretor',
  templateUrl: './diretor.component.html',
  styleUrls: ['./diretor.component.css']
})
export class DiretorComponent implements OnInit{


  ngOnInit(): void {
    this.listDiretores();
  }

  constructor(private diretorService: DiretorService){

}
  diretores: Diretor[] = [];



  listDiretores(){
    this.diretorService.getList().subscribe(
      data => {
        console.log('Diretores =' + JSON.stringify(data));
        this.diretores = data;
      }
    );
  }
}
