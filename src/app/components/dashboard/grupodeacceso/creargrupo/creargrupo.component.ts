import { Component, OnInit } from '@angular/core';
import { GrupoAccesoDTO } from '../../../../interfaces/grupoacceso';
import { GrupoaccesoService } from '../../../../services/grupoacceso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creargrupo',
  templateUrl: './creargrupo.component.html',
  styleUrls: ['./creargrupo.component.css']
})
export class CreargrupoComponent implements OnInit {


  model:GrupoAccesoDTO={
    cod_grupo: '',
    descripcion: '',
  }

  constructor(private service:GrupoaccesoService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.model)

    this.service.crearGrupo(this.model).subscribe((data:any)=>{
      alert("Grupo Creado");
      this.router.navigate(['/dashboard/grupo-acceso'])
    })

  }

}
