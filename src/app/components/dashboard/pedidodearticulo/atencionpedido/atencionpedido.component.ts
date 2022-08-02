import { Component, OnInit, ViewChild } from '@angular/core';
import { Atencionpedido } from 'src/app/interfaces/atencionpedido';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';






 


@Component({
  selector: 'app-atencionpedido',
  templateUrl: './atencionpedido.component.html',
  styleUrls: ['./atencionpedido.component.css']
})
export class AtencionpedidoComponent implements OnInit {

  listAtencion: Atencionpedido[] = [
    {motivo:'Se necesita papel', pedido_para:'Se necesita',fecha_pedido:'12/20/2012',estado:'no autorizado' ,Observaciones:'asdafd'},
    {motivo:'Se necesita papel', pedido_para:'Se necesita',fecha_pedido:'12/20/2012',estado:'no autorizado' ,Observaciones:'asdafd'},
    {motivo:'Se necesita papel', pedido_para:'Se necesita',fecha_pedido:'12/20/2012',estado:'no autorizado' ,Observaciones:'asdafd'},
    {motivo:'Se necesita papel', pedido_para:'Se necesita',fecha_pedido:'12/20/2012',estado:'no autorizado' ,Observaciones:'asdafd'},
    {motivo:'Se necesita papel', pedido_para:'Se necesita',fecha_pedido:'12/20/2012',estado:'no autorizado' ,Observaciones:'asdafd'},
    {motivo:'probetas', pedido_para:'Se necesita',fecha_pedido:'12/20/2012',estado:'no autorizado' ,Observaciones:'asdafd'},
    {motivo:'Se necesita papel', pedido_para:'Se necesita',fecha_pedido:'12/20/2012',estado:'no autorizado' ,Observaciones:'asdafd'},
    {motivo:'Se necesita papel', pedido_para:'Se necesita',fecha_pedido:'12/20/2012',estado:'no autorizado' ,Observaciones:'asdafd'},
    {motivo:'Se necesita papel', pedido_para:'Se necesita',fecha_pedido:'12/20/2012',estado:'no autorizado' ,Observaciones:'asdafd'},
    {motivo:'Se necesita papel', pedido_para:'Se necesita',fecha_pedido:'12/20/2012',estado:'no autorizado' ,Observaciones:'asdafd'},
    {motivo:'Se necesita papel', pedido_para:'Se necesita',fecha_pedido:'12/20/2012',estado:'no autorizado' ,Observaciones:'asdafd'},
    {motivo:'Se necesita papel', pedido_para:'Se necesita',fecha_pedido:'12/20/2012',estado:'no autorizado' ,Observaciones:'asdafd'},
  ];


  displayedColumns: string[] = ['motivo', 'pedido_para', 'fecha_pedido','estado','Observaciones','acciones'];
  
  dataSource = new MatTableDataSource(this.listAtencion);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
