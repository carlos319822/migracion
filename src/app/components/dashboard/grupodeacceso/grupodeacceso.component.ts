import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { GrupoClave } from 'src/app/interfaces/user';
import { GrupoaccesoService } from '../../../services/grupoacceso.service';
import { GrupoAccesoDTO } from '../../../interfaces/grupoacceso';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-grupodeacceso',
  templateUrl: './grupodeacceso.component.html',
  styleUrls: ['./grupodeacceso.component.css']
})
export class GrupodeaccesoComponent implements OnInit {


  dataSource: any=[];

  displayedColumns: string[] = ['grupo','descripcion','acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  model:GrupoAccesoDTO={
    cod_Grupo: '',
    descripcion: ''
  }
 

  constructor(private service:GrupoaccesoService) { }

  ngOnInit(): void {
    this.service.getGrupo().subscribe((data:any)=>{
      this.dataSource=new MatTableDataSource<GrupoAccesoDTO>(data.result as GrupoAccesoDTO[]);
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
