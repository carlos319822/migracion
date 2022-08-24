
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
import { UserService } from 'src/app/services/user.service';
import { AlmacenService } from '../../../../services/almacen.service';
import { Almacenin } from '../../../../interfaces/almacenin';
import { ArticuloService } from '../../../../services/articulo.service';
import { Articulo } from 'src/app/interfaces/articulo';
import { MatSort } from '@angular/material/sort';
import { User } from 'src/app/interfaces/user';


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
export class CrearPedidoComponent implements OnInit {

  model: Pedidodearticulo = {
    cod_clave: 0,
    cod_almacen: '',
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
  modelo: Almacenin={
    cod_almacen: '',
    nom_almacen: '',
    dir_almacen: '',
    tlf_almacen: '',
    obs: ''
  }

  

  name = new FormControl('')

 



  piso: any[] = ['Sotano', 'Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto', 'Sexto', 'Septimo', 'Otros']
  cargado: any[] = ['Despacho del Secretario General', 'Comité de Dirección', 'Cooperación Técnica', 'Estrategia y Gestión de la Cooperación Técnica Internacional',
    'Administración Financiera de la Cooperacion', 'Asesoría JurIdica', 'Reforma al Sistema deSolución de Controversias',
    'Tutoría', 'Comité de Perspectiva Política', 'Comité de Planeamiento Estratégico']
  


  displayedColumns: string[] = ['articulo', 'cantidad', 'observaciones','acciones'];
  dataSource = new MatTableDataSource()

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  AlmacenList:any;


  constructor(private service: PedidodearticuloService, private router: Router, private http: HttpClient,public auth: UserService,private SerA:AlmacenService,private Sera:ArticuloService) { }

  ListAlmacenes!:Almacenin[];
  ListArticulo!:Articulo[];
  almacenesSelect!: string;
  datoUsuario:any;

  

  

 ngOnInit(): void {
  this.LoadAlmacenes();
  this.LoadArticulo();
  this.obtener_cod();
  let cod:User;
  cod=JSON.parse(localStorage.getItem('user')!);

  this.model={...this.model,cod_clave:cod.cod_clave??0};


     
 }

 obtenerlocal(){

  let cod:User[];

  cod=JSON.parse(localStorage.getItem('user')!);
    this.model={...this.model,cod_clave:12345}
  console.log(cod);
 }

 grabarlocal(){
  let nombre:string="Fernando"

  let persona={
    nombre:"juan",
    edad:18,
    coords:{
      lat:10,
      lng:-10
    }
  }
  localStorage.setItem("nombre",nombre);
  localStorage.setItem("persona",JSON.stringify(persona));
 }

 

 private LoadAlmacenes(){
  this.SerA.getAlmList().subscribe(data=>{
    this.ListAlmacenes = data;
    console.log("Almacenes Loaded",this.ListAlmacenes);
  })
 }

 private LoadArticulo(){
  this.Sera.getArtList().subscribe(data=>{
    this.ListArticulo=data;

    
    
    console.log("Articulos Loaded",this.ListArticulo);
  })
 }


 

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
      this.router.navigate(['/dashboard/pedidoarticulo']);
    })

  }

  addArticulo(){
    console.log('adding..')

  }

  dropArticulos(){
    
  }

  actualizararticulo(){

  }

  eliminararticulo(){

  }




  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  obtener_cod(){

    let cod_clave=localStorage.getItem("cod_clave");
  }






}
