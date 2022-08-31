import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngresoSalidaService {

  baseUrl: string ='https://localhost:7265/api/DetIngresoSalida/';

  constructor(private http:HttpClient) { }

  getIngresoSalida(){
    return this.http.get(this.baseUrl);
  }

  crearIngresoSalida(){
  }


}
