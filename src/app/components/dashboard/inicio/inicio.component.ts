import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Almacenin } from 'src/app/interfaces/almacenin';
import { AlmacenService } from 'src/app/services/almacen.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']

  
})
export class InicioComponent implements OnInit {

  
  

  constructor() { }

  ngOnInit(): void {
    
  }

  

}
