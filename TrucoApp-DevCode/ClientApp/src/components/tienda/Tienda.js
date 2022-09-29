import React from 'react';
import './tienda.css';
import Accesorios from './Accesorios';
import mochila from './../../assets/accesorios/mochila.png';
import mazo from './../../assets/accesorios/mazo.png';
import remeraBlack from './../../assets/accesorios/remera-black.png';
import remeraWhite from './../../assets/accesorios/remera-white.png';

//import { AccesoriosTienda } from "../acessorios.json";
export function Tienda() {
  const accesorios = [
    { imagen: mochila, descripcion: "Mochila 'Vale Cuatro'", precio: 8000.0 },
    { imagen: mazo, descripcion: "Mazo 'Vale Cuatro'", precio: 7000.0 },
    {
      imagen: remeraBlack,
      descripcion: "Remera Black 'Vale Cuatro'",
      precio: 2800.0,
    },
    {
      imagen: remeraWhite,
      descripcion: "Remera White 'Vale Cuatro'",
      precio: 2800.0,
    },
  ];
  return (
    <div className="componente-store">
      <h1 className="titulo"> Tienda de Accesorios</h1>
      <br />
      <div class="alert alert-primary d-flex flex-column" role="alert" style={{width:'50%'}}>
          <h5 class="text-center mb-3">
            Mira los accesorios extras para tu avatar
          </h5>
          <a href="#" class="btn btn-primary">Acceder</a>
      </div>
      <br />
      <div className="accesorios">
        {accesorios.map((accesorio, i) => (
          <Accesorios
            key={i}
            imagen={accesorio.imagen}
            descripcion={accesorio.descripcion}
            precio={accesorio.precio}
          />
        ))}
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
