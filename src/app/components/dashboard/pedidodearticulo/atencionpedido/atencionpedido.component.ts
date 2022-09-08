import { Component, OnInit, ViewChild } from '@angular/core';
import { Atencionpedido } from 'src/app/interfaces/atencionpedido';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PedidoFiltros } from 'src/app/interfaces/pedidofiltros';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PedidodearticuloService } from 'src/app/services/pedidodearticulo.service';
import { MatDialog } from '@angular/material/dialog';
import { Pedidodearticulo } from 'src/app/interfaces/pedidodearticulo';
import { AutorizarpedidoComponent } from './autorizarpedido/autorizarpedido.component';






 


@Component({
  selector: 'app-atencionpedido',
  templateUrl: './atencionpedido.component.html',
  styleUrls: ['./atencionpedido.component.css']
})
export class AtencionpedidoComponent implements OnInit {

 
  panelOpenState = false;
  estados: string[] = [
    'Todo',
    'Enviado',
    'No Enviado'
    
  ];

  selectedEstado = this.estados[0];
  fechaIncio :Date = new Date;
  fechaFin :Date = new Date;
  filtros : PedidoFiltros = {

  }


  displayedColumns: string[] = ['motivo de solicitud', 'fecha pedido', 'estado', 'observaciones', 'acciones'];
 
  dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar,private service:PedidodearticuloService, private dialog:MatDialog) { 
    this.filtros.estado = undefined;
    this.filtros.fechaIni = undefined;
    this.filtros.fechaFin = undefined;
  }

  ngOnInit(): void {
    this.cargarPedidos();
  }

  buscarFiltros(){
    if(this.selectedEstado == this.estados[0])
      this.filtros.estado = undefined;
    if(this.selectedEstado == this.estados[1])
      this.filtros.estado = true;
    if(this.selectedEstado == this.estados[2])
      this.filtros.estado = false;
    
    if(this.fechaFin!=undefined && this.fechaIncio != undefined){
      if(this.fechaFin.getTime() -this.fechaIncio.getTime() != 0){
        this.filtros.fechaIni = this.fechaIncio.toISOString();
        this.filtros.fechaFin = this.fechaFin.toISOString();
      }else
      {
        this.filtros.fechaIni = undefined;
        this.filtros.fechaFin = undefined;
      }
    }else{
      this.filtros.fechaIni = undefined;
      this.filtros.fechaFin = undefined;
    }    
    
    this.cargarPedidos();

  }

  cargarPedidos(){
    this.service.getPedidodearticulo(this.filtros).subscribe((data:any)=> {
      this.dataSource= new MatTableDataSource<Pedidodearticulo>(data.result.result as Pedidodearticulo[]);
      
      });
  }

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  actualizarpedido(pedido: Pedidodearticulo){
    console.log(pedido);

    
  }
  autorizarpedido(pedido: Pedidodearticulo){
    console.log(pedido);

    
    
  }

}
