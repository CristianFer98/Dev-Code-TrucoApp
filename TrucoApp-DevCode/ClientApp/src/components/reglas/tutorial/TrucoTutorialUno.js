import React, { useEffect, useState } from 'react';
import './globoDialogo.css';
import './trucoTutorial.css';

import {
  barajarCartasParaTrucoJugador,
  barajarCartasParaTrucoMaquina,
} from './CartasTutorial';
import Swal from 'sweetalert2';

const TrucoTutorialUno = () => {
  let cartasJugador = barajarCartasParaTrucoJugador();
  let cartasMaquina = barajarCartasParaTrucoMaquina();

  const [manoJugador, setManoJugador] = useState(cartasJugador[0]);
  const [mesaJugador, setMesaJugador] = useState([]);

  const [manoMaquina, setManoMaquina] = useState(cartasMaquina[0]);
  const [mesaMaquina, setMesaMaquina] = useState([]);

  const [comenzo, setComenzo] = useState(false);
  const [mensajeJugador, setMensajeJugador] = useState('');
  const [mensajeMaquina, setMensajeMaquina] = useState('');

  const [puedeTruco, setPuedeTruco] = useState(false);
  const [puedeReTruco, setReTruco] = useState(false);
  const [puedeValeCuatro, setPuedeValeCuatro] = useState(false);

  const comenzar = () => {
    setComenzo(true);
    Swal.fire({
      title: '<h1>Tutorial de Truco</h1>',
      html:
        '¡Bienvenido! Soy <u>Vale Cuatro</u>, ahora vamos a aprender sobre el <b>Truco</b>. <br>' +
        'El truco es una apuesta que se puede realizar en cualquier momento y los puntos se otorgarán al ganador de la misma en función del valor de las cartas en la mesa. <br>' +
        "Se le llama <b>baza</b> a cada 'enfrentamiento de cartas', quien gana la mayoria se queda con los puntos del <b>Truco</b>",
      confirmButtonText: '¡Vamos!',
      position: 'center-right',
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    }).then((value) => {
      Swal.fire({
        html:
          'Simulemos una partida, veamos si podes ganarle. <br>' +
          'Como podes ver tenes un (1 - 3 - 10) <br>' +
          '<b>¡Es muy importante el orden en que tires tus cartas para usarlas de una manera correcta!</b>',
        confirmButtonText: '¡Entiendo!',
        position: 'center-right',
      }).then((value) => {
        Swal.fire({
          html: 'Podes comenzar con cualquier carta. Tiremos la que tiene el valor medio, en este caso el <b>10</b>.',
          confirmButtonText: '¡Ok!',
          position: 'center-right',
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
          '<h1>Perdiste la primera baza</h1> ' +
          'Como podes ver, esta jugada la perdiste ya que su 12 es mayor que tu 10. <br>' +
          'No desesperes, todavia podes ganar... Tienes buenas cartas. <br> ' +
          '<b>A continuación canta <b>Truco</b> para jugar por 2 puntos </b>',
        confirmButtonText: '¡Dale!',
        position: 'center-right',
      });
    }, 1500);
  };

  const truco = () => {
    if (comenzo) {
      if (puedeTruco === true) {
        setMensajeJugador('TRUCO');
        setMensajeMaquina('QUIERO');

        setTimeout(() => {
          Swal.fire({
            html:
              '<h1>Truco Querido</h2>' +
              'Tu contrincante ha aceptado el truco. <br>' +
              'Existen <b>tres tipos</b> de Truco: <br> ' +
              '<ul> <li>Truco = 2 puntos</li> <li>Re Truco = 3 puntos</li> <li>Vale Cuatro = 4 puntos</li> </ul>' +
              '<b>Ojo, si vos cantas Truco el Re Truco le corresponde a tu contrincante. Si canta Re Truco, tenes posibilidad de cantar Vale Cuatro',
            confirmButtonText: '¡Entendido!',
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp',
            },
            position: 'center-right',
          }).then((value) => {
            let cartaTutorial = manoMaquina.find(
              (cartas) => cartas.number == 2
            );
            setMesaMaquina(mesaMaquina.concat(cartaTutorial));
            setManoMaquina(manoMaquina.filter((j) => j.number != 2));

            Swal.fire({
              html:
                '<h1>IMPORTANTE</h1>' +
                "El jugador que <u>'mata'</u> esta obligado a tirar la siguiente carta. Como en este ejemplo la primera baza la gano tu contrincante él debe tirar la siguiente carta <br>" +
                "<b>Ahora, tirá la carta que tengas suficiente para 'matar' el 2 de basto. En este caso te conviene arrojar el 3.",
              confirmButtonText: '¡OK!',
              position: 'center-right',
            }).then((value) => {
              let cartaObtenida = manoJugador.find(
                (carta) => carta.number === 3
              );
              setMesaJugador(mesaJugador.concat(cartaObtenida));
              setManoJugador(manoJugador.filter((carta) => carta.number != 3));

              setTimeout(() => {
                Swal.fire({
                  html:
                    '<h1>¡Vas bien!</h1>' +
                    "Ganaste la segunda baza 'matando' el dos. Ahora, como dijimos antes, te corresponde tirar la siguiente carta.",
                  position: 'center-right',
                }).then((value) => {
                  setMensajeMaquina('QUIERO RE TRUCO');
                  setTimeout(() => {
                    setPuedeValeCuatro(true);
                    setPuedeTruco(false);
                    Swal.fire({
                      html:
                        '<h1>Wow! Te cantaron Re Truco</h1>' +
                        'Tu contrincante se ha adelantado y te ha cantado <b>Re Truco</b>, parece que tiene una buena carta pero no puede ser mejor que el 1 de espada. <br>' +
                        'Creo que es una buena oportunidad que lo aceptes redoblando la apuesta con <b>Vale Cuatro</b>, quiza lo acepte',
                      confirmButtonText: '¡Entendido!',
                      position: 'center-right',
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
        setMensajeJugador('QUIERO RE TRUCO');
      }
    }
  };

  const valeCuatro = () => {
    if (comenzo) {
      if (puedeValeCuatro === true) {
        setMensajeJugador('QUIERO VALE CUATRO');
        setTimeout(() => {
          setMensajeMaquina('Si, Quiero');
          Swal.fire({
            html:
              '<h1>QUIERO VALE CUATRO QUERIDO</h1>' +
              'Muy buen, te han aceptado la apuesta. Quien gane esta baza se llevara <b>4 Puntos</b>' +
              '<br> Como habias ganado la anterior baza, te corresponde tirar. Arroja el 1 de espada',
            confirmButtonText: '¡Ok!',
            position: 'center-right',
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
                  '<h1>¡Felicidades!</h1>' +
                  'Haz ganado el truco en esta mano. Como el nivel del truco era el mas alto (vale cuatro) obtenes 4 puntos en la general. <br>' +
                  '<b>Recorda que si en algun momento el truco no es aceptado, se dara por finalizada la mano',
                confirmButtonText: '¡Entendido!',
                position: 'center-right',
              }).then((value) => {
                setManoJugador(cartasJugador[0]);
                setManoMaquina(cartasMaquina[0]);
                setMensajeJugador('');
                setMensajeMaquina('');
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
      style={{ marginLeft: '10px', marginRight: '10px' }}
      key={carta.id}
    >
      <img src={carta.image} width={75}></img>
    </div>
  ));

  const manoMaquinaLista = manoMaquina.map((carta) => (
    <div
      style={{ opacity: '0.6', marginLeft: '10px', marginRight: '10px' }}
      key={carta.id}
    >
      <img src={carta.image} width={75}></img>
    </div>
  ));

  const mesaJugadorLista = mesaJugador.map((carta) => (
    <img
      src={carta.image}
      key={carta.id}
      width={75}
      style={{ marginLeft: '20px' }}
    ></img>
  ));

  const mesaMaquinaLista = mesaMaquina.map((carta) => (
    <img
      src={carta.image}
      key={carta.id}
      width={75}
      style={{ marginLeft: '20px' }}
    ></img>
  ));

  return (
    <div className="d-flex justify-content-center trucoContenedorTutorial">
      <div className="trucoTutorial">
        <button className="botonComenzar" onClick={() => comenzar()}>
          Comenzar
        </button>

        <div className="trucoManoMaquina">{manoMaquinaLista}</div>
        <div className="vinetaMaquinaUno">
          <p className="dialogoMaquinaUno">{mensajeMaquina}</p>
        </div>

        <div className="trucoMesa">
          <div className="trucoMesaMaquina">{mesaMaquinaLista}</div>

          <div className="trucoMesaJugador">{mesaJugadorLista}</div>
        </div>

        <div className="vinetaJugadorUno">
          <p className="dialogoJugadorUno">{mensajeJugador}</p>
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
            {' '}
            Vale Cuatro
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrucoTutorialUno;
