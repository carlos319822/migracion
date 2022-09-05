import { Component, OnInit } from '@angular/core';
import { UnidadMedida } from 'src/app/interfaces/unidad-medida';

@Component({
  selector: 'app-crearunidad',
  templateUrl: './crearunidad.component.html',
  styleUrls: ['./crearunidad.component.css']
})
export class CrearunidadComponent implements OnInit {

  model:UnidadMedida={
    cod_und_medida: '',
    des_und_medida: '',
    obs: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
