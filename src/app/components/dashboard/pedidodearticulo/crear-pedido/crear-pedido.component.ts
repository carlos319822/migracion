
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PedidodearticuloService } from '../../../../services/pedidodearticulo.service';
import { Router } from '@angular/router';
import { DetPedido, Pedidodearticulo } from 'src/app/interfaces/pedidodearticulo';
import { Detpedidoin } from '../../../../interfaces/detpedidoin';
import { DetPedidoService } from 'src/app/services/detpedido.service';
import { HttpClient } from '@angular/common/http';


export interface Articulos {
  articulo: string;
  cantidad: number;
  observaciones: string;
}


@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.component.html',
  styleUrls: ['./crear-pedido.component.css']
})
export class CrearPedidoComponent {

  model: Pedidodearticulo = {
    cod_clave: 0,
    cod_almacen: '',
    // fecha_pedido: '2019-01-06T17:16:40',
    fecha_pedido: new Date().toISOString(),
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

  name = new FormControl('')

  listaArticulos: Articulos[] = [
    { articulo: 'Papel Bound', cantidad: 5, observaciones: '...' },
    { articulo: 'tijeras', cantidad: 5, observaciones: '...' },
    { articulo: 'lapiceros', cantidad: 5, observaciones: '...' },
    { articulo: 'Abono', cantidad: 5, observaciones: '...' }
    
    

  ];



  piso: any[] = ['Sotano', 'Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto', 'Sexto', 'Septimo', 'Otros']
  cargado: any[] = ['Despacho del Secretario General', 'Comité de Dirección', 'Cooperación Técnica', 'Estrategia y Gestión de la Cooperación Técnica Internacional',
    'Administración Financiera de la Cooperacion', 'Asesoría JurIdica', 'Reforma al Sistema deSolución de Controversias',
    'Tutoría', 'Comité de Perspectiva Política', 'Comité de Planeamiento Estratégico']
  articulo: any[] = ['papel bound', 'abono', 'lapiceros']


  displayedColumns: string[] = ['articulo', 'cantidad', 'observaciones','acciones'];
  dataSource = new MatTableDataSource(this.listaArticulos)

  @ViewChild(MatPaginator) paginator!: MatPaginator;



  constructor(private service: PedidodearticuloService, private router: Router, private http: HttpClient) { }


  pedidoForm = new FormGroup({
    cod_clave: new FormControl('', Validators.required),
    cod_almacen: new FormControl('', Validators.required),
    piso_destino: new FormControl('', Validators.required),
    proc_destino: new FormControl('', Validators.required),
    prog_destino: new FormControl('', Validators.required),
    motivo_solicitud: new FormControl('', Validators.required),
    obs: new FormControl('', Validators.required),
    pedido_por: new FormControl('', Validators.required),
    cod_articulo: new FormControl('', Validators.required),
    cant_pedida: new FormControl('', Validators.required),
  })

  onSubmit() {

    this.model.detPedido.push(this.modeli)
    console.log(this.model)
    console.log(this.modeli)


    /*this.service.crearpedido(this.model).subscribe((data:any)=> {
      alert("Pedido Creado");
      this.router.navigate(['/pedidoarticulo']);
    })*/
    //this.services.crearpedido(this.modeli).subscribe((data:any)=>{});

    this.service.crearpedido(this.model).subscribe((data: any) => {
      alert("Pedido Creado");
      this.router.navigate(['/pedidoarticulo']);
    })

  }

  actualizararticulo(){

  }

  eliminararticulo(){
    
  }




  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }






}
