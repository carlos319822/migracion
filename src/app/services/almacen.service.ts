import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Almacenin } from '../interfaces/almacenin';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {

  baseUrl: string ='https://localhost:7265/api/Almacen/';

 

  constructor(private http: HttpClient) { }

  getAlmacen(){


    return this.http.get(this.baseUrl);
    
  }

  eliminarPedido(index:number){
    
    
  }

  crearalmacen(almacen: Almacenin){
    return this.http.post(this.baseUrl, almacen);
  }


  actualizarAlmacen(id:number,almacen:Almacenin){
    return this.http.put(this.baseUrl+id,almacen);
  }

}