import React from "react";

import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./menuPrincipal.css";

const MenuPrincipal = () => {
  const history = useHistory();

  const handleJugar = (e) => {
    e.preventDefault();
    history.push("/inicio/mesas");
  };

  const jugarContraLaMaquina = (e) => {
    e.preventDefault();
    history.push("/juegoia");
  };
  return (
    <div className="menuPrincipal">
      <button onClick={handleJugar} className="boton" id="unovsuno">
       
      </button>
      
    
      <button className="boton" id="dosvsdos">
        
      </button>
         {/*
      <button className="boton" id="tresvstres">
        <span className="text">
          <h4>Tres VS Tres</h4>
        </span>
      </button>
      */}
      <button className="boton" onClick={jugarContraLaMaquina} id="unovsmaquina">
      
      </button>

      <Link to="/inicio/torneos" className="boton" id="torneo">
       
      </Link>
    </div>
  );
};

export default MenuPrincipal;
