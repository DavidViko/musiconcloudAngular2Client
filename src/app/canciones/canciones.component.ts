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
  nombreCancion: string;
  isInvalid: boolean;

  constructor(private cancionesService: CancionesService) {
    console.log('CancionesComponent constructor');
    
    //inicializar atributos
    this.isInvalid = false;
    this.nombreCancion = '';
    this.canciones = [];

    //this.mockData();
  }

  ngOnInit() {
    console.log('CancionesComponent ngOnInit');
    //llamadas a los servicios
    this.recargar();
  } // fin onInit

  eliminar (id:number){
    console.log(`CancionesComponent eliminar ${id}`);
    if (confirm ('Quieres eliminar la cancion?')){
      this.cancionesService.delete(id).subscribe(
        result=>{
          console.log('Cancion eliminada');
          this.recargar();
        },
        error=>{
          console.warn(`Error al eliminar ${error}`);
        }
      )
    }
  }

  recargar(){
    this.canciones = [];
    this.cancionesService.getAll().subscribe(
      result=>{
        console.log('response correcto %o', result);
        //let cancion: Cancion;
        if (result != null){
          result.forEach( element => {
            this.canciones.push( element );
          });
        } 
      },
      error=>{
        console.warn(error);
      }
    );
  }

  crearCancion(){
    if (this.nombreCancion.trim().length > 0){
      this.isInvalid = false;
      this.cancionesService.crear(this.nombreCancion).subscribe(
        result=>{
          this.nombreCancion = '';
          this.recargar();
        },
        error=>{
          console.warn(`Error al crear ${error}`);
        }
      );
    } else{
      this.isInvalid = true;
      console.warn('Campo vacio');
    }
  }

  modificar(index:number){
    let cancion = this.canciones[index];
    if (cancion.nombre.trim().length > 0){
      this.cancionesService.update(cancion).subscribe(
        result=>{
          console.log(`Cancion %o modificada`,cancion);
          this.nombreCancion = '';
        },
        error=>{
          console.warn(`Error al modificar ${error}`);
        }
      );
    }else{
      console.warn('Campo no válido');
    }
  }

  mockData(){
    this.canciones.push(new Cancion(1,'macarana'));
    this.canciones.push(new Cancion(2,'mocorono'));
    this.canciones.push(new Cancion(3,'mecerene'));
    this.canciones.push(new Cancion(4,'micirini'));
    this.canciones.push(new Cancion(5,'mucurunu'));
  }
}
