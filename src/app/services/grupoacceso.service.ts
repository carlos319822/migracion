import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GrupoAcceso } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class GrupoaccesoService {

  
  baseUrl:string='https://localhost:7265/api/GrupoAcceso/';

  constructor(private http:HttpClient) { }


  getGrupo(){
    return this.http.get(this.baseUrl);
  }

  crearGrupo(cod:GrupoAcceso){
    return this.http.post(this.baseUrl,cod);
  }
}
