import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoTransaccion } from '../interfaces/tipostransaccion';

@Injectable({
  providedIn: 'root'
})
export class TipostransaccionService {

  
  baseUrl:string='https://localhost:7265/api/TipoTransaccion/';

  constructor(private http:HttpClient) { }

  getTipotran(){
    return this.http.get(this.baseUrl);
  }

  creartipotrans(tipo: TipoTransaccion){
    return this.http.post(this.baseUrl,tipo)
  }
}
