import { Component, OnInit } from '@angular/core';
import { TipoTransaccion } from 'src/app/interfaces/tipostransaccion';
import { TipostransaccionService } from '../../../../services/tipostransaccion.service';
import { Router } from '@angular/router';

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

  constructor(private service:TipostransaccionService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.model)

    this.service.creartipotrans(this.model).subscribe((data:any)=>{
      alert("Tipo de Transaccion Creada");
      this.router.navigate(['/dashboard/tipo_transaccion'])
    })

  }
}
