import React from 'react';
import './accesorios.css';
const Accesorios = ({ imagen, descripcion, precio }) => {
  return (
    <div className="card py-3 border-0"  style={{ width: '15rem'}}>
    <div className="accesorio-componente">
      <div className="accesorio-imagen" style={{background:'#d9d9d9' }}>
        <img className="card-img-top" src={imagen} alt={descripcion}/>
      </div>
      <div className="card-body text-center">
        <p className="card-title text-center">
          <strong>{descripcion}</strong>
        </p>
        <strong className="card-text">${precio}</strong>
     </div>
      <div className="d-flex flex-column">
        <span class="badge bg-success mb-2 p-3" style={{cursor:'pointer'}}>VER DETALLES</span>
        <span class="badge bg-danger p-3" style={{cursor:'pointer'}}>COMPRAR</span>
      </div>
    </div>
  </div>
    
  );
};

export default Accesorios;
