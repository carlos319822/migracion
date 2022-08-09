import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DelegarautoridadComponent } from './delegarautoridad/delegarautoridad.component';
import { CrearAlmacenComponent } from './inicio/crear-almacen/crear-almacen.component';
import { InicioComponent } from './inicio/inicio.component';
import { VerAlmacenComponent } from './inicio/ver-almacen/ver-almacen.component';
import { AtencionpedidoComponent } from './pedidodearticulo/atencionpedido/atencionpedido.component';
import { CrearPedidoComponent } from './pedidodearticulo/crear-pedido/crear-pedido.component';
import { PedidodearticuloComponent } from './pedidodearticulo/pedidodearticulo.component';

const routes: Routes = [
  {path:'',component:DashboardComponent, children:[
    {path:'',component: InicioComponent},
    {path:'pedidoarticulo',component: PedidodearticuloComponent},
    {path:'delegarautoridad',component: DelegarautoridadComponent},
    {path:'crear-pedido',component: CrearPedidoComponent},
    {path:'atenciondepedido',component: AtencionpedidoComponent},
    {path:'crear-almacen',component: CrearAlmacenComponent},
    {path:'ver-almacen',component: VerAlmacenComponent}

  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
