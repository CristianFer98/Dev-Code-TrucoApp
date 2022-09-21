import React from 'react';

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { jugar } from "../../../actions/auth";
import './menuPrincipal.css'

const MenuPrincipal = () => {

    const history = useHistory();
    const dispatch = useDispatch();
  
    const handleJugar = (e) => {
      e.preventDefault();
      dispatch(jugar());
      history.push("/inicio/mesas");
    };
    return (

        <div className="menuPrincipal">

        <button onClick={handleJugar} className="boton" id="unovsuno">
        <span className='text'><h4>Uno vs Uno</h4></span>

        </button>

        <button onClick={handleJugar} className="boton" id="dosvsdos">
        <span className='text'><h4>Dos VS Dos</h4></span>
        </button>

        <button onClick={handleJugar} className="boton" id="tresvstres" >
          <span className='text'><h4>Tres VS Tres</h4></span>
        </button>

        <button onClick={handleJugar} className="boton" id="unovsmaquina" >
        <span className='text'><h4>Uno vs Maquina</h4></span>
        </button>

        <Link to="/inicio/torneos" className="boton" id="torneo">
        <span className='text'><h4>Torneo</h4></span>
        </Link>
        </div>
    );
};

export default MenuPrincipal;