import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Almacenin } from '../interfaces/almacenin';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {

  baseUrl: string ='https://localhost:7265/api/Almacen/';


  constructor(private http: HttpClient) { }

  getAlmList():Observable<any[]>{
    return this.http.get<any>(this.baseUrl).pipe(map((data)=>data.result));
  }

  getAlmacenes():Observable<Almacenin[]>{
  return this.http.get<Almacenin[]>(this.baseUrl);
  }

  getAlmacen(){


    return this.http.get(this.baseUrl);
    
  }

  eliminarPedido(index:number){
    
    
  }

  crearalmacen(almacen: Almacenin){
    return this.http.post(this.baseUrl, almacen);
  }


  actualizarAlmacen(cod_almacen:string,almacen:Almacenin){
    return this.http.put(this.baseUrl+cod_almacen,almacen);
  }


  verAlmacen(cod_almacen:string){
    return this.http.get(this.baseUrl+cod_almacen)

  }
  

 

}