import React from 'react';
import './tienda.css';
import Accesorios from './Accesorios';
import { Link } from 'react-router-dom';
import mochila from './../../assets/accesorios/mochila.png';
import mazo from './../../assets/accesorios/mazo.png';
import remeraBlack from './../../assets/accesorios/remera-black.png';
import taza from './../../assets/accesorios/taza.png';

//import { AccesoriosTienda } from "../acessorios.json";
export function Tienda() {
  const accesorios = [
    { 
      id:1, 
      imagen: mochila, 
      descripcion: "Mochila 'Vale Cuatro'", 
      precio: 8000.0 
    },
    { 
      id:2, 
      imagen: mazo, 
      descripcion: "Mazo 'Vale Cuatro'", 
      precio: 700.0 
    },
    {
      id:3,
      imagen: taza,
      descripcion: "Taza 'Vale Cuatro'",
      precio: 800.0,
    },
    {
      id:4,
      imagen: remeraBlack,
      descripcion: "Remera Black 'Vale Cuatro'",
      precio: 2800.0,
    },
   
  ];
  return (
    <div className="componente-store" style={{height:'100%'}}>
      <h1 className="titulo mt-5"> Tienda de Accesorios</h1>
      <br />
      <div className="alert alert-primary d-flex flex-column" role="alert" style={{width:'50%'}}>
          <h5 className="text-center mb-3">
            Mira los accesorios para tu avatar
          </h5>
          <Link to="/inicio/tienda-avatar" className="btn btn-primary" style={{textDecoration:'none', color:'white'}}>
            Acceder
          </Link>
      </div>
      <br />
      <div className="accesorios">
        {accesorios.map((accesorio, i) => (
          <Accesorios
            key={i}
            id={accesorio.id}
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
