import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Articulo } from '../interfaces/articulo';

@Injectable({
    providedIn: 'root'
  })

  export class ArticuloService{
    baseUrl:string='https://localhost:7265/api/Articulo/';

    constructor(private http:HttpClient){}


    getArtList():Observable<any[]>{
        return this.http.get<any>(this.baseUrl).pipe(map((data)=>data.result));
    }


    getArticulo(){
    return this.http.get(this.baseUrl);
    }

    creararticulo(articulo: Articulo){
        return this.http.post(this.baseUrl, articulo);
      }

  }