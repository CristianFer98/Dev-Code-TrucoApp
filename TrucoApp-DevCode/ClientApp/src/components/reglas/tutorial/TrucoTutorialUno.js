import React, { useEffect, useState } from "react";
import "./globoDialogo.css";
import "./trucoTutorial.css";

import {
  barajarCartasParaTrucoJugador,
  barajarCartasParaTrucoMaquina,
} from "./CartasTutorial";
import Swal from "sweetalert2";

const TrucoTutorialUno = () => {
  let cartasJugador = barajarCartasParaTrucoJugador();
  let cartasMaquina = barajarCartasParaTrucoMaquina();

  const [manoJugador, setManoJugador] = useState(cartasJugador[0]);
  const [mesaJugador, setMesaJugador] = useState([]);

  const [manoMaquina, setManoMaquina] = useState(cartasMaquina[0]);
  const [mesaMaquina, setMesaMaquina] = useState([]);

  const [comenzo, setComenzo] = useState(false);
  const [mensajeJugador, setMensajeJugador] = useState("");
  const [mensajeMaquina, setMensajeMaquina] = useState("");

  const [puedeTruco, setPuedeTruco] = useState(false);
  const [puedeReTruco, setReTruco] = useState(false);
  const [puedeValeCuatro, setPuedeValeCuatro] = useState(false);

  const comenzar = () => {
    setComenzo(true);
    Swal.fire({
      title: "<h1>Tutorial de Truco</h1>",
      html:
        "¡Bienvenido! Soy <u>Vale Cuatro</u>, ahora vamos a aprender sobre el <b>Truco</b>. <br>" +
        "El truco es una apuesta que se puede realizar en cualquier momento y los puntos se otorgarán al ganador de la misma en función del valor de las cartas en la mesa. <br>" +
        "Se le llama <b>baza</b> a cada 'enfrentamiento de cartas', quien gana la mayoria se queda con los puntos del <b>Truco</b>.",
      confirmButtonText: "¡Vamos!",
      position: "center-right",
      width: "700",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((value) => {
      Swal.fire({
        title: "<h1>Tutorial de Truco</h1>",
        html:
          "Vamos a simular una partida. <br>" +
          "Las cartas que te tocaron son el uno, el tres y el diez. Espero que hayas aprendido cual vale más. <br>" +
          "<b>¡Es muy importante el orden en el que tires tus cartas para ganar el truco!</b>",
        confirmButtonText: "¡Entiendo!",
        position: "center-right",
        width: "700",
      }).then((value) => {
        Swal.fire({
          title: "<h1>Tutorial de Truco</h1>",
          html: "Podes comenzar con cualquier carta. Tiremos la que tiene el valor medio, en este caso el <b>diez</b>.",
          confirmButtonText: "¡Ok!",
          width: "700",
          position: "center-right",
        }).then((value) => {
          tirarCarta(10);
        });
      });
    });
  };

  const tirarCarta = (carta) => {
    let cartaObtenida = manoJugador.find((cartas) => cartas.number == carta);
    setMesaJugador(mesaJugador.concat(cartaObtenida));
    setManoJugador(manoJugador.filter((j) => j.number != carta));

    let cartaTutorial = manoMaquina.find((cartas) => cartas.number == 12);
    setMesaMaquina(mesaMaquina.concat(cartaTutorial));
    setManoMaquina(manoMaquina.filter((j) => j.number != 12));
    setPuedeTruco(true);

    setTimeout(() => {
      Swal.fire({
        html:
          "<h1>Perdiste la primera baza</h1> " +
          "Como podes ver, esta jugada la perdiste ya que su 12 es mayor que tu 10. <br>" +
          "Tranqui, todavía podés ganar. Te dimos buenas cartas. <br> " +
          "<b>A continuación cantá <b>Truco</b> para jugar por dos puntos </b>",
        confirmButtonText: "¡Dale!",
        width: "700",
        position: "center-right",
      });
    }, 1500);
  };

  const truco = () => {
    if (comenzo) {
      if (puedeTruco === true) {
        setMensajeJugador("TRUCO");
        setMensajeMaquina("QUIERO");

        setTimeout(() => {
          Swal.fire({
            html:
              "<h1>Truco Querido</h2>" +
              "El otro jugador aceptó el truco. <br>" +
              "Te explico, existen tres tipos de truco: <br> " +
              "<ul> <li>Truco = 2 puntos</li> <li>Re Truco = 3 puntos</li> <li>Vale Cuatro = 4 puntos</li> </ul>" +
              "<b> <u>Si vos cantas truco, el re truco le corresponde al otro jugador. Si canta re truco el vale cuatro te corresponde a vos.</u>",
            confirmButtonText: "¡Ok!",
            width: "700",

            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
            position: "center-right",
          }).then((value) => {
            let cartaTutorial = manoMaquina.find(
              (cartas) => cartas.number == 2
            );
            setMesaMaquina(mesaMaquina.concat(cartaTutorial));
            setManoMaquina(manoMaquina.filter((j) => j.number != 2));

            Swal.fire({
              html:
                "<h1>Dato importante</h1>" +
                "El jugador que gana la <b>baza</b> esta obligado a tirar la siguiente carta. " +
                "Como en este ejemplo la primera baza la ganó tu contrincante él tira la siguiente carta. <br>" +
                "<b>Ahora, tirá la carta que tengas suficiente para 'matar' el dos de basto. " +
                "<b>En este caso te conviene arrojar el tres. </b>",
              confirmButtonText: "¡Ok!",
              width: "700",
              position: "center-right",
            }).then((value) => {
              let cartaObtenida = manoJugador.find(
                (carta) => carta.number === 3
              );
              setMesaJugador(mesaJugador.concat(cartaObtenida));
              setManoJugador(manoJugador.filter((carta) => carta.number != 3));

              setTimeout(() => {
                Swal.fire({
                  html:
                    "<h1>¡Vas bien!</h1>" +
                    "Ganaste la segunda baza 'matando' el dos. Ahora, como dijimos antes, te corresponde tirar la siguiente carta.",
                  position: "center-right",
                  confirmButtonText: "¡Ok!",
                  width: "700",
                }).then((value) => {
                  setMensajeMaquina("QUIERO RE TRUCO");
                  setTimeout(() => {
                    setPuedeValeCuatro(true);
                    setPuedeTruco(false);
                    Swal.fire({
                      html:
                        "<h1>¡Wow! Te cantaron Re Truco</h1>" +
                        "Tu contrincante te cantó re truco. Es posible que tenga una buena carta, pero no puede ser mejor que el ancho de espadas que tenes. <br>" +
                        "Es una buena oportunidad para que redobles la apuesta con <b>vale cuatro</b>.",
                      confirmButtonText: "¡Entendido!",
                      position: "center-right",
                      width: "700",
                    });
                  }, 1000);
                });
              }, 1500);
            });
          });
        }, 1500);
      }
    }
  };

  const reTruco = () => {
    if (comenzo) {
      if (puedeReTruco === true) {
        setMensajeJugador("QUIERO RE TRUCO");
      }
    }
  };

  const valeCuatro = () => {
    if (comenzo) {
      if (puedeValeCuatro === true) {
        setMensajeJugador("QUIERO VALE CUATRO");
        setTimeout(() => {
          setMensajeMaquina("QUIERO");
          Swal.fire({
            html:
              "<h1>Vale Cuatro Querido</h1>" +
              "Tu contrincante acepto la apuesta. " +
              "El que gane esta baza se va a llevar <b>cuatro puntos</b>" +
              "<br> Como la baza anterior la habias ganado vos, te corresponde tirar el ancho.",
            confirmButtonText: "¡Ok!",
            width: "700",
            position: "center-right",
          }).then((value) => {
            let cartaObtenida = manoJugador.find((carta) => carta.number === 1);
            setMesaJugador(mesaJugador.concat(cartaObtenida));
            setManoJugador(manoJugador.filter((carta) => carta.number != 1));

            let cartaMaquina = manoMaquina.find((carta) => carta.number === 7);
            setMesaMaquina(mesaMaquina.concat(cartaMaquina));
            setManoMaquina(manoMaquina.filter((carta) => carta.number != 7));

            setTimeout(() => {
              Swal.fire({
                html:
                  "<h1>¡Felicidades!</h1>" +
                  "Ganaste el truco en esta mano. Como la apuesta fue vale cuatro obtenes cuatro puntos en el puntaje general. <br>" +
                  "<b>Recordá que si en algun momento el truco no es aceptado, se dara por finalizada la mano",
                confirmButtonText: "¡Ok!",
                width: "700",

                position: "center-right",
              }).then((value) => {
                setManoJugador(cartasJugador[0]);
                setManoMaquina(cartasMaquina[0]);
                setMensajeJugador("");
                setMensajeMaquina("");
                setMesaJugador([]);
                setMesaMaquina([]);
                setComenzo(false);
              });
            }, 2000);
          });
        }, 500);
      }
    }
  };

  const manoJugadorLista = manoJugador.map((carta) => (
    <div
      className="mano"
      style={{ marginLeft: "10px", marginRight: "10px" }}
      key={carta.id}
    >
      <img src={carta.image} className="cartaTutorialIA"></img>
    </div>
  ));

  const manoMaquinaLista = manoMaquina.map((carta) => (
    <div
      style={{ opacity: "0.6", marginLeft: "10px", marginRight: "10px" }}
      key={carta.id}
    >
      <img src={carta.image} className="cartaTutorialIA"></img>
    </div>
  ));

  const mesaJugadorLista = mesaJugador.map((carta) => (
    <img className="animate__animated animate__slideInUp cartaTutorialIA" src={carta.image} key={carta.id}></img>
  ));

  const mesaMaquinaLista = mesaMaquina.map((carta) => (
    <img className="animate__animated animate__slideInDown cartaTutorialIA" src={carta.image} key={carta.id}></img>
  ));

  return (
    <div className="trucoContenedorTutorial">
      <div className="trucoTutorial">
        <button className="botonComenzar" onClick={() => comenzar()}>
          Comenzar
        </button>

        <div className="trucoManoMaquina">{manoMaquinaLista}</div>
        <div className="vinetaMaquinaDos">
          <p className="dialogoMaquinaDos">{mensajeMaquina}</p>
        </div>

        <div className="trucoMesa">
          <div className="trucoMesaMaquina">{mesaMaquinaLista}</div>

          <div className="trucoMesaJugador">{mesaJugadorLista}</div>
        </div>

        <div className="vinetaJugadorDos">
          <p className="dialogoJugadorDos">{mensajeJugador}</p>
        </div>
        <div className="trucoManoJugador">{manoJugadorLista}</div>

        <div className="acciones">
          <button className="botonEnvidoTutorial" onClick={() => truco()}>
            Truco
          </button>
          <button className="botonEnvidoTutorial" onClick={() => reTruco()}>
            Re Truco
          </button>
          <button className="botonEnvidoTutorial" onClick={() => valeCuatro()}>
            {" "}
            Vale Cuatro
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrucoTutorialUno;
