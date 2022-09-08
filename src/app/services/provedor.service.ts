import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProveedorDTO } from '../interfaces/provedor';

@Injectable({
  providedIn: 'root'
})
export class ProvedorService {

  baseUrl:string='https://localhost:7265/api/Proveedor/';
  

  constructor(private http:HttpClient) { }

  getProList():Observable<any[]>{
    return this.http.get<any>(this.baseUrl).pipe(map((data)=>data.result));
  }

  getPro(){
    return this.http.get(this.baseUrl);
  }

  crearPro(pro: ProveedorDTO){
    return this.http.post(this.baseUrl,pro)
  }
}
