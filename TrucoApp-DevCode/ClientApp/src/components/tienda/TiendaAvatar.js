import React , { useState } from 'react';
import './tienda.css';
import { Link } from 'react-router-dom';
import Card from './TiendaAvatarCard';

export function TiendaAvatar() {
    const url = "https://localhost:44342/api/Accesorio/ObtenerAccesorios";

    const [accesorios, setAccesorios] = useState([]);
  
    const getAccesorios = ()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data=>setAccesorios(data));
        console.table(accesorios);
    }
    getAccesorios();

    const getListadoRopa = () =>{
        const listadoRopa =[];
        accesorios.map((accesorio) =>{
            if(accesorio.descripcion=='ropa'){
                listadoRopa.push(accesorio);   
            }
        });
        return listadoRopa;
    }

    const getListadoPelo = () =>{
        const listadoPelo =[];
        accesorios.map((accesorio) =>{
            if(accesorio.descripcion=='pelo'){
                listadoPelo.push(accesorio);   
            }
        });
        return listadoPelo;
    }
  return (
    <div className="componente-store" style={{ zIndex:'999', height:'100%'}}>
      <h1 className="titulo mb-5 mt-3">Lookea tu Avatar con el mejor estilo </h1>
      
      <div className="card p-3" style={{width:'80%', zIndex:'8'}}>
            <div className="card-header mb-3">
              <h3 className="card-title text-dark">Pelo</h3>
            </div>
            <div className="card- d-flex flex-row">
                {getListadoPelo().map((pelo,i) => (
                    <Card
                    key={i}
                    id={pelo.idAccesorio}
                    imagen={pelo.imagen}
                    precio={pelo.precio}
                    comprado={pelo.comprado}
                    />
                ))}
            </div> 
            <a href="/inicio/tienda-avatar" className="btn btn-danger mt-3 text-light" style={{fontWeight: 'bold', color:'white'}}>COMPRAR TODO</a>
      </div> 

      <div className="card p-3 mt-3" style={{width:'80%'}}>
            <div className="card-header mb-3">
              <h3 className="card-title text-dark">Ropa</h3>
            </div>
            <div className="card- d-flex flex-row">
                {getListadoRopa().map((ropa, i) => (
                    <Card
                    key={i}
                    id={ropa.idAccesorio}
                    imagen={ropa.imagen}
                    precio={ropa.precio}
                    comprado={ropa.comprado}
                    />
                ))}
            </div>
            <a href="/inicio/tienda-avatar" className="btn btn-danger mt-3 text-light" style={{fontWeight: 'bold', color:'white'}}>COMPRAR TODO</a>
      </div> 

      <Link to="/inicio/tienda" className="btn btn-success mt-3 mb-3" style={{textDecoration:'none', color:'white'}}>
                VOLVER
      </Link>
    </div>
  );
}
