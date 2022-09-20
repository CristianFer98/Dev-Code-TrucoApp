import React from 'react';
import unovsuno from '../../assets/1vs1.png'
import dosvsdos from '../../assets/2vs2.png'
import tresvstres from '../../assets/3vs3.png'
import unovsmaquina from '../../assets/1vsmaquina.png'
import torneo from '../../assets/copa.jpg'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { jugar } from "../../actions/auth";
import './menuPrincipal.css'

const MenuPrincipal = () => {

    const history = useHistory();
    const dispatch = useDispatch();
  
    const handleJugar = (e) => {
      e.preventDefault();
      dispatch(jugar());
      history.push("/juego");
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