import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Pedidodearticulo } from 'src/app/interfaces/pedidodearticulo';
import { PedidoFiltros } from 'src/app/interfaces/pedidofiltros';
import { PedidodearticuloService } from '../../../services/pedidodearticulo.service';
import { ActualizarPedidoComponent } from './actualizar-pedido/actualizar-pedido.component';



@Component({
  selector: 'app-pedidodearticulo',
  templateUrl: './pedidodearticulo.component.html',
  styleUrls: ['./pedidodearticulo.component.css']
})
export class PedidodearticuloComponent implements OnInit {
  
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

  actualizarpedido(pedido: Pedidodearticulo){
    console.log(pedido);

    this.dialog.open(ActualizarPedidoComponent, {
      data:{

        almacen: pedido.cod_almacen,
        autorizado: pedido.autorizado,
        motivo_solicitud: pedido.motivo_solicitud,
        fecha_pedido:pedido.fecha_pedido,
        obs: pedido.obs,
        pedido_por: pedido.pedido_por,
        piso_destino: pedido.piso_destino,

      }
    })

  }

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarPedido(index: number){
    console.log(index);

    this.service.eliminarPedido(index);
    this.cargarPedidos();

    this._snackBar.open('El Pedido fue eliminado con exito','',{
      duration:1500,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })

  }

}
