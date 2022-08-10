
// export interface Pedidodearticulo{
//     id_pedido: number;
//     cod_clave: number;
//     cod_almacen: string;
//     fecha_pedido: String ;
//     //fecha_entrega: Date;
//     //fecha_despacho: Date;
//     piso_destino: string;
//     proc_destino: string;
//     prog_destino: string;
//     proy_destino: string;
//     motivo_solicitud: string;
//     autorizado: boolean;
//     urgente: boolean;
//     recepcionado: boolean;
//     enviado: boolean;
//     obs: string;
//     atendido: boolean;
//     pedido_por: string;
//     //almacen: Almacenin;
//     //grupoClave?: GrupoClave;
//     //detpedido:Detpedidoin;


// }
// Generated by https://quicktype.io

export interface Pedidodearticulo {
    cod_clave:        number;
    cod_almacen:      string;
    fecha_pedido:     string;
    fecha_entrega?:    string;
    fecha_despacho?:   string;
    piso_destino:     string;
    proc_destino:     string;
    prog_destino:     string;
    proy_destino:     string;
    motivo_solicitud: string;
    autorizado:       boolean;
    urgente:          boolean;
    recepcionado:     boolean;
    enviado:          boolean;
    obs:              string;
    atendido:         boolean;
    pedido_por:       string;
    detPedido:        DetPedido[];
}

export interface DetPedido {
    cod_articulo:       number;
    cant_pedida:        number;
    cant_aceptada:      number;
    cant_entregada:     number;
    cant_por_entregar:  number;
    costo_cant_entrega: number;
    pedido_para_compra: boolean;
    autoriza_compra:    boolean;
    obs:                string;
}

