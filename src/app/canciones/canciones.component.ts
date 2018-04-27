import { Component, OnInit } from '@angular/core';
import { CancionesService } from '../providers/canciones.service';
import { Cancion } from '../model/cancion';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {

  // canciones
  canciones: Cancion[];
  cancionSeleccionada: Cancion;

  constructor(private cancionesService: CancionesService) {
    console.log('CancionesComponent constructor');
    
    //inicializar atributos
    this.canciones=[];

    //this.mockData();
  }

  ngOnInit() {
    console.log('CancionesComponent ngOnInit');
    //llamadas a los servicios
    this.cancionesService.getAll().subscribe(
      result=>{
        console.log('response correcto %o', result);
        //let cancion: Cancion;
        result.forEach( element => {
            
            this.canciones.push( element );
        });
        
      },
      error=>{
        console.warn(error);
      }
    );
  }

  eliminar (id:number){
    console.log(`CancionesComponent eliminar ${id}`);
  }

  mockData(){
    this.canciones.push(new Cancion(1,"macarana"));
    this.canciones.push(new Cancion(2,"mocorono"));
    this.canciones.push(new Cancion(3,"mecerene"));
    this.canciones.push(new Cancion(4,"micirini"));
    this.canciones.push(new Cancion(5,"mucurunu"));
  }
}
