import { Injectable } from '@angular/core';
import { Pedidodearticulo } from '../interfaces/pedidodearticulo';

@Injectable({
  providedIn: 'root'
})
export class PedidodearticuloService {

  listPedidos: Pedidodearticulo[] = [
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
  ];

  constructor() { }

  getPedidodearticulo(){
    return this.listPedidos.slice();
  }

  eliminarPedido(index:number){
    this.listPedidos.splice(index,1);
    
  }

}
