import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtenciondepedidoComponent } from './atenciondepedido/atenciondepedido.component';
import { DashboardComponent } from './dashboard.component';
import { DelegarautoridadComponent } from './delegarautoridad/delegarautoridad.component';
import { InicioComponent } from './inicio/inicio.component';
import { PedidodearticuloComponent } from './pedidodearticulo/pedidodearticulo.component';

const routes: Routes = [
  {path:'',component:DashboardComponent, children:[
    {path:'',component: InicioComponent},
    {path:'pedidoarticulo',component: PedidodearticuloComponent},
    {path:'atencionpedido',component: AtenciondepedidoComponent},
    {path:'delegarautoridad',component: DelegarautoridadComponent},
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
