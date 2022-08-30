import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ingresosalida',
  templateUrl: './ingresosalida.component.html',
  styleUrls: ['./ingresosalida.component.css']
})
export class IngresosalidaComponent implements OnInit {

 

  displayedColumns: string[] = ['motivo de solicitud', 'fecha pedido', 'estado', 'observaciones', 'acciones'];
 
  dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
  }

  actualizarpedido(){
    

  }

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarPedido(){
   

  }

}
