
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PedidodearticuloService } from '../../../../services/pedidodearticulo.service';
import { Router } from '@angular/router';
import { Pedidodearticulo } from 'src/app/interfaces/pedidodearticulo';
import { Detpedidoin } from '../../../../interfaces/detpedidoin';
import { DetPedidoService } from 'src/app/services/detpedido.service';
import { HttpClient } from '@angular/common/http';


export interface Articulos {
  articulo:string;
  cantidad:number;
  observaciones:string;
}


@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.component.html',
  styleUrls: ['./crear-pedido.component.css']
})
export class CrearPedidoComponent  {

  /*model: Pedidodearticulo={
    id_pedido: 0, cod_clave: 1, cod_almacen: 0, proc_destino: '', prog_destino: '', obs: '', pedido_por: '',
    motivo_solicitud: '',
    fecha_pedido: Date,
    autorizado: false,
    piso_destino: '',
    cod_articulo: 1,
    cant_pedida: 1
  }*/

  modeli: Detpedidoin={
    cod_articulo:1,
    cant_pedida:0,
    obs:'',
  }

  name = new FormControl('')

  listaArticulos: Articulos[] = [
    {articulo:'Papel Bound', cantidad: 5, observaciones:'...'},
    {articulo:'tijeras', cantidad: 5, observaciones:'...'},
    {articulo:'lapiceros', cantidad: 5, observaciones:'...'},
    {articulo:'Abono', cantidad: 5, observaciones:'...'},
    {articulo:'Probetas', cantidad: 5, observaciones:'...'},
    {articulo:'caminos', cantidad: 5, observaciones:'...'},
    {articulo:'Papel Bound', cantidad: 5, observaciones:'...'},
    {articulo:'Papel Bound', cantidad: 5, observaciones:'...'},
    {articulo:'Papel Bound', cantidad: 5, observaciones:'...'},
    {articulo:'Papel Bound', cantidad: 5, observaciones:'...'},
    
  ];



  piso: any []=['Sotano','Primero','Segundo','Tercero','Cuarto','Quinto','Sexto','Septimo','Otros']
  cargado: any []=['Despacho del Secretario General','Comité de Dirección','Cooperación Técnica','Estrategia y Gestión de la Cooperación Técnica Internacional',
  'Administración Financiera de la Cooperacion','Asesoría JurIdica','Reforma al Sistema deSolución de Controversias',
  'Tutoría','Comité de Perspectiva Política','Comité de Planeamiento Estratégico']
  articulo: any []=['papel bound','abono','lapiceros']


  displayedColumns: string[] = ['articulo','cantidad','observaciones'];
  dataSource = new MatTableDataSource(this.listaArticulos)

  @ViewChild(MatPaginator) paginator!: MatPaginator ;


  
  constructor(private service: PedidodearticuloService, private router:Router, private services:DetPedidoService, private http: HttpClient ) { }


  pedidoForm= new FormGroup({
    cod_clave: new FormControl('',Validators.required),
    cod_almacen: new FormControl('',Validators.required),
    piso_destino: new FormControl('',Validators.required),
    proc_destino: new FormControl('',Validators.required),
    prog_destino: new FormControl('',Validators.required),
    motivo_solicitud: new FormControl('',Validators.required),
    obs: new FormControl('',Validators.required),
    pedido_por: new FormControl('',Validators.required),
    cod_articulo: new FormControl('',Validators.required),
    cant_pedida: new FormControl('',Validators.required),
  })

  onSubmit(){

   //console.log(this.model)
    //console.log(this.modeli)


    /*this.service.crearpedido(this.model).subscribe((data:any)=> {
      alert("Pedido Creado");
      this.router.navigate(['/pedidoarticulo']);
    })*/
    //this.services.crearpedido(this.modeli).subscribe((data:any)=>{});

    this.service.crearpedido(this.pedidoForm.value).subscribe((data:any)=> {
      alert("Pedido Creado");
      this.router.navigate(['/pedidoarticulo']);
    })

  }

  

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  


  

}
