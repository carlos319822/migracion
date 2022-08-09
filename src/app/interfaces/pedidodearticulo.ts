export interface Pedidodearticulo{
    id_pedido:number;
    cod_clave:number;
    cod_almacen:number;
    proc_destino:string;
    prog_destino:string;



    motivo_solicitud:string;
    fecha_pedido:Date;
    autorizado:boolean;
    obs:string;

    piso_destino:string;
    pedido_por:string;

    cod_articulo:number;
    cant_pedida:number;




}