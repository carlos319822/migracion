import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Almacenin } from 'src/app/interfaces/almacenin';
import { AlmacenService } from 'src/app/services/almacen.service';

@Component({
  selector: 'app-crear-almacen',
  templateUrl: './crear-almacen.component.html',
  styleUrls: ['./crear-almacen.component.css']
})
export class CrearAlmacenComponent  {

  constructor(private service:AlmacenService,public dialogRef:MatDialogRef<CrearAlmacenComponent>){

  }

 

  /*form:FormGroup;
  cod_almacen:string;

  constructor(private fb:FormBuilder,
              private dialogRef:MatDialogRef<CrearAlmacenComponent>,
              @Inject (MAT_DIALOG_DATA) private data: {cod_almacen:string,nom_almacen:string,dir_almacen:string,tlf_almacen:string,obs:string} 
              , private service:AlmacenService,
              private router: Router) { 
                this.cod_almacen= data.cod_almacen;
                this.form=fb.group({
                  cod_almacen:[data.cod_almacen,Validators.required],
                  nom_almacen:[data.nom_almacen,Validators.required],
                  dir_almacen:[data.dir_almacen,Validators.required],
                  tlf_almacen:[data.tlf_almacen,Validators.required],
                  obs:[data.obs,Validators.required],
                  

                })
              }


             cerrar(){
              this.dialogRef.close();

             } 

             guardar(){

             
              this.form.value.cod_almacen=this.cod_almacen;
              this.service.actualizarAlmacen(this.cod_almacen,this.form.value).subscribe((data)=>{
                this.router.navigate(['/dashboard']);
                window.location.reload();
              
              }
              
              );
              this.dialogRef.close();    
             }


             


 /* model: Almacenin={
    cod_almacen: '',
    nom_almacen: '',
    dir_almacen: '',
    tlf_almacen: '',
    obs: ''
  };

  constructor(private almacenService: AlmacenService, private router: Router,
              ) { }

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
      this.router.navigate(['/dashboard/almacen']);
    })
  }*/
}
