import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlmacenService } from 'src/app/services/almacen.service';

@Component({
  selector: 'app-actualizar-almacen',
  templateUrl: './actualizar-almacen.component.html',
  styleUrls: ['./actualizar-almacen.component.css']
})
export class ActualizarAlmacenComponent implements OnInit {

  form:FormGroup;
  id:number;

  constructor(private fb:FormBuilder,
              private dialogRef:MatDialogRef<ActualizarAlmacenComponent>,
              @Inject (MAT_DIALOG_DATA) private data: {cod_almacen:number,nom_almacen:string,dir_almacen:string,tlf_almacen:string,obs:string,id:number,} 
              , private service:AlmacenService,
              private router: Router) { 
                this.id= data.id;
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
              this.form.value.id=this.id;
              this.service.actualizarAlmacen(this.id,this.form.value).subscribe((data)=>{
                this.router.navigate(['/dashboard']);
                window.location.reload();
              
              }
              
              );
              this.dialogRef.close();    
             }

  ngOnInit(): void {
  }

}
