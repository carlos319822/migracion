import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-controlstocks',
  templateUrl: './controlstocks.component.html',
  styleUrls: ['./controlstocks.component.css']
})
export class ControlstocksComponent implements OnInit {



  displayedColumns: string[] = ['articulo', 'cantidadfisica','cantidadreal','cantidadmin' ,'precioreferencial', 'observacion','almacen'];
 
  dataSource! : MatTableDataSource<any>;

  constructor() { }

  ngOnInit(): void {
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
