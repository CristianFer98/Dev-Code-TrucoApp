import React from 'react';
import './tienda.css';
import AccesorioDetalle from './AccesorioDetalle';
import mochila from './../../assets/accesorios/mochila.png';
import mazo from './../../assets/accesorios/mazo.png';
import remeraBlack from './../../assets/accesorios/remera-black.png';
import remeraWhite from './../../assets/accesorios/remera-white.png';
import { useParams } from 'react-router';

export function TiendaDetalle() {
    const { id } = useParams();
    
    const accesorios = [
        { idA:1,
          imagen: mochila, 
          descripcion: "Mochila 'Vale Cuatro'",
          detalle1:"Colores: Negro, Gris, Azul",
          detalle2:"Medidas: Alto 47cm, Ancho 37cm",
          detalle3:"Cantidad: 100", 
          precio: 8000.0 },
        { idA:2, imagen: mazo, 
          descripcion: "Mazo 'Vale Cuatro'", 
          precio: 7000.0,
          detalle1:"Marca: Athand",
          detalle2:"Tipo de baraja: Españolas",
          detalle3:"Cantidad: 100",
        },
        {
          idA:3,
          imagen: remeraBlack,
          descripcion: "Remera Black 'Vale Cuatro'",
          detalle1:"Colores: Negro",
          detalle2:"Talles: S, M, L, XL, XXL",
          detalle3:"Cantidad: 100",
          precio: 2800.0,
        },
        {
          idA:4,
          imagen: remeraWhite,
          descripcion: "Remera White 'Vale Cuatro'",
          detalle1:"Colores: Blanco",
          detalle2:"Talles: S, M, L, XL, XXL",
          detalle3:"Cantidad: 100",
          precio: 2800.0,
        },
      ];
      
    return (
        <div className="componente-store" style={{height:'100%'}}>
            <AccesorioDetalle
                imagen={accesorios[id-1].imagen}
                descripcion={accesorios[id-1].descripcion}
                detalle1={accesorios[id-1].detalle1}
                detalle2={accesorios[id-1].detalle2}
                detalle3={accesorios[id-1].detalle3}
                precio={accesorios[id-1].precio}
            />
        </div>
        
    );
  }