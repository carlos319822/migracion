import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DetPedido } from '../interfaces/pedidodearticulo';
import { Subject, Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetPedidoService {

  baseUrl: string ='https://localhost:7265/api/DetPedido';

 articulos!:DetPedido[];


  constructor(private http: HttpClient) {
    this.articulos=[];
    /*this.articulos=[{
      cod_articulo: 11,
      cant_pedida: 1,
      cant_aceptada: 0,
      cant_entregada: 0,
      cant_por_entregar: 0,
      costo_cant_entrega: 0,
      pedido_para_compra: false,
      autoriza_compra: false,
      obs: ''},
      {
        cod_articulo: 21,
        cant_pedida: 2,
        cant_aceptada: 0,
        cant_entregada: 0,
        cant_por_entregar: 0,
        costo_cant_entrega: 0,
        pedido_para_compra: false,
        autoriza_compra: false,
        obs: ''}];*/
   }

   

   getarticulos(){

    if(localStorage.getItem('articulos')===null){
      return this.articulos;
    }else{
      this.articulos=JSON.parse(localStorage.getItem('articulos')!);
     
      return this.articulos;
      
      
    }

    

   }
   addarticulo(articulo:DetPedido){
    this.articulos.push(articulo);

    let articulos=[];

    if(localStorage.getItem('articulos')===null){

      articulos.push(articulo);

    localStorage.setItem('articulos',JSON.stringify(articulos));
    }else{
      articulos=JSON.parse(localStorage.getItem('articulos')!);
      articulos.push(articulo);
      localStorage.setItem('articulos',JSON.stringify(articulos));
    }
    

    //this.articulos.push(articulo);

   }

   droparticulos(articulo:DetPedido){
    this.articulos.push(articulo);
   }

  getDetPedido(){


    return this.http.get(this.baseUrl);
    
  }

  eliminarPedido(index:number){
    
  }

  crearpedido(pedido: DetPedido ){
    return this.http.post(this.baseUrl, pedido);
  }

 

}