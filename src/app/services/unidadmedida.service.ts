import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UnidadMedida } from '../interfaces/unidad-medida';

@Injectable({
  providedIn: 'root'
})
export class UnidadmedidaService {
  
  baseUrl:string='https://localhost:7265/api/UnidadMedida/';

  constructor(private http:HttpClient) { }

  getUnidad(){
    return this.http.get(this.baseUrl)
  }

  crearUnidad(cod :UnidadMedida){
    return this.http.post(this.baseUrl,cod)
  }
}
