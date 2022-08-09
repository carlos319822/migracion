import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { AlmacenService } from 'src/app/services/almacen.service';

@Component({
  selector: 'app-ver-almacen',
  templateUrl: './ver-almacen.component.html',
  styleUrls: ['./ver-almacen.component.css']
})
export class VerAlmacenComponent implements OnInit {

  form:FormGroup;
  cod_almacen:string;

  constructor(private fb:FormBuilder,
    private dialogRef:MatDialogRef<VerAlmacenComponent>,
    @Inject (MAT_DIALOG_DATA) private data: {cod_almacen:string,nom_almacen:string,dir_almacen:string,tlf_almacen:string,obs:string,id:number,} 
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

  


 

  ngOnInit(): void {
    /*this.id=this.router.snapshot.paramMap.get('id');
    this.service.getAlmacen(this.id).subscribe((data:any)=>{
    console.log(data);
    
    this.almacen.cod_almacen=data.result.cod_almacen;
    this.almacen.nom_almacen=data.result.nom_almacen;
    this.almacen.dir_almacen=data.result.dir_almacen;
    this.almacen.tlf_almacen=data.result.tlf_almacen;
    this.almacen.obs=data.result.obs;
    }
    )*/
  }

  

}
