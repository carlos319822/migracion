
import { Component, OnInit, ViewChild, NgModule, ElementRef, Renderer2 } from '@angular/core';
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


  @ViewChild('modalBack' )modalBack!: ElementRef;
  public show=false;
  

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

    piso: any[] = ['Sotano', 'Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto', 'Sexto', 'Septimo', 'Otros']
  
    
    dataSource = new MatTableDataSource()
  displayedColumns: string[] = ['articulo', 'cantidad', 'observaciones'];
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  AlmacenList:any;

  articulos:DetPedido[]=[];
  ngModel: any;

  adart:DetPedido[]=[];

  art!:DetPedido[];
 


  /*adart={cod_articulo: 11,
    cant_pedida: 1,
    cant_aceptada: 0,
    cant_entregada: 0,
    cant_por_entregar: 0,
    costo_cant_entrega: 0,
    pedido_para_compra: false,
    autoriza_compra: false,
    obs: ''}*/

   // arr= Object.entries(this.adart);

  constructor(private service: PedidodearticuloService, private router: Router, private http: HttpClient,public auth: UserService,private SerA:AlmacenService,private Sera:ArticuloService,
    private det:DetPedidoService,private renderer:Renderer2) { 
    
      this.renderer.listen('window','click',(e:Event)=>{
        if(this.modalBack && e.target === this.modalBack.nativeElement){
          this.show=false;
          console.log('click');
        }
        
      })
     
      
  }

  ListAlmacenes!:Almacenin[];
  ListArticulo!:Articulo[];
  almacenesSelect!: string;
  datoUsuario:any;

  

  

 ngOnInit(): void {
  this.LoadAlmacenes();
  this.LoadArticulo();
  this.llenatable();

  //tomar codigo clave automatico
  let cod:User;
  cod=JSON.parse(localStorage.getItem('user')!);

  this.model={...this.model,cod_clave:cod.cod_clave??0};

//tomar los datos de los articulos

  
  
     
 }

 obtenerlocal(){

  let cod:User[];

  cod=JSON.parse(localStorage.getItem('user')!);
    this.model={...this.model,cod_clave:12345}
  console.log(cod);
 }

 llenatable(){

  //this.det.getarticulos();
  this.articulos=this.det.getarticulos();

  
 }

 

 private LoadAlmacenes(){
  this.SerA.getAlmList().subscribe(data=>{
    this.ListAlmacenes = data;
    //console.log("Almacenes Loaded",this.ListAlmacenes);
  })
 }

 private LoadArticulo(){
  this.Sera.getArtList().subscribe(data=>{
    this.ListArticulo=data;
     
    //console.log("Articulos Loaded",this.ListArticulo);
  })
 }


  onSubmit() {

    this.model.detPedido = this.adart
    console.log(this.model)
    // console.log(this.modeli)


    /*this.service.crearpedido(this.model).subscribe((data:any)=> {
      alert("Pedido Creado");
      this.router.navigate(['/pedidoarticulo']);
    })*/
    //this.services.crearpedido(this.modeli).subscribe((data:any)=>{});

    this.service.crearpedido(this.model).subscribe((data: any) => {
      alert("Pedido Creado");
      /*this.router.navigate(['/dashboard/pedidoarticulo']);*/
      this.show=false;
      window.location.reload();

    })



  }

  addArticulo(){


    this.det.addarticulo(this.modeli)
    
    this.adart.push({
      cod_articulo: this.modeli.cod_articulo,
      cant_pedida: this.modeli.cant_pedida,
      cant_aceptada: this.modeli.cant_aceptada,
      cant_entregada: this.modeli.cant_entregada,
      cant_por_entregar: this.modeli.cant_por_entregar,
      costo_cant_entrega: this.modeli.costo_cant_entrega,
      pedido_para_compra: this.modeli.pedido_para_compra,
      autoriza_compra: this.modeli.autoriza_compra,
      obs: this.modeli.obs
    })

    console.log(this.adart);
  
  return false;


  }
  

  dropArticulos(){
    
    
    localStorage.removeItem('articulos');
    window.location.reload();
    
  }

  actualizararticulo(){

  }

  eliminararticulo(){

  }




  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  showModal(){
    this.show=true;
  }

  hideModal(){
    this.show=false;
  }






}
