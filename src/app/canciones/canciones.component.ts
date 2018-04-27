import { Component, OnInit } from '@angular/core';
import { CancionesService } from '../providers/canciones.service';
import { Cancion } from '../model/cancion';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {

  // cancones
  canciones: Cancion[];
  cancionSeleccionada: Cancion;

  constructor(private cancionesService: CancionesService) {
    console.log('CancionesComponent constructor');
    
    //inicializar atributos
    this.canciones=[];

    this.cancionSeleccionada = new Cancion(2,"Mock");
    //this.cancionSeleccionada.nombre("SETTER_Mock");

    this.mockData();
  }

  ngOnInit() {
    console.log('CancionesComponent onInit');

    //llamadas a servicios
  }

  eliminar (id:number){
    console.log(`CancionesComponent eliminar ${id}`);
  }

  mockData(){
    this.canciones.push(new Cancion(1,"macarena"));
    this.canciones.push(new Cancion(2,"mocorono"));
    this.canciones.push(new Cancion(3,"mecerene"));
    this.canciones.push(new Cancion(4,"micirini"));
    this.canciones.push(new Cancion(5,"mucurunu"));
  }
}
