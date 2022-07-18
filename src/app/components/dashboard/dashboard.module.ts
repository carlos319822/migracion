import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard.component';
import { PedidodearticuloComponent } from './pedidodearticulo/pedidodearticulo.component';
import { AtenciondepedidoComponent } from './atenciondepedido/atenciondepedido.component';
import { DelegarautoridadComponent } from './delegarautoridad/delegarautoridad.component';
import { CrearPedidoComponent } from './pedidodearticulo/crear-pedido/crear-pedido.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    PedidodearticuloComponent,
    AtenciondepedidoComponent,
    DelegarautoridadComponent,
    CrearPedidoComponent
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    
  ],
  
})
export class DashboardModule { }
