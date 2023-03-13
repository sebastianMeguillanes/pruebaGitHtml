import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent{
  
  nombre: string = "sebas";
  apellido: string = "meguillanes";
  edad: number = 21;
}
