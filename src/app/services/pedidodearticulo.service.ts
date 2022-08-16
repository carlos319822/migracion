import { Injectable } from '@angular/core';
import { Pedidodearticulo } from '../interfaces/pedidodearticulo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PedidoFiltros } from '../interfaces/pedidofiltros';

@Injectable({
  providedIn: 'root'
})
export class PedidodearticuloService {

  baseUrl: string ='https://localhost:7265/api/Pedido/';

  /*listPedidos: Pedidodearticulo[] = [
    {motivodesolicitud: "Se necesita papel Bound", fechapedido: '9/9/2013', estado: "No Autorizado", observaciones: '...'},
    {motivodesolicitud: "Se necesita Cargador de Bateria", fechapedido: '8/2/2013', estado: "Enviado", observaciones: '...'},
    {motivodesolicitud: "Papel Bound", fechapedido: '9/24/2017', estado: "No Enviado", observaciones: '...'},
    {motivodesolicitud: "Papel Bound", fechapedido: '12/29/2027', estado: "No Enviado", observaciones: '...'},
    {motivodesolicitud: "Papel Bound", fechapedido: '5/20/2015', estado: "Autorizado", observaciones: '...'},
    {motivodesolicitud: "Papel Bound", fechapedido: '5/31/2015', estado: "Autorizado", observaciones: '...'},
    {motivodesolicitud: "Papel Bound", fechapedido: '2/29/2012', estado: "Recepcionado", observaciones: '...'},
    {motivodesolicitud: "Antorcha", fechapedido: '10/24/2018', estado: "Recepcionado", observaciones: '...'},
    {motivodesolicitud: "Papel Bound", fechapedido: '11/7/2017', estado: "Recepcionado", observaciones: '...'},
    {motivodesolicitud: "Papel Bound", fechapedido: '5/29/2017', estado: "Recepcionado", observaciones: '...'},
  ];*/

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
    /*this.listPedidos.splice(index,1);*/
    
  }

  crearpedido(pedido: Pedidodearticulo){
    return this.http.post(this.baseUrl, pedido);
  }


  actualizarPedido(id_pedido:number,pedido:Pedidodearticulo){
    return this.http.put(this.baseUrl+id_pedido, pedido);
  }

}
