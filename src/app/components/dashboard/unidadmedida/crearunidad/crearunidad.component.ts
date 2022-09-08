import { Component, OnInit } from '@angular/core';
import { UnidadMedida } from 'src/app/interfaces/unidad-medida';
import { UnidadmedidaService } from '../../../../services/unidadmedida.service';
import { Router } from '@angular/router';

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

  constructor(private service:UnidadmedidaService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.model)

    this.service.crearUnidad(this.model).subscribe((data:any)=>{
      alert("Unidad de Medida Creada");
      this.router.navigate(['/dashboard/unidadmedida'])
    })

  }

}
