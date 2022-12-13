import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {
  nombre : string = 'Esteban';
  genero : string = 'masculino';

  objMap = { 
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  }

  //i18nPlural  y set
  clientes : string[] = ['john', 'rambo'];
  clientesMap = {
    '=0': 'no hay clientes esperando',
    '=1': 'hay un cliente esperando',
    'other': 'tenemos # clientes esperando'

  }

  cambiarCliente() {
  this.nombre = 'Peluca';
  this.genero = 'femenino';

  }

  borrarCliente() {
    this.clientes.pop()

  }

  persona = {
    'nombre' : 'john', 
    'domicilio' : 'california',
    'edad' : '199'
  }

  heroes  = [
    { 
      'nombre' : 'el peluca',
      'domicilio' : 'concha de la lora'
    },
    {
      'nombre' : 'chino',
      'domicilio': 'anda a hacerte coge'
    }
  ];

  // Async pipe
  miObservable = interval(2000);

  valorPromesa = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3000);
  });

  constructor() { }

  ngOnInit(): void {
  }

}
