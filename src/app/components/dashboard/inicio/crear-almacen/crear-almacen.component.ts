import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Almacenin } from '../../../../interfaces/almacenin';
import { AlmacenService } from '../../../../services/almacen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-almacen',
  templateUrl: './crear-almacen.component.html',
  styleUrls: ['./crear-almacen.component.css']
})
export class CrearAlmacenComponent  {

  model: Almacenin={
    cod_almacen: '',
    nom_almacen: '',
    dir_almacen: '',
    tlf_almacen: '',
    obs: '',
    id: 0
  };

  constructor(private almacenService: AlmacenService, private router: Router) { }

  almacenForm=new FormGroup({
    codigo:new FormControl('',Validators.required),
    nombre:new FormControl('',Validators.required),
    direccion:new FormControl('',Validators.required),
    telefono:new FormControl('',Validators.required),
    observaciones:new FormControl('',Validators.required),
  })


  onSubmit(){
    console.log(this.model);
    //this.almacenService.crearalmacen(this.model).subscribe((response: Almacenin) => console.log(response));

    this.almacenService.crearalmacen(this.model).subscribe((data:any)=> {
      alert("Almacen Creado");
      this.router.navigate(['/dashboard']);
    })
  }

}
