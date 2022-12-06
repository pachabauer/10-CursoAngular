import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
