import 'rxjs/add/operator/map';

import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Cancion } from '../model/cancion';

//import { Configuration } from '../../app.constants';

const END_POINT = 'http://localhost:8080/cancion/';


@Injectable()
export class CancionesService {
    
    constructor(private http: HttpClient) {   
    }

    public getAll(): Observable<any> {
        let url = END_POINT;
      console.log(`CancionesService getAll ${url}`);
        return this.http.get(END_POINT);
    }

    public getById(id: number): Observable<any> {
        let url = END_POINT + id;
        return this.http.get(url);
    }

    public crear(nombre: string): Observable<any> {
        let url = END_POINT;
        let body = { "nombre": nombre };
        return this.http.post(url, body);
    }

    public update(cancion: Cancion): Observable<any> {
        let url = END_POINT + cancion.id;
        let body = cancion;
        return this.http.put(url, body);
    }

    public delete(id: number): Observable<any> {
        let url = END_POINT + id;
        return this.http.delete(url);
    }
}