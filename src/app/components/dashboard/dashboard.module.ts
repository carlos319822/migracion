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
import { CrearAlmacenComponent } from './almacen/crear-almacen/crear-almacen.component';



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
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    
  ],

  entryComponents:[ActualizarPedidoComponent,CrearPedidoComponent,ActualizarAlmacenComponent,VerAlmacenComponent,CrearAlmacenComponent]
  
})
export class DashboardModule { }
