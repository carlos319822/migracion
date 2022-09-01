import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlmacenComponent } from './almacen/almacen.component';
import { CrearAlmacenComponent } from './almacen/crear-almacen/crear-almacen.component';
import { VerAlmacenComponent } from './almacen/ver-almacen/ver-almacen.component';
import { ControlstocksComponent } from './controlstocks/controlstocks.component';
import { DashboardComponent } from './dashboard.component';
import { DelegarautoridadComponent } from './delegarautoridad/delegarautoridad.component';
import { CrearIngresoComponent } from './ingresosalida/crear-ingreso/crear-ingreso.component';
import { IngresosalidaComponent } from './ingresosalida/ingresosalida.component';
import { InicioComponent } from './inicio/inicio.component';
import { AtencionpedidoComponent } from './pedidodearticulo/atencionpedido/atencionpedido.component';
import { AutorizarpedidoComponent } from './pedidodearticulo/atencionpedido/autorizarpedido/autorizarpedido.component';
import { CrearPedidoComponent } from './pedidodearticulo/crear-pedido/crear-pedido.component';
import { PedidodearticuloComponent } from './pedidodearticulo/pedidodearticulo.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { CrearCategoriaAComponent } from './articulos/crear-categoria-a/crear-categoria-a.component';

const routes: Routes = [
  {path:'',component:DashboardComponent, children:[
    {path:'',component: InicioComponent},
    {path:'pedidoarticulo',component: PedidodearticuloComponent},
    {path:'delegarautoridad',component: DelegarautoridadComponent},
    {path:'crear-pedido',component: CrearPedidoComponent},
    {path:'atenciondepedido',component: AtencionpedidoComponent},
    {path:'crear-almacen',component: CrearAlmacenComponent},
    {path:'ver-almacen',component: VerAlmacenComponent},
    {path:'almacen',component: AlmacenComponent },
    {path:'autorizar-pedido',component: AutorizarpedidoComponent},
    {path:'ingresosalida',component:IngresosalidaComponent},
    {path:'ingreso-articulo',component:CrearIngresoComponent},
    {path:'control-stock',component:ControlstocksComponent},
    {path:'articulos',component:ArticulosComponent},
    {path:'crear-categoria',component:CrearCategoriaAComponent}

  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
