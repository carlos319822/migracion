export interface Detpedidoin{
    id: number;
    id_pedido?: number;
    cod_articulo?: number;
    cant_pedida?: number;
    cant_aceptada?: number;
    cant_entregada?: number;
    cant_por_entregar?: number;
    costo_cant_entrega?: number;
    pedido_para_compra: boolean;
    autoriza_compra: boolean;
    obs?: string;
    //articulo?: Articulo;
    //pedido?: Pedido;
}