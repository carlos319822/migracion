import { Almacenin } from "./almacenin";
import { Detpedidoin } from "./detpedidoin";
import { DatePipe } from '@angular/common'


export interface Pedidodearticulo{
    id_pedido: number;
    cod_clave: number;
    cod_almacen: string;
    fecha_pedido: String ;
    //fecha_entrega: Date;
    //fecha_despacho: Date;
    piso_destino: string;
    proc_destino: string;
    prog_destino: string;
    proy_destino: string;
    motivo_solicitud: string;
    autorizado: boolean;
    urgente: boolean;
    recepcionado: boolean;
    enviado: boolean;
    obs: string;
    atendido: boolean;
    pedido_por: string;
    //almacen: Almacenin;
    //grupoClave?: GrupoClave;
    //detpedido:Detpedidoin;


}