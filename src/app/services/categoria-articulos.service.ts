import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriaDTO } from '../interfaces/categoriaArticulos';

@Injectable({
  providedIn: 'root'
})
export class CategoriaArticulosService {

  baseUrl: string ='https://localhost:7265/api/Categoria/';

  constructor(private http:HttpClient) { }


  getCategoria(){
    return this.http.get(this.baseUrl);
  }

  crearCategoria(categoria:CategoriaDTO){
    return this.http.post(this.baseUrl, categoria);
  }

  actualizarCategoria(cod_categoria:string,categoria:CategoriaDTO){
    return this.http.put(this.baseUrl+cod_categoria,categoria);
  }

}
