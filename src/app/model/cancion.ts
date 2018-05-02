export class Cancion{
    _id: number; //los atributos comienzan por "_" para que sean privados y solo se acceda por los getter y setter
    _nombre: String;

    constructor(id:number=-1, nombre: String = ""){
        //console.log("Cancion constructor");
        this._id = id;
        this._nombre = nombre;
    }

    get id(){
        //console.log("getter id");
        return this._id;
    }
    set id(id: number){
        //console.log("setter id");
        this._id = id;
    }

    get nombre(){
        //console.log("getter nombre");
        return this._nombre;
    }
    set name(nombre: String){
        //console.log("setter nombre");
        this._nombre = nombre;
    }
}