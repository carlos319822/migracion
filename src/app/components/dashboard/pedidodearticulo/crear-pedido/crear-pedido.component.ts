
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


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
export class CrearPedidoComponent implements OnInit {

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


  
  constructor() { }

  

  ngOnInit(): void {
    
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  

}
