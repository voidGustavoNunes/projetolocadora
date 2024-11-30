import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modules/cliente';
import { ClienteService } from 'src/app/service/clienteService';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{


  ngOnInit(): void {
    this.listClientes();
  }

  constructor(private clienteService: ClienteService){

}
clientes: Cliente[] = [];



  listClientes(){
    this.clienteService.getList().subscribe(
      data => {
        console.log('Clientes =' + JSON.stringify(data));
        this.clientes = data;
      }
    );
  }
}
