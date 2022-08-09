import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Almacenin } from 'src/app/interfaces/almacenin';
import { AlmacenService } from 'src/app/services/almacen.service';
import { ActualizarAlmacenComponent } from './actualizar-almacen/actualizar-almacen.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { VerAlmacenComponent } from './ver-almacen/ver-almacen.component';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']

  
})
export class InicioComponent implements OnInit {

  
  dataSource: any=[];

  displayedColumns: string[] = ['codigo', 'nombre', 'direccion','telefono' ,'observaciones','acciones'];
 
  //dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service:AlmacenService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.service.getAlmacen().subscribe((data:any)=> {
      this.dataSource= new MatTableDataSource<Almacenin>(data.result as Almacenin[]);
      console.log(data);
    });
  }

  actualizaralmacen(almacen: Almacenin){
    console.log(almacen);

    this.dialog.open(ActualizarAlmacenComponent, {
      data:{

        
        cod_almacen:almacen.cod_almacen,
        nom_almacen:almacen.nom_almacen,
        dir_almacen:almacen.dir_almacen,
        tlf_almacen:almacen.tlf_almacen,
        obs:almacen.obs

      }
    })

  }

  veralmacen(almacen: Almacenin){
    console.log(almacen);

    this.dialog.open(VerAlmacenComponent, {
      data:{

        
        cod_almacen:almacen.cod_almacen,
        nom_almacen:almacen.nom_almacen,
        dir_almacen:almacen.dir_almacen,
        tlf_almacen:almacen.tlf_almacen,
        obs:almacen.obs

      }
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  

}
