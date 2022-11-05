import React, { useState } from "react";
import "./envidoTutorial.css";
import "./globoDialogo.css";

import {
  barajarCartasParaEnvidoJugador,
  barajarCartasParaEnvidoMaquina,
} from "./CartasTutorial";
import Swal from "sweetalert2";

const EnvidoTutorialUno = () => {
  let cartasJugador = barajarCartasParaEnvidoJugador();
  let cartasMaquina = barajarCartasParaEnvidoMaquina();

  const [manoJugador, setManoJugador] = useState(cartasJugador[0]);
  const [manoMaquina, setManoMaquina] = useState(cartasMaquina[0]);
  const [comenzo, setComenzo] = useState(false);
  const [mensajeJugador, setMensajeJugador] = useState('');
  const [mensajeMaquina, setMensajeMaquina] = useState ('');



  const comenzar = () => {
    setComenzo(true);
    Swal.fire({
      title: "<h1>Ejemplo Uno - Envido</h1>",
      html:
        "¡Bienvenido! Me llamo <u>Vale Cuatro</u>, " +
        "hoy vamos a aprender sobre el <b>Envido</b>." +
        "<br>Recordá que solo es posible cantar <b>Envido</b> cuando al menos un jugador tiene las tres cartas en su mano",
      confirmButtonText: "¡Vamos!",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      position:"center-right"

    }).then((value) => {
      Swal.fire({
        html: "Sos el jugador de abajo. Observá tus cartas y busca las que tengan el palo repetido <b>(basto, espada, oro, copa)</b>",
        confirmButtonText: "¡Entiendo!",
        position:"center-right"

       
      }).then((value) => {
        Swal.fire({
          html: "Habras notado que tenes dos espadas <b>(2 y 7)</b>. Cuando tengas dos cartas del mismo palo tus tantos suman 20. De esos 20 tenes que sumarle los valores de las dos cartas",
          confirmButtonText: "¡Entiendo!",
          position:"center-right"

          
        }).then((value) => {
          Swal.fire({
            html:
              "Para este ejemplo, tenes <b>29 puntos</b> de envido. El jugador que tenga el envido mas alto se lleva los puntos. <br>" +
              "<ul> <li> <u> Envido : 2 puntos </u> <li> <u> Real Envido : 3 puntos </u> </li> <li> <u> Falta Envido : Gana la partida </u> </ul>",
            confirmButtonText: "¡Intentalo!",
            position:"center-right"

          
          });
        });
      });
    });
  };

  //METODOS PARA CANTAR ENVIDO
  const cantarEnvido = () => {
    if (comenzo) {
      setMensajeJugador('ENVIDO');
      Swal.fire({
        html:' <h2> Cantaste envido </h2>' + 
        '<br> El otro jugador evaluara sus puntos para aceptar la apuesta. Puede cantar <b>Quiero</b> o <b>No Quiero</b> <br>' +
        'Si tu contrincante no acepta, se te dara a vos 1 punto. En caso de aceptar, quien tenga mas tantos se lleva 2 puntos',
        position:"center-right"

      }).then((value)=> {
        maquinaAceptaEnvido();
      })
    }
  };

  const cantarRealEnvido = () =>{
    if (comenzo) {
      setMensajeJugador('REAL ENVIDO');
      Swal.fire({
        html:' <h2> Cantaste Real Envido </h2>' + 
        '<br> El otro jugador evaluara sus puntos para aceptar la apuesta. Puede cantar <b>Quiero</b> o <b>No Quiero</b> <br>' +
        'Este es el segundo nivel de envido, en caso de que el contrincante no acepte, se te dara a vos 1 punto. En caso de aceptar, quien tenga mas tantos se lleva 3 puntos',
        position:"center-right"

      }).then((value)=> {
        maquinaAceptaRealEnvido();
      })
    }
  }

  const cantarFaltaEnvido = () =>{
    if (comenzo) {
      setMensajeJugador('FALTA ENVIDO');
      Swal.fire({
        html:' <h2> Cantaste Falta Envido </h2>' + 
        '<br> El otro jugador evaluara sus puntos para aceptar la apuesta. Puede cantar <b>Quiero</b> o <b>No Quiero</b>. <br>' +
        'Debes pensar muy bien este movimiento, es el nivel mas alto de envido. Si tu contrincante no acepta, se te dara a vos 1 punto. En caso de aceptar, quien tenga mas tantos se lleva los <b>puntos faltantes para ganar la partida</b>',
        position:"center-right"

      }).then((value)=> {
        maquinaAceptaFaltaEnvido();
      })
    }
  }

  //RESPUESTA DE LA MAQUINA
  const maquinaAceptaEnvido = ()=>{
    setMensajeMaquina('QUIERO 28')
    Swal.fire({
      html:' <h2> Envido Querido </h2>' + 'Tu contrincante aceptó el <b>Envido</b>. Como tus tantos son 29 y los suyos 28 vos ganas el <b>Envido</b>, por tanto, tenes <b>2 puntos a tu favor</b>' +
      '<br> <u> <b> Recordá que en una partida real no se te permitirá ver las cartas de tu contrincante como ahora </b> </u>',
      position:"center-right"

    }).then((value)=> {
      Swal.fire({
        html:' <h2> ¿Y si empatamos? </h2>' + 'Aquel jugador que sea <b>mano</b> ganará el envido',
        position:"center-right"

      }).then((value) =>{
        setMensajeJugador('');
        setMensajeMaquina('');
      })
    })
  }

  const maquinaAceptaRealEnvido = () =>{
    setMensajeMaquina('QUIERO 28')
    Swal.fire({
      html:' <h2>Real Envido Querido </h2>' + 'Tu contrincante aceptó el <b>Real Envido</b>. Como tus tantos son 29 y los suyos 28 vos ganas el <b> Real Envido</b>, por tanto, tenes <b>3 puntos a tu favor</b>' + 
      '<br><u> <b> Recordá que en una partida real no se te permitirá ver las cartas de tu contrincante como ahora </b> </u>',
      position:"center-right"

    }).then((value)=> {
      Swal.fire({
        html:' <h2> ¿Y si yo pierdo? </h2>' + 'Debes decir <b>Son Buenas</b> y se le daran los <b>3 puntos</b> a tu contrincante',
        position:"center-right"

      }).then((value) =>{
        setMensajeJugador('');
        setMensajeMaquina('');
      })
    })
  }

  const maquinaAceptaFaltaEnvido = () =>{
    setMensajeMaquina('QUIERO 28')
    Swal.fire({
      html:' <h2>Falta Envido Querido </h2>' + 'Tu contrincante aceptó el <b>Falta Envido</b>. Como tus tantos son 29 y los suyos 28 vos ganas el <b>Falta Envido</b>, por tanto, <b>ganaste la partida de Truco</b>' + 
      '<br><u> <b> Recordá que en una partida real no se te permitirá ver las cartas de tu contrincante como ahora </b> </u>',
      position:"center-right"

    }).then((value)=> {    
        setMensajeJugador('');
        setMensajeMaquina('');
      })
  }


  const manoJugadorLista = manoJugador.map((carta) => (
    <div className="mano" key={carta.id}>
      <img src={carta.image} className="cartaTutorialIA"></img>
    </div>
  ));

  const manoMaquinaLista = manoMaquina.map((carta) => (
    <div style={{ opacity: "0.6" }} key={carta.id}>
      <img src={carta.image} className="cartaTutorialIA"></img>
    </div>
  ));
 

  return (
    <div className="envidoContenedorTutorial">
      <div className="envidoTutorial">
        <button className="botonComenzar" onClick={() => comenzar()}>
          Ejemplo 1 : Comenzar
        </button>

        <div className="envidoManoMaquina">{manoMaquinaLista}</div>

        <div className="vinetaMaquinaUno">
          <p className="dialogoMaquinaUno">{mensajeMaquina}</p>
        </div>

        <div className="envidoMesa"></div>
        <div className="vinetaJugadorUno">
          <p className="dialogoJugadorUno">{mensajeJugador}</p>
        </div>

        <div className="envidoManoJugador">{manoJugadorLista}</div>
        <div className="envidoAcciones">
          <button
            className="botonEnvidoTutorial"
            onClick={() => cantarEnvido()}
          >
            Envido
          </button>
          <button
            className="botonEnvidoTutorial"
            onClick={() => cantarRealEnvido()}
          >
            Real Envido
          </button>
          <button
            className="botonEnvidoTutorial"
            onClick={() => cantarFaltaEnvido()}
          >
            Falta Envido
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnvidoTutorialUno;
