import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Detpedidoin } from '../interfaces/detpedidoin';

@Injectable({
  providedIn: 'root'
})
export class DetPedidoService {

  baseUrl: string ='https://localhost:7265/api/DetPedido';

 

  constructor(private http: HttpClient) { }

  getDetPedido(){


    return this.http.get(this.baseUrl);
    
  }

  eliminarPedido(index:number){
    
  }

  crearpedido(pedido: Detpedidoin ){
    return this.http.post(this.baseUrl, pedido);
  }

}