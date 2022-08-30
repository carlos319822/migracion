import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/interfaces/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-crear-ingreso',
  templateUrl: './crear-ingreso.component.html',
  styleUrls: ['./crear-ingreso.component.css']
})
export class CrearIngresoComponent implements OnInit {

  constructor(private Sera:ArticuloService) { }

  ListArticulo!:Articulo[];

  ngOnInit(): void {
    
  this.LoadArticulo();
  }

  private LoadArticulo(){
    this.Sera.getArtList().subscribe(data=>{
      this.ListArticulo=data;
       
      //console.log("Articulos Loaded",this.ListArticulo);
    })
   }


  onSubmit() {

   

}
addArticulo(){

}

dropArticulos(){
    
  
}

}
