import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Almacenin } from 'src/app/interfaces/almacenin';
import { Articulo } from 'src/app/interfaces/articulo';
import { ControlStockDTO } from 'src/app/interfaces/controldestock';
import { ControldestockService } from 'src/app/services/controldestock.service';
import { ArticuloService } from '../../../services/articulo.service';

@Component({
  selector: 'app-controlstocks',
  templateUrl: './controlstocks.component.html',
  styleUrls: ['./controlstocks.component.css']
})
export class ControlstocksComponent implements OnInit {



  displayedColumns: string[] = ['articulo', 'cantidadfisica','cantidadreal','cantidadmin' ,'precioreferencial', 'observacion','almacen'];
 
  dataSource! : MatTableDataSource<any>;

  model:ControlStockDTO={
    id: 0,
    cod_almacen: '',
    cod_articulo: 0,
    cant_fisica: 0,
    cant_real: 0,
    cant_minima_reposicion: 0,
    obs: ''
  }

  modelo: Almacenin={
    cod_almacen: '',
    nom_almacen: '',
    dir_almacen: '',
    tlf_almacen: '',
    obs: ''
  }

  modeli:Articulo={
    cod_articulo: 0,
    cod_und_medida: '',
    cod_categoria: '',
    nom_articulo: '',
    des_articulo: '',
    perecible: false,
    ubicacion: '',
    estado: false,
    imagen: '',
    precio_promedio_ref: 0,
    precio_ultimo_ref: 0,
    obs: '',
    visible: false
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private servi:ControldestockService,private servic:ArticuloService) { }


  ListArticulo!:Articulo[];

  ngOnInit(): void {

    this.LoadArticulo();

    this.servi.getControlList().subscribe((data:any)=>{
      this.dataSource= new MatTableDataSource<ControlStockDTO>(data.result as ControlStockDTO[]);
      console.log(data);
    })

    
  }

  private LoadArticulo(){
    this.servic.getArtList().subscribe(data=>{
      this.ListArticulo=data;
       
      console.log("Articulos Loaded",this.ListArticulo);
    })
   }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  nombre(){
    
  }
}
