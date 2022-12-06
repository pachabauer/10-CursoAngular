import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent  {
  nombreLower: string = 'esteban';
  nombreUpper: string = 'ESTEBAN';
  nombreCompleto: string = 'esteban bauer'

  fecha: Date = new Date();


}
