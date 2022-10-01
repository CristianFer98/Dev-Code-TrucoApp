import React from 'react';
import './infoDeUsuario.css';

const InfoDeUsuario = () => {
  return (
    <div className="informacion bg-warning">
      <h5>
        Nivel <br></br>
        <span className="info">5</span>
      </h5>
      <h5>
        Puntaje <br></br>
        <span className="info">150</span>
      </h5>
      <h5>
        Ganadas <br></br>
        <span className="info">10</span>
      </h5>
      <h5>
        Perdidas <br></br>
        <span className="info">3</span>
      </h5>
    </div>
  );
};

export default InfoDeUsuario;
