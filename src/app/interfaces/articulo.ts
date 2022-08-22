export interface Articulo { 
    cod_articulo: number;
    cod_und_medida: string;
    cod_categoria: string;
    nom_articulo: string;
    des_articulo: string;
    perecible: boolean;
    ubicacion: string;
    estado: boolean;
    imagen: string;
    precio_promedio_ref: number;
    precio_ultimo_ref: number;
    obs: string;
    visible: boolean;
}