import 'rxjs/add/operator/map';

import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Cancion } from '../model/cancion';

//import { Configuration } from '../../app.constants';

@Injectable()
export class CancionesService {

    private url = 'http://localhost:8080/cancion/';
    
    constructor(private http: HttpClient) {   
    }

    public getAll(): Observable<any> {
      console.log(`CancionesService getAll ${this.url}`);
        return this.http.get(this.url);
    }

    public getById(id: number): Observable<any> {
        return this.http.get(this.url + id);
    }

    public add(nombre: string): Observable<any> {
        const toAdd = JSON.stringify({ nombre: nombre });
        return this.http.post(this.url, toAdd);
    }

    public update(id: number, cancion: Cancion): Observable<any> {
        return this.http.put(this.url + id, JSON.stringify(cancion));
    }

    public delete(id: number): Observable<any> {
        return this.http.delete(this.url + id);
    }
}