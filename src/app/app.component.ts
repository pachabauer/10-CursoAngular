import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
PrimeNGConfig;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private primeNGConfig: PrimeNGConfig) {}
  ngOnInit() {
    this.primeNGConfig.ripple = true;
  }

  title = 'pipesApp';
  nombre: string = 'fernando herraRa';
  valor: number = 1000;
  obj = {
    nombre: 'fernando',
  };

  mostrarNombre() {
    console.log(this.nombre);
    console.log(this.valor);
  }
}
