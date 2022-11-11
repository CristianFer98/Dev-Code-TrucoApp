import React from 'react';
import { Link } from 'react-router-dom';
import './accesorios.css';
const Accesorios = ({ id, imagen, descripcion, precio }) => {
  return (
    <div className="card py-3 border-0 accesorio">
    <div className="accesorio-componente">
      <div className="accesorio-imagen" style={{background:'#d9d9d9' }}>
        <img className="card-img-top" src={imagen} alt={descripcion}/>
      </div>
      <div className="card-body text-center" style={{height:'auto'}}>
        <p className="card-title text-center">
          <strong>{descripcion}</strong>
        </p>
        <strong className="card-text">${precio}</strong>
     </div>
      <div className="botones">
        <span className="badge bg-success mb-2 btn-detalles text-center" id="detalles">
          <Link to={`/inicio/tienda/${id}`} style={{textDecoration:'none', color:'white'}}>
             <span className="texto-detalles">VER DETALLES</span>
            <i className="fa-sharp fa-solid fa-circle-info d-lg-none d-sm-block i-font" title="ver detalles" ></i>
          </Link>
        </span>
        <span className="badge bg-danger btn-comprar text-center" id="comprar" >
          <span className="texto-comprar">COMPRAR</span> 
          <i className="fa-solid fa-cart-shopping d-lg-none d-sm-block i-font" title="comprar"></i>
        </span>
      </div>
    </div>
  </div>
    
  );
};

export default Accesorios;
