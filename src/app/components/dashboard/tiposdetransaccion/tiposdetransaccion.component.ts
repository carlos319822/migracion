import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TipoTransaccion } from 'src/app/interfaces/tipostransaccion';
import { TipostransaccionService } from 'src/app/services/tipostransaccion.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tiposdetransaccion',
  templateUrl: './tiposdetransaccion.component.html',
  styleUrls: ['./tiposdetransaccion.component.css']
})
export class TiposdetransaccionComponent implements OnInit {

  dataSource: any=[];

  displayedColumns: string[] = ['codigo','descripcion','ingreso','acciones'];
 
  //dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  model:TipoTransaccion={
    cod_tipo_transaccion: '',
    descripcion: '',
    ingreso: false
  }

  constructor(private service:TipostransaccionService) { }

  ngOnInit(): void {

    this.service.getTipotran().subscribe((data:any)=>{
      this.dataSource=new MatTableDataSource<TipoTransaccion>(data.result as TipoTransaccion[]);
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
