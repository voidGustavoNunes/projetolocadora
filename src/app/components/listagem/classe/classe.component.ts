import { Component, OnInit } from '@angular/core';
import { Classe } from 'src/app/modules/classe';
import { ClasseService } from 'src/app/service/classeService';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit{

  constructor(
    private classeService: ClasseService){

}
  ngOnInit(): void {
    this.listClasses();
  }
  classes: Classe[] = [];



  listClasses(){
    this.classeService.getList().subscribe(
      data => {
        console.log('Classes =' + JSON.stringify(data));
        this.classes = data;
      }
    );
  }
}
