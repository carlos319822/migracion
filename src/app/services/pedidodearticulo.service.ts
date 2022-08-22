import { Injectable } from '@angular/core';
import { Pedidodearticulo } from '../interfaces/pedidodearticulo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PedidoFiltros } from '../interfaces/pedidofiltros';

@Injectable({
  providedIn: 'root'
})
export class PedidodearticuloService {

  baseUrl: string ='https://localhost:7265/api/Pedido/';

 

  constructor(private http: HttpClient) { }

  getPedidodearticulo(filtros: PedidoFiltros, codClave?:number){
    
    let auxURL: string = "PedidosByUser";
    
    if(codClave!=undefined){
      auxURL = auxURL + '?codClave='+codClave
    }

    return this.http.post(this.baseUrl+auxURL,filtros);
    /*return this.listPedidos.slice();

    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.get(this.baseUrl, {headers:headers});*/
  }

  eliminarPedido(index:number){
    
  }

  crearpedido(pedido: Pedidodearticulo){
    return this.http.post(this.baseUrl, pedido);
  }


  actualizarPedido(id_pedido:number,pedido:Pedidodearticulo){
    return this.http.put(this.baseUrl+id_pedido, pedido);
  }

}
