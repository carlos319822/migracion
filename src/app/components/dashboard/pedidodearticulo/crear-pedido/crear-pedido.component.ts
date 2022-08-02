
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PedidodearticuloService } from '../../../../services/pedidodearticulo.service';
import { Router } from '@angular/router';


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


  
  constructor(private service: PedidodearticuloService, private router:Router ) { }


  pedidoForm= new FormGroup({
    motivo_solicitud: new FormControl('',Validators.required),
    piso_destino: new FormControl('',Validators.required),
    Obs: new FormControl('',Validators.required),
    obser: new FormControl('',Validators.required),
    cantidad: new FormControl('',Validators.required),
    cargado_pro: new FormControl('',Validators.required),
    articulo: new FormControl('',Validators.required),
  })

  onSubmit(){
    console.log(this.pedidoForm.value);

    this.service.crearpedido(this.pedidoForm.value).subscribe((data:any)=> {
      alert("Pedido Creado");
      this.router.navigate(['/pedidoarticulo']);
    })

  }

  

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  

}
