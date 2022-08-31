import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard.component';
import { PedidodearticuloComponent } from './pedidodearticulo/pedidodearticulo.component';
import { DelegarautoridadComponent } from './delegarautoridad/delegarautoridad.component';
import { CrearPedidoComponent } from './pedidodearticulo/crear-pedido/crear-pedido.component';
import { AtencionpedidoComponent } from './pedidodearticulo/atencionpedido/atencionpedido.component';
import { ActualizarPedidoComponent } from './pedidodearticulo/actualizar-pedido/actualizar-pedido.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { ActualizarAlmacenComponent } from './almacen/actualizar-almacen/actualizar-almacen.component';
import { VerAlmacenComponent } from './almacen/ver-almacen/ver-almacen.component';

import {MatExpansionModule} from '@angular/material/expansion';

import { CrearAlmacenComponent } from './almacen/crear-almacen/crear-almacen.component';
import { AutorizarpedidoComponent } from './pedidodearticulo/atencionpedido/autorizarpedido/autorizarpedido.component';
import { IngresosalidaComponent } from './ingresosalida/ingresosalida.component';
import { CrearIngresoComponent } from './ingresosalida/crear-ingreso/crear-ingreso.component';
import { ControlstocksComponent } from './controlstocks/controlstocks.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { CrearCategoriaAComponent } from './articulos/crear-categoria-a/crear-categoria-a.component';




@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    PedidodearticuloComponent,
    DelegarautoridadComponent,
    CrearPedidoComponent,
    AtencionpedidoComponent,
    ActualizarPedidoComponent,
    ActualizarAlmacenComponent,
    CrearAlmacenComponent,
    VerAlmacenComponent,
    AlmacenComponent,
    AutorizarpedidoComponent,
    IngresosalidaComponent,
    CrearIngresoComponent,
    ControlstocksComponent,
    ArticulosComponent,
    CrearCategoriaAComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatExpansionModule
  ],

  entryComponents:[ActualizarPedidoComponent,CrearPedidoComponent,ActualizarAlmacenComponent,VerAlmacenComponent,CrearAlmacenComponent]
  
})
export class DashboardModule { }
