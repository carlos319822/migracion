import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Articulo } from 'src/app/interfaces/articulo';
import { ArticuloService } from '../../../services/articulo.service';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriaDTO } from 'src/app/interfaces/categoriaArticulos';
import { CategoriaArticulosService } from '../../../services/categoria-articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {


  dataSource: any=[];

  displayedColumns: string[] = ['codigo', 'nombre', 'descripcion','observaciones','acciones'];
 
  //dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  model:CategoriaDTO={
    obs: '',
    cod_categoria: '',
    nom_categoria: '',
    des_categoria: ''
  }

  constructor(private service:CategoriaArticulosService) { }

  ngOnInit(): void {
    this.service.getCategoria().subscribe((data:any)=>{
      this.dataSource=new MatTableDataSource<CategoriaDTO>(data.result as CategoriaDTO[]);

    })
  }

  actualizaralmacen(){
    

  }

  veralmacen(){
   

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
