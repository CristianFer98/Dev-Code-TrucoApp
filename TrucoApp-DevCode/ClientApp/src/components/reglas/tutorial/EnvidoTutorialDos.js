import React, { useState } from "react";
import "./envidoTutorial.css";
import "./globoDialogo.css"
import {
  barajarCartasParaEnvidoJugador,
  barajarCartasParaEnvidoMaquina,
} from "./CartasTutorial";
import Swal from "sweetalert2";

const EnvidoTutorialDos = () => {
  let cartasJugador = barajarCartasParaEnvidoJugador();
  let cartasMaquina = barajarCartasParaEnvidoMaquina();

  const [ejemploUno, setEjemploUno] = useState(cartasJugador[1]);
  const [manoMaquina, setManoMaquina] = useState(cartasMaquina[1]);
  const [comenzo, setComenzo] = useState(false);
  const [mensajeJugador, setMensajeJugador] = useState("");
  const [mensajeMaquina, setMensajeMaquina] = useState("");

  const comenzar = () => {
    setComenzo(true);
    Swal.fire({
      title: "<h1>Ejemplo Dos - Envido</h1>",
      html:
        "¡Bienvenido! Soy yo de nuevo <br> <b>¿creiste que era todo? </b> <br>" +
        "Puede ocurrir que tu contrincante te cante <b>Envido</b> a vos.",
      confirmButtonText: "¡Vamos!",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((value) => {
      Swal.fire({
        html: "Nuevamente sos el jugador de abajo. Observa tus cartas y busca las que tengan el palo repetido <b>(basto, espada, oro, copa)</b>",
        confirmButtonText: "¡Entiendo!",
      }).then((value) => {
        Swal.fire({
          html:
            " ¿Que ocurre aca? Te tocaron tres cartas del mismo palo. " +
            "A muchas personas les gusta jugar con <b>Flor</b>. Es decir, sumando los puntos de las tres cartas. Por el momento solo tomaremos a eleccion las dos mas altas",
          confirmButtonText: "¡Entiendo!",
        }).then((value) => {
          Swal.fire({
            html:
              "Si tomamos las dos cartas mas altas <b>(4 y 6)</b> tenemos <b>30 puntos</b> de envido. El jugador que tenga el envido mas alto se lleva los puntos. <br>" +
              "<ul> <li> <u> Envido : 2 puntos </u> <li> <u> Real Envido : 3 puntos </u> </li> <li> <u> Falta Envido : Gana la partida </u> </ul>",
            confirmButtonText: "¡Ok!",
          }).then((value) => {
            Swal.fire({
              html: "A continuacion Acepta o Rechaza el envido segun lo creas mejor",
              confirmButtonText: "¡Intentalo!",
            });
            setMensajeMaquina("REAL ENVIDO");

          });
        });
      });
    });
  };

  //ACEPTAR O RECHAZAR ENVIDO
  const quiero = () => {
   if(comenzo){
    setMensajeJugador('QUIERO')
    Swal.fire({
        html:'<h1>Aceptaste el envido</h1> A continuacion el contrincante debe decirte cuantos puntos tiene'
    }).then((value)=>{
        setMensajeMaquina('¡33!')
        setMensajeJugador('SON BUENAS')
        Swal.fire({
          html:'Uff... perdiste el <b>Envido</b>. <br> No es necesario que digas tus puntos. Simplemente deci: "Son buenas"'
        }).then((value =>{
            setMensajeJugador('');
            setMensajeMaquina('');
            setComenzo(false);
        }))
    })
   }
  };

  const noQuiero = () => {
    if(comenzo){
        setMensajeJugador('NO QUIERO')
        Swal.fire({
            html: '<h1>No quisiste el envido</h1> Esto da por finalizada la jugada de <b>Envido<b/>. <br>' + 
            "Esto le dara a tu contrincante 1 punto a su favor."
        }).then((value)=>{
            setMensajeJugador('')
            setMensajeMaquina('')
            setComenzo(false)
            Swal.fire({
                html: 'Recorda que en caso que lo desees puedes aceptar el <b>Envido</b> o tambien redoblar la apuesta cantando <b>Real Envido</b> o <b>Falta Envido</b>'
            })

        })
    }
  };

  const flor = () => {
      Swal.fire({
        title: '¿FLOR? "Aquí no hacemos eso"',
        imageUrl:
          "https://www.pintzap.com/storage/img/memegenerator/templates/aqui-no-hacemos-eso.webp",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    
  };

  const ejemploUnoJugador = ejemploUno.map((carta) => (
    <div className="mano" key={carta.id}>
      <img src={carta.image} width={75}></img>
    </div>
  ));

  const ejemploUnoMaquina = manoMaquina.map((carta) => (
    <div style={{ opacity: "0.6" }} key={carta.id}>
      <img
        src='https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-dorso-minimalart.png'
        width={75}
      ></img>
    </div>
  ));
  return (
    <div className="envidoContenedorTutorial">
      <div className="envidoTutorial">
        <button className="botonComenzar" onClick={() => comenzar()}>
          Ejemplo 2 : Comenzar
        </button>

        <div className="envidoManoMaquina">{ejemploUnoMaquina}</div>
        <div className="vinetaMaquinaDos">
          <p className="dialogoMaquinaDos">{mensajeMaquina}</p>
        </div>
        <div className="envidoMesa"></div>
        <div className="vinetaJugadorDos">
          <p className="dialogoJugadorDos">{mensajeJugador}</p>
        </div>
        <div className="envidoManoJugador">{ejemploUnoJugador}</div>
        <div className="acciones">
          <button className="botonEnvidoTutorial" onClick={() => quiero()}>
            Quiero
          </button>
          <button className="botonEnvidoTutorial" onClick={() => noQuiero()}>
            No Quiero
          </button>
          <button className="botonEnvidoTutorial" onClick={() => flor()}>
            ¿Flor?
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnvidoTutorialDos;
