import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Pedidodearticulo } from 'src/app/interfaces/pedidodearticulo';
import { PedidodearticuloService } from '../../../services/pedidodearticulo.service';





@Component({
  selector: 'app-pedidodearticulo',
  templateUrl: './pedidodearticulo.component.html',
  styleUrls: ['./pedidodearticulo.component.css']
})
export class PedidodearticuloComponent implements OnInit {

  

  displayedColumns: string[] = ['motivo de solicitud', 'fecha pedido', 'estado', 'observaciones', 'acciones'];
 
  dataSource! : MatTableDataSource<any>;

  //@ViewChild(MatPaginator) paginator!: MatPaginator;
  //@ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar,private service:PedidodearticuloService) { }

  ngOnInit(): void {
    this.service.getPedidodearticulo().subscribe((data:any)=> {
      this.dataSource= new MatTableDataSource<Pedidodearticulo>(data.result as Pedidodearticulo[]);
      console.log(data);
    });
  }

  cargarPedidos(){
    /*this.service.getPedidodearticulo().subscribe((data:any)=>{
      this.dataSource= new MatTableDataSource<Pedidodearticulo>(data.result as Pedidodearticulo[]);
      console.log(data);
    });
    this.listPedidos=this._pedidodearticuloService.getPedidodearticulo();*/
    
  }

  actualizarpedido(pedido: Pedidodearticulo){
    console.log(pedido);

  }

 /* ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }*/

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
