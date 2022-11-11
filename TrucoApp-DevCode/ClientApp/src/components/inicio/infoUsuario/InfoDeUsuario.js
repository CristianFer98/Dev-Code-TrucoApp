import React from 'react';
import './infoDeUsuario.css';



const InfoDeUsuario = () => {
  return (
    <div className="informacion bg-warning">
      <p style={{paddingTop:"5px"}}>
        Nivel <br></br>
        <span className="info">5</span>
      </p>
      <p style={{paddingTop:"5px"}}>
        Puntaje <br></br>
        <span className="info">150</span>
      </p>
      <p style={{paddingTop:"5px"}}>
        Ganadas <br></br>
        <span className="info">10</span>
      </p>
      <p style={{paddingTop:"5px"}}>
        Perdidas <br></br>
        <span className="info">3</span>
      </p>
    </div>
  );
};

export default InfoDeUsuario;
