import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css'],

    //para que la hoja de estilo se genere con la hoja de etilo o componente en linea usar   ng g c persona -s -t
    //usar si tiene pocas lineas de codigo 
    //template: '<h1>Listas</h1><app-persona></app-persona><app-persona></app-persona> '
})

export class PersonasComponent {
    desabilitar = false;
}