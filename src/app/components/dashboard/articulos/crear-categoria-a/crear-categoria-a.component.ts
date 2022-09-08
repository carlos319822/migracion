import { Component, OnInit } from '@angular/core';
import { ControlStockDTO } from '../../../../interfaces/controldestock';
import { CategoriaDTO } from '../../../../interfaces/categoriaArticulos';
import { CategoriaArticulosService } from '../../../../services/categoria-articulos.service';
import { Router } from '@angular/router';

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

  constructor(private service:CategoriaArticulosService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.model)

    this.service.crearCategoria(this.model).subscribe((data:any)=>{
      alert("Categoria Creada");
      this.router.navigate(['/dashboard/articulos'])
    })

  }

}
