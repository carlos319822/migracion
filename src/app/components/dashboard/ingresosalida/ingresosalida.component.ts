import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DetIngresoSalidaDTO } from 'src/app/interfaces/IngresoSalida';
import { IngresoSalidaService } from 'src/app/services/ingreso-salida.service';

@Component({
  selector: 'app-ingresosalida',
  templateUrl: './ingresosalida.component.html',
  styleUrls: ['./ingresosalida.component.css']
})
export class IngresosalidaComponent implements OnInit {

 

  displayedColumns: string[] = ['transaccion', 'provedor','fechatransaccion','fechaproceso' ,'estado', 'acciones'];
 
  dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  model:DetIngresoSalidaDTO={
    id: 0,
    id_transaccion: 0,
    cod_articulo: 0,
    cant_articulo: 0,
    costo_unitario: 0,
    obs: '',
    fecha_vencimiento: new Date().toISOString(),
  }

  constructor(private service:IngresoSalidaService) { }

  ngOnInit(): void {

    this.service.getIngresoSalida().subscribe((data:any)=>{
      this.dataSource=new MatTableDataSource<DetIngresoSalidaDTO>(data.result as DetIngresoSalidaDTO[]);
    })
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
