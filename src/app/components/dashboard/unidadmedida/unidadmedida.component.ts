import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UnidadmedidaService } from '../../../services/unidadmedida.service';
import { MatTableDataSource } from '@angular/material/table';
import { UnidadMedida } from 'src/app/interfaces/unidad-medida';

@Component({
  selector: 'app-unidadmedida',
  templateUrl: './unidadmedida.component.html',
  styleUrls: ['./unidadmedida.component.css']
})
export class UnidadmedidaComponent implements OnInit {

  dataSource: any=[];

  displayedColumns: string[] = ['codigo','unidad','descripcion','acciones'];
 
  //dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  model:UnidadMedida={
    cod_und_medida: '',
    des_und_medida: '',
    obs: ''
  }

  constructor(private service: UnidadmedidaService) { }

  ngOnInit(): void {
    this.service.getUnidad().subscribe((data:any)=>{
      this.dataSource=new MatTableDataSource<UnidadMedida>(data.result as UnidadMedida[]);
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
