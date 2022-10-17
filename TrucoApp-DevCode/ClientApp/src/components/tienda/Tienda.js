import React, { useState } from 'react';
import './tienda.css';
import Accesorios from './Accesorios';
import { Link } from 'react-router-dom';
import imagenes from './TiendaImagenes';

export function Tienda() {

const url = "https://localhost:44342/api/Producto/ObtenerProductos";

const [accesorios, setAccesorios] = useState([]);

const getProductos = ()=>{
    fetch(url)
    .then(res=> res.json())
    .then(data=>setAccesorios(data));
    console.table(accesorios);
}
getProductos();
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
            id={accesorio.idProducto}
            imagen={imagenes[`${accesorio.imagen}`]}
            descripcion={accesorio.descripcion}
            precio={accesorio.precio}
          />
        ))}
      </div>
    </div>
  );
}
