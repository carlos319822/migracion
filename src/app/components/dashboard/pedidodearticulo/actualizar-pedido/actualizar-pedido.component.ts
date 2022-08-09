import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PedidodearticuloService } from '../../../../services/pedidodearticulo.service';

@Component({
  selector: 'app-actualizar-pedido',
  templateUrl: './actualizar-pedido.component.html',
  styleUrls: ['./actualizar-pedido.component.css']
})
export class ActualizarPedidoComponent implements OnInit {


  form:FormGroup;
  id_pedido: number;

  constructor(private fb:FormBuilder,
              private dialogRef:MatDialogRef<ActualizarPedidoComponent>,
              @Inject (MAT_DIALOG_DATA) private data: {cod_almacen:string,autorizado:boolean,motivo_solicitud:string,piso_destino:string,fecha_pedido:Date,obs:string,pedido_por:string,id_pedido:number} 
              , private service:PedidodearticuloService,
              private router: Router) { 
                this.id_pedido= data.id_pedido;
                this.form=fb.group({
                  cod_almacen:[data.cod_almacen,Validators.required],
                  autorizado:[data.autorizado,Validators.required],
                  motivo_solicitud:[data.motivo_solicitud,Validators.required],
                  piso_destino:[data.piso_destino,Validators.required],
                  fecha_pedido:[data.fecha_pedido,Validators.required],
                  pedido_por:[data.pedido_por,Validators.required]
                  

                })
              }


             cerrar(){
              this.dialogRef.close();

             } 

             guardar(){
              this.form.value.id_pedido=this.id_pedido;
              this.service.actualizarPedido(this.id_pedido,this.form.value).subscribe((data)=>{
                this.router.navigate(['/pedidodearticulo']);
                window.location.reload();
              
              }
              
              );
              this.dialogRef.close();    
             }

  ngOnInit(): void {
  }

}
