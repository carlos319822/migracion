import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/interfaces/articulo';
import { ProveedorDTO } from 'src/app/interfaces/provedor';
import { TipoTransaccion } from 'src/app/interfaces/tipostransaccion';
import { ArticuloService } from 'src/app/services/articulo.service';
import { TipostransaccionService } from 'src/app/services/tipostransaccion.service';
import { ProvedorService } from '../../../../services/provedor.service';

@Component({
  selector: 'app-crear-ingreso',
  templateUrl: './crear-ingreso.component.html',
  styleUrls: ['./crear-ingreso.component.css']
})
export class CrearIngresoComponent implements OnInit {

  constructor(private Sera:ArticuloService,private servic:TipostransaccionService,private serv:ProvedorService) { }

  ListArticulo!:Articulo[];
  ListTipo!:TipoTransaccion[];
  ListPro!:ProveedorDTO[];

  ngOnInit(): void {
    
  this.LoadArticulo();
  this.LoadTipo();
  this.LoadPro();
  }

  private LoadArticulo(){
    this.Sera.getArtList().subscribe(data=>{
      this.ListArticulo=data;
       
      //console.log("Articulos Loaded",this.ListArticulo);
    })
   }


  private LoadTipo(){
    this.servic.getTipList().subscribe(data=>{
      this.ListTipo=data;
    })
  }

  private LoadPro(){
    this.serv.getProList().subscribe(data=>{
      this.ListPro=data;
    })
  }


  onSubmit() {

   

}
addArticulo(){

}

dropArticulos(){
    
  
}

}
