import { Component, OnInit } from '@angular/core';
import { TipoTransaccion } from 'src/app/interfaces/tipostransaccion';

@Component({
  selector: 'app-creartipotra',
  templateUrl: './creartipotra.component.html',
  styleUrls: ['./creartipotra.component.css']
})
export class CreartipotraComponent implements OnInit {


  model:TipoTransaccion={
    cod_tipo_transaccion: '',
    descripcion: '',
    ingreso: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }
}
