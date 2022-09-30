import React, { useState, useEffect } from "react";
import { barajar } from "./cartas";
import _ from "lodash";
import "./juegoIA.css";
const JuegoIA = () => {
  //ESTADOS____________________________________________________________________________________
  const cartas = barajar();
  //Jugador
  const [manoJugador, setManoJugador] = useState(cartas[0]);
  const [mesaJugador, setMesaJugador] = useState([]);
  const [puntajeJugador, setPuntajeJugador] = useState(0);

  //Maquina
  const [manoMaquina, setManoMaquina] = useState(cartas[1]);
  const [mesaMaquina, setMesaMaquina] = useState([]);
  const [puntajeMaquina, setPuntajeMaquina] = useState(0);

  //Envido y Truco.
  const [seCantoEnvido, setSeCantoEnvido] = useState(false);
  const [nivelDeTruco, setNivelDeTruco] = useState(0);

  //MANO Y TURNOS.
  const [elQueComienza, setElQueComienza] = useState();
  const [turnoMaquina, setTurnoMaquina] = useState();
  const [turnoTerminado, setTurnoTerminado] = useState(false);
  //METODOS____________________________________________________________________________________

  /*
  elQueComienza = 0 (LA MANO ES DE LA MAQUINA)
  elQueComienza = 1 (LA MANO ES DEL JUGADOR)
  */

  //DEFINE EL JUGADOR QUE COMIENZA, SOLO SE EJECUTA UNA VEZ____________________________________
  useEffect(() => {
    definirQuienComienza();
  }, []);

  const definirQuienComienza = () => {
    let elquecomienza = Math.round(Math.random() * 1); //obtengo un random 0 o 1
    setElQueComienza(elquecomienza); //se lo seteo al estado.
    if (elquecomienza == 0) {
      // si da cero, arranca la maquina.
      setTurnoMaquina(true); // maquina tiene turno disponible.
    }
  };
  //___________________________________________________________________________________________

  /*este UseEfect se va a ejecutar en cada renderizado para comprobar si la mano termino
  En el se contabilizan los puntos de las cartas sobre la mesa para asignar a los jugadores
  1. Si no se canto envido ni truco se le da un punto al que gana la mano. 
  2. Si se canto truco y se quizo, el ganador obtiene 2 puntos. Lo mismo para Re Truco (3) y Vale Cuatro (4) 
  */
  useEffect(() => {
    if (turnoTerminado == false) {
      evaluarManoTerminada();
    }
    //va a tardar un segundo en ejecutar repartir, siempre y cuando el turno este terminado.
    setTimeout(() => {
      repartir();
    }, 2000);
    evaluarPosibleGanador(); //si alguno llega a 15 puntos.
  });

  const evaluarManoTerminada = () => {
    if (manoJugador.length == 0 && manoJugador.length == 0) {
      let contadorJugador = 0;
      let contadorMaquina = 0;

      for (let index = 0; index < 3; index++) {
        if (
          mesaJugador[index].cardValueRank < mesaMaquina[index].cardValueRank
        ) {
          contadorJugador++;
        } else {
          contadorMaquina++;
        }
      }

      evaluarJugadorGanador(contadorJugador, contadorMaquina);
      evaluarMaquinaGanador(contadorJugador, contadorMaquina);
      evaluarEmpate(contadorJugador, contadorMaquina); //Si se empata gana un punto el que es mano

      setTurnoTerminado(true); //Como todas las cartas estan sobre la mesa termino la jugada
      setNivelDeTruco(0);
    }
  };

  const evaluarJugadorGanador = (contadorJugador, contadorMaquina) => {
    if (contadorJugador > contadorMaquina) {
      if (nivelDeTruco == 0) {
        //NO TRUCO
        setPuntajeJugador(puntajeJugador + 1);
        setManoJugador([]);
        setManoMaquina([]);
      }
      if (nivelDeTruco == 1) {
        // TRUCO
        setPuntajeJugador(puntajeJugador + 2);
        setManoJugador([]);
        setManoMaquina([]);
      }
      if (nivelDeTruco == 2) {
        // RE TRUCO
        setPuntajeJugador(puntajeJugador + 3);
        setManoJugador([]);
        setManoMaquina([]);
      }
      if (nivelDeTruco == 3) {
        // VALE CUATRO
        setPuntajeJugador(puntajeJugador + 4);
        setManoJugador([]);
        setManoMaquina([]);
      }
    }
  };

  const evaluarMaquinaGanador = (contadorJugador, contadorMaquina) => {
    if (contadorJugador < contadorMaquina) {
      if (nivelDeTruco == 0) {
        //NO TRUCO
        setPuntajeMaquina(puntajeMaquina + 1);
        setManoJugador([]);
        setManoMaquina([]);
      }
      if (nivelDeTruco == 1) {
        // TRUCO
        setPuntajeMaquina(puntajeMaquina + 2);
        setManoJugador([]);
        setManoMaquina([]);
      }
      if (nivelDeTruco == 2) {
        // RE TRUCO
        setPuntajeMaquina(puntajeMaquina + 3);
        setManoJugador([]);
        setManoMaquina([]);
      }
      if (nivelDeTruco == 3) {
        // VALE CUATRO
        setPuntajeMaquina(puntajeMaquina + 4);
        setManoJugador([]);
        setManoMaquina([]);
      }
    }
  };

  const evaluarEmpate = (contadorJugador, contadorMaquina) => {
    if (contadorJugador == contadorMaquina) {
      if (elQueComienza == 1) {
        //ES DECIR, EL JUGADOR
        setPuntajeJugador(puntajeJugador++);
      } else {
        setPuntajeMaquina(puntajeMaquina++);
      }
    }
  };
  //_______________________________________________________________________________________________________

  //Este UseEffect se va a ejecutar cuando el que comience sea la maquina.
  useEffect(() => {
    if (elQueComienza == 0) {
      if (turnoMaquina == true) {
        //Primero que tire una carta
        let carta = manoMaquina[manoMaquina.length - 1];
        setMesaMaquina(mesaMaquina.concat(carta));
        setManoMaquina(manoMaquina.filter((c) => c.id != carta.id));
        setTurnoMaquina(false);
      }
    }
  });

  //Metodo recibe el valor de la carta en mesa y evalua tirar una mayor o menor.
  const evaluarRespuestaDeLaMaquina = (valorDeLaCartaTirada) => {
    const cartaMayor = manoMaquina.find(
      (carta) => carta.cardValueRank < valorDeLaCartaTirada
    );
    if (cartaMayor) {
      setMesaMaquina(mesaMaquina.concat(cartaMayor));
      setManoMaquina(manoMaquina.filter((c) => c.id != cartaMayor.id));
    } else {
      let cartasOrdenadas = manoMaquina.sort(
        (c, c2) => c.cardValueRank - c2.cardValueRank
      );
      let cartaElegida = cartasOrdenadas[cartasOrdenadas.length - 1];
      setMesaMaquina(mesaMaquina.concat(cartaElegida));
      setManoMaquina(manoMaquina.filter((c) => c.id != cartaElegida.id));
    }
  };

  /*El jugador arroja una carta. Si el jugador es mano. Siempre la maquina debe responder en base
  a la carta que le tiro.*/
  const tirarCarta = (carta) => {
    if (elQueComienza == 1) {
      setMesaJugador(mesaJugador.concat(carta));
      setManoJugador(manoJugador.filter((j) => j.id != carta.id));
      evaluarRespuestaDeLaMaquina(carta.cardValueRank); //aca puede evaluar cantarme truco o envido.
    } else {
      //si la mano no es del jugador, simlemente va a responder a lo que la maquina tire.
      setMesaJugador(mesaJugador.concat(carta));
      setManoJugador(manoJugador.filter((j) => j.id != carta.id));
      if (mesaMaquina.length != 3) {
        //mientras que no haya tres cartas en la mesa de la maquina sigue su turno.
        setTurnoMaquina(true);
      }
    }
  };

  //LOGICA DEL ENVIDO (CANTADO POR EL USUARIO)
  const cantarEnvido = (valor) => {
    if (seCantoEnvido == false) {
      let valorDelJugador = calcularEnvido("jugador");
      let valorDeLaMaquina = calcularEnvido("maquina");

      if (valorDeLaMaquina <= 26) {
        alert("La IA dice: No quiero");
        setPuntajeJugador(puntajeJugador + 1);
        setSeCantoEnvido(true);
      } else {
        alert("La IA dice: Quiero");
        alert('La IA Dice: '+valorDeLaMaquina);
        if (valorDelJugador > valorDeLaMaquina) {
          setPuntajeJugador(puntajeJugador + valor);
          alert('envido gana jugador, recibe ' + valor + ' puntos'); 
        } else {
          setPuntajeMaquina(puntajeMaquina + valor);
          alert('Jugador dice: Son buenas!')
        }
        setSeCantoEnvido(true);
      }
    }
  };

  const calcularEnvido = (quien) => {
    switch (quien) {
      case "jugador":
        let puntajesJ = [];
        puntajesJ.push(calcularPuntaje(manoJugador, "espada"));
        puntajesJ.push(calcularPuntaje(manoJugador, "oro"));
        puntajesJ.push(calcularPuntaje(manoJugador, "copa"));
        puntajesJ.push(calcularPuntaje(manoJugador, "basto"));
        let valorFinalJ = _.max(puntajesJ); //verifico el valor mas alto de cada palo y lo devuelvo
        return valorFinalJ;

      case "maquina":
        let puntajesM = [];
        puntajesM.push(calcularPuntaje(manoMaquina, "espada"));
        puntajesM.push(calcularPuntaje(manoMaquina, "oro"));
        puntajesM.push(calcularPuntaje(manoMaquina, "copa"));
        puntajesM.push(calcularPuntaje(manoMaquina, "basto"));
        let valorFinalM = _.max(puntajesM); //verifico el valor mas alto de cada palo y lo devuelvo
        return valorFinalM;
    }
  };

  const calcularPuntaje = (mano, palo) => {
    let puntaje = 0; //defino el puntaje en cero
    let cartas = _.filter(mano, { suit: palo }); //filtro las espadas en mi mano
    if (cartas.length >= 2) {
      // si son mas de dos suman 20 puntos
      puntaje = 20;
    }
    cartas.forEach((carta) => {
      //recorro las cartas
      puntaje = puntaje + carta.envidoCardValue; //le sumo a los 20 los valores de cada carta
    });
    return puntaje;
  };
  //______________________________________________________________________________________

  //LOGICA DEL TRUCO (CANTADO POR EL USUARIO).
  const cantarTruco = () => {
    if (nivelDeTruco == 0) {
      let cartasEnManoMaquina = manoMaquina.length;
      let puntajeDeCartasMaquina = 0;
      manoMaquina.forEach((element) => {
        puntajeDeCartasMaquina = puntajeDeCartasMaquina + element.cardValueRank;
      });

      if (cartasEnManoMaquina == 3) {
        if (puntajeDeCartasMaquina >= 30) {
          alert("no quiero");
          setPuntajeJugador(puntajeJugador + 1);
          setTurnoTerminado(true);
          setMesaJugador([]);
          setMesaMaquina([]);
        } else {
          alert("quiero");
          setNivelDeTruco(1);
        }
      }

      if (cartasEnManoMaquina == 2) {
        if (puntajeDeCartasMaquina >= 20) {
          alert("no quiero");
          setPuntajeJugador(puntajeJugador + 1);
          setTurnoTerminado(true);
          setMesaJugador([]);
          setMesaMaquina([]);
        } else {
          alert("quiero");
          setNivelDeTruco(1);
        }
      }

      if (cartasEnManoMaquina == 1) {
        if (puntajeDeCartasMaquina >= 7) {
          alert("no quiero");
          setPuntajeJugador(puntajeJugador + 1);
          setTurnoTerminado(true);
          setMesaJugador([]);
          setMesaMaquina([]);
        } else {
          alert("quiero");
          setNivelDeTruco(1);
        }
      }

      if (cartasEnManoMaquina == 0) {
        let cartaUtilma = mesaMaquina.pop();
        console.log(cartaUtilma);
        if (cartaUtilma.cardValueRank >= 7) {
          alert("quiero");
          setNivelDeTruco(1);
        } else {
          alert("no quiero");
          setPuntajeJugador(puntajeJugador + 1);
          setTurnoTerminado(true);
          setMesaJugador([]);
          setMesaMaquina([]);
        }
      }
    }
  };

  const cantarReTruco = () => {
    if (nivelDeTruco == 1) {
      let cartasEnManoMaquina = manoMaquina.length;
      let puntajeDeCartasMaquina = 0;
      manoMaquina.forEach((element) => {
        puntajeDeCartasMaquina = puntajeDeCartasMaquina + element.cardValueRank;
      });

      if (cartasEnManoMaquina == 3) {
        if (puntajeDeCartasMaquina >= 25) {
          alert("no quiero");
          setTurnoTerminado(true);
          repartir();
        } else {
          alert("quiero");
          setNivelDeTruco(2);
        }
      }

      if (cartasEnManoMaquina == 2) {
        if (puntajeDeCartasMaquina >= 15) {
          alert("no quiero");
          setTurnoTerminado(true);
          repartir();
        } else {
          alert("quiero");
          setNivelDeTruco(2);
        }
      }

      if (cartasEnManoMaquina == 1) {
        if (puntajeDeCartasMaquina >= 6) {
          alert("no quiero");
          setTurnoTerminado(true);
          repartir();
        } else {
          alert("quiero");
          setNivelDeTruco(2);
        }
      }

      if (cartasEnManoMaquina == 0) {
        let cartaUtilma = mesaMaquina.pop();
        console.log(cartaUtilma);
        if (cartaUtilma.cardValueRank >= 6) {
          alert("quiero");
          setNivelDeTruco(2);
        } else {
          alert("no quiero");
        }
      }
    }
  };

  const cantarValeCuatro = () => {
    if (nivelDeTruco == 2) {
      let cartasEnManoMaquina = manoMaquina.length;

      let puntajeDeCartasMaquina = 0;
      manoMaquina.forEach((element) => {
        puntajeDeCartasMaquina = puntajeDeCartasMaquina + element.cardValueRank;
      });

      if (cartasEnManoMaquina == 3) {
        if (puntajeDeCartasMaquina >= 20) {
          alert("no quiero");
          setTurnoTerminado(true);
          repartir();
        } else {
          alert("quiero");
          setNivelDeTruco(3);
        }
      }

      if (cartasEnManoMaquina == 2) {
        if (puntajeDeCartasMaquina >= 10) {
          alert("no quiero");
          setTurnoTerminado(true);
          repartir();
        } else {
          alert("quiero");
          setNivelDeTruco(3);
        }
      }

      if (cartasEnManoMaquina == 1) {
        if (puntajeDeCartasMaquina >= 5) {
          alert("no quiero");
          setTurnoTerminado(true);
          repartir();
        } else {
          alert("quiero");
          setNivelDeTruco(3);
        }
      }

      if (cartasEnManoMaquina == 0) {
        let cartaUtilma = mesaMaquina.pop();
        console.log(cartaUtilma);
        if (cartaUtilma.cardValueRank >= 5) {
          alert("quiero");
        } else {
          alert("no quiero");
          setNivelDeTruco(3);
        }
      }
    }
  };
  //_____________________________________________________________________________________

  //METODO QUE RESETEA LA JUGADA MANTENIENDO LOS PUNTOS. REPARTE CARTAS
  const repartir = () => {
    if (turnoTerminado == true) {
      const cartas = barajar();
      setMesaJugador([]); //quito las cartas de la mesa
      setMesaMaquina([]); //quito las cartas de la mesa
      setManoJugador(cartas[0]); //reparto tres cartas al jugador
      setManoMaquina(cartas[1]); //reparto tres cartas a la maquina
      setSeCantoEnvido(false);
      setTurnoTerminado(false); //se setea en false porque comenzo otra jugada.
      if (elQueComienza == 0) {
        setElQueComienza(1);
        setTurnoMaquina(false);
      } else {
        setElQueComienza(0);
        setTurnoMaquina(true);
      }
    }
  };

  //SE EJECUTA EN CADA RENDERIZADO PARA VER SI ALGUNO LLEGO A 15 PUNTOS.
  const evaluarPosibleGanador = () => {
    if (puntajeJugador >= 15) {
      alert("Jugador ha ganado");
      setPuntajeJugador(0);
      setPuntajeMaquina(0);
      setTurnoTerminado(true);
    }
    if (puntajeMaquina >= 15) {
      alert("maquina ha ganado");
      setPuntajeJugador(0);
      setPuntajeMaquina(0);
      setTurnoTerminado(true);
    }
  };

  //INFORMACION QUE VA A LA VISTA, RECORRO LOS ARRAY ACA EN LUGAR DE EN EL RETURN.
  const manoJugadorLista = manoJugador.map((carta) => (
    <div className="mano" key={carta.id}>
      <img src={carta.image} width={90}></img>
      <button className="botonTirar" onClick={() => tirarCarta(carta)}>
        Tirar
      </button>
    </div>
  ));

  const manoMaquinaLista = manoMaquina.map((carta) => (
    <img
      key={carta.id}
      src="https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-dorso-minimalart.png"
      width={90}
    ></img>
  ));

  const sectorJugadorLista = mesaJugador.map((carta) => (
    <img
      src={carta.image}
      key={carta.id}
      width={90}
      style={{ marginRight: "10px" }}
    ></img>
  ));

  const sectorMaquinaLista = mesaMaquina.map((carta) => (
    <img
      src={carta.image}
      key={carta.id}
      width={90}
      style={{ marginRight: "10px" }}
    ></img>
  ));
  //____________________________________________________________________________________
  return (
    <div className="juegoIA">
      {/*seccion del jugador*/}
      <div className="jugador">
        <div className="quieroIA">
          <button className="botonesDeAccion">Quiero</button>
          <button className="botonesDeAccion">No Quiero</button>
        </div>

        <div className="envidoIA">
          <button className="botonesDeAccion" onClick={() => cantarEnvido(2)}>
            Envido
          </button>
          <button className="botonesDeAccion" onClick={() => cantarEnvido(3)}>
            Real Envido
          </button>
          <button className="botonesDeAccion" onClick={() => cantarEnvido(15)}>
            Falta Envido
          </button>
        </div>

        <div className="trucoIA">
          <button className="botonesDeAccion" onClick={() => cantarTruco()}>
            Truco
          </button>
          <button className="botonesDeAccion" onClick={() => cantarReTruco()}>
            Re Truco
          </button>
          <button
            className="botonesDeAccion"
            onClick={() => cantarValeCuatro()}
          >
            Vale Cuatro
          </button>
        </div>

        <div className="cartasDelJugador">{manoJugadorLista}</div>
      </div>

      {/*seccion de la mesa*/}
      {/*seccion del puntaje */}
      <div className="seccionDelMedio">
        <div className="puntaje">
          <div style={{backgroundColor:"#221f07", height:"20px"}}></div>
          <div style={{ display: "flex", justifyContent: "space-around", alignContent:"center" }}>
            <div>{puntajeJugador}</div>
            <div>{puntajeMaquina}</div>
          </div>
        </div>

        <div className="mesaIA">
          <div className="sectorMaquina">{sectorMaquinaLista}</div>
          <div className="sectorJugador">{sectorJugadorLista}</div>
        </div>
      </div>
      {/*seccion de la maquina*/}
      <div className="cartasDelaMaquina">{manoMaquinaLista}</div>
    </div>
  );
};

export default JuegoIA;
