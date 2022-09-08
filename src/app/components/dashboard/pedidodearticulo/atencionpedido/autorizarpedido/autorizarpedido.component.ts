import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Almacenin } from 'src/app/interfaces/almacenin';
import { DetPedido, Pedidodearticulo } from 'src/app/interfaces/pedidodearticulo';
import { AlmacenService } from 'src/app/services/almacen.service';
import { ArticuloService } from 'src/app/services/articulo.service';
import { DetPedidoService } from 'src/app/services/detpedido.service';
import { PedidodearticuloService } from 'src/app/services/pedidodearticulo.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-autorizarpedido',
  templateUrl: './autorizarpedido.component.html',
  styleUrls: ['./autorizarpedido.component.css']

})





export class AutorizarpedidoComponent implements OnInit {



  model: Pedidodearticulo = {
    cod_clave: 0,
    cod_almacen: '',
    fecha_pedido: new Date().toISOString(),
    fecha_despacho: new Date().toISOString(),
    fecha_entrega: new Date().toISOString(),
    piso_destino: '',
    proc_destino: '',
    prog_destino: '',
    proy_destino: '',
    motivo_solicitud: '',
    autorizado: false,
    urgente: false,
    recepcionado: false,
    enviado: false,
    obs: '',
    atendido: false,
    pedido_por: '',
    detPedido: [],
  }

  modeli: DetPedido = {
    cod_articulo:       0,
    cant_pedida:        0,
    cant_aceptada:      0,
    cant_entregada:     0,
    cant_por_entregar:  0,
    costo_cant_entrega: 0,
    pedido_para_compra: false,
    autoriza_compra:    false,
    obs:                '',
  }
  modelo: Almacenin={
    cod_almacen: '',
    nom_almacen: '',
    dir_almacen: '',
    tlf_almacen: '',
    obs: ''
  }

  id!:number;


  displayedColumns: string[] = ['motivo de solicitud', 'fecha pedido', 'estado', 'observaciones'];

  dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

 

  

  constructor(private service: PedidodearticuloService, private router: Router, private http: HttpClient,public auth: UserService,private SerA:AlmacenService,private Sera:ArticuloService,
    private det:DetPedidoService,private route:ActivatedRoute) { }

  ngOnInit(){

   /* this.id=this.route.snapshot.paramMap.get('id');
    this.service.getPedido(this.id).subscribe((data:any)=>{
      console.log(data);
    })
    */
  
  }

  

  obj(pedido: Pedidodearticulo){
    console.log(pedido);
    

  }

  

}
