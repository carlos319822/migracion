import { Component, OnInit } from '@angular/core';
import { GrupoAccesoDTO } from '../../../../interfaces/grupoacceso';

@Component({
  selector: 'app-creargrupo',
  templateUrl: './creargrupo.component.html',
  styleUrls: ['./creargrupo.component.css']
})
export class CreargrupoComponent implements OnInit {


  model:GrupoAccesoDTO={
    cod_Grupo: '',
    descripcion: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
