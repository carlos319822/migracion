import { Component, OnInit } from '@angular/core';
import { ControlStockDTO } from '../../../../interfaces/controldestock';
import { CategoriaDTO } from '../../../../interfaces/categoriaArticulos';

@Component({
  selector: 'app-crear-categoria-a',
  templateUrl: './crear-categoria-a.component.html',
  styleUrls: ['./crear-categoria-a.component.css']
})
export class CrearCategoriaAComponent implements OnInit {


  model:CategoriaDTO={
    cod_categoria: '',
    nom_categoria: '',
    des_categoria: '',
    obs: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
