import React from "react";
import "./tienda.css";
import Accesorios from "./Accesorios";
import mochila from './../../assets/accesorios/mochila.png';
import mazo from './../../assets/accesorios/mazo.png';
import remeraBlack from './../../assets/accesorios/remera-black.png';
import remeraWhite from './../../assets/accesorios/remera-white.png';

//import { AccesoriosTienda } from "../acessorios.json";
export function Tienda() {
    const accesorios = [
        { imagen: mochila, descripcion: "Mochila 'Vale Cuatro'", precio: 8000.0},
        { imagen: mazo, descripcion: "Mazo 'Vale Cuatro'", precio: 7000.0 },
        { imagen: remeraBlack, descripcion: "Remera Black 'Vale Cuatro'", precio: 2800.0 },
        { imagen: remeraWhite, descripcion: "Remera White 'Vale Cuatro'", precio: 2800.0 }
    ];
    return (
        <div className="componente-store">
            <h1 className="titulo"> Tienda de Accesorios</h1>
            <br/>
            <h3 className="titulo-filtro">Orden más vendidos</h3>
            <br/>
            <div className="accesorios">

                {
                    accesorios.map((accesorio) =>
                        <Accesorios
                            imagen={accesorio.imagen}
                            descripcion={accesorio.descripcion}
                            precio={accesorio.precio}
                        />
                    )
                }
            </div>
        </div>


       
        /*AccesoriosTienda.map( (accesorio)=>
            <Accesorios
                imagen={accesorio.imagen}
                descripcion={accesorio.descripcion}
                precio={accesorio.precio}
            />*/
            );
}
