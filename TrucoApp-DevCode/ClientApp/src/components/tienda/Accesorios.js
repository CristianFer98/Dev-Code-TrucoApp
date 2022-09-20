import React from 'react';
import './accesorios.css';
const Accesorios = ({ imagen, descripcion, precio }) => {
  return (
    <div className="componente-accesorios">
      <div className="accesorio-componente">
        <div className="accesorio-imagen">
          <img alt="" src={imagen} />
        </div>
        <div className="accesorio-descripcion">
          <strong>{descripcion}</strong>
        </div>
        <div className="accesorio-precio">
          <strong>${precio}</strong>
        </div>
        <div className="componente-btn">
          <div className="btn-detalles">VER DETALLES</div>
          <div className="btn-comprar">COMPRAR</div>
        </div>
      </div>
    </div>
  );
};

export default Accesorios;
