import React, { useState, useEffect } from "react";
import { barajar } from "./cartas";
import _ from "lodash";
import "./juegoIA.css";
import Swal from "sweetalert2";
const JuegoIA = () => {
  const cartas = barajar();
  //Jugador

  const [manoJugador, setManoJugador] = useState(cartas[0]);
  const [mesaJugador, setMesaJugador] = useState([]);
  const [puntajeJugador, setPuntajeJugador] = useState(0);

  //Maquina
  const [manoMaquina, setManoMaquina] = useState(cartas[1]);
  const [mesaMaquina, setMesaMaquina] = useState([]);
  const [puntajeMaquina, setPuntajeMaquina] = useState(0);
  const [mensajeMaquina, setMensajeMaquina] = useState("");

  //Envido y Truco.
  const [envidoCantado, setEnvidoCantado] = useState(false);
  const [nivelDeTruco, setNivelDeTruco] = useState(0);
  /* 0 = NO TRUCO | 1 = TRUCO | 2 = RE TRUCO | 3 = VALE CUATRO */

  //MANO Y TURNOS.
  const [turnoMaquina, setTurnoMaquina] = useState(false);
  const [confirmarAccion, setConfirmarAccion] = useState(false);
  const [turnoTerminado, setTurnoTerminado] = useState(false);
  const [jugoMaquina, setJugoMaquina] = useState(false);
  const [cartaMayor, setCartaMayor] = useState(false);

  const [mano, setMano] = useState();
  /* 0 = MAQUINA ES MANO */

  /*DEFINE EL JUGADOR QUE COMIENZA, SOLO SE EJECUTA UNA VEZ*/

  useEffect(() => {
    let elquecomienza = Math.round(Math.random() * 1);
    if (elquecomienza == 0) {
      setTurnoMaquina(true);
    }
  }, []);

  /* CUENTA PUNTOS Y EVALUA EL POSIBLE GANADOR */

  useEffect(() => {
    if (turnoTerminado == false) {
      evaluarManoGanadora();
    }
    setTimeout(() => {
      repartir();
    }, 2000);
    evaluarPosibleGanador();
  });

  const evaluarManoGanadora = () => {
    if (manoJugador.length == 0 && manoJugador.length == 0 && mesaJugador.length == 3 && mesaMaquina.length == 3) {
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

      evaluarJugador(contadorJugador, contadorMaquina);
      evaluarMaquina(contadorJugador, contadorMaquina);
      evaluarEmpate(contadorJugador, contadorMaquina);
      setTurnoTerminado(true);
      setNivelDeTruco(0);
    }
  };

  const evaluarJugador = (contadorJugador, contadorMaquina) => {
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

  const evaluarMaquina = (contadorJugador, contadorMaquina) => {
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
      if (mano == 0) {
        setPuntajeMaquina(puntajeMaquina++);
      } else {
        setPuntajeJugador(puntajeJugador++);
      }
    }
  };

  /* ACCIONAR DE LA MAQUINA (CUANDO ES MANO Y CUANDO MATA)*/

  useEffect(() => {
    if (turnoMaquina == true) {
      movimientoDeLaMaquina();
    }
  });

  //Primer movimiento cuando es mano
  const movimientoDeLaMaquina = () => {
    if (!envidoMaquina()) {
      let carta = manoMaquina[manoMaquina.length - 1];
      setMesaMaquina(mesaMaquina.concat(carta));
      setManoMaquina(manoMaquina.filter((c) => c.id != carta.id));
      setTurnoMaquina(false);
    }
    setJugoMaquina(true);
  };

  //Maquina canta envido
  const envidoMaquina = () => {
    if (envidoCantado == false) {
      let puntosDeEnvidoMaquina = calcularEnvido("maquina");
      let puntosDeEnvidoJugador = calcularEnvido("jugador");

      if (puntosDeEnvidoMaquina >= 31) {
        maquinaCantaFaltaEnvido(puntosDeEnvidoJugador, puntosDeEnvidoMaquina);
        return true;
      }

      if (puntosDeEnvidoMaquina > 28) {
        maquinaCantaRealEnvido(puntosDeEnvidoJugador, puntosDeEnvidoMaquina);
        return true;
      }

      if (puntosDeEnvidoMaquina >= 25) {
        maquinaCantaEnvido(puntosDeEnvidoJugador, puntosDeEnvidoMaquina);
        return true;
      }
    }
    return false;
  };

  //Accion de la maquina cuando mata
  useEffect(() => {
    if (cartaMayor == true && manoMaquina.length != 0) {
      movimientoDeLaMaquina();
      setCartaMayor(false);
    }
  });

  //___________________________________________________________________________________________________//

  /* ACCIONAR DEL USUARIO - TIRAR CARTA */
  const jugadorTiraUnaCarta = (carta) => {
    if (confirmarAccion == false) {
      respuestaAMaquina(carta);
      tirarCarta(carta);
    }
  };

  /* TIRAR UNA CARTA */
  const tirarCarta = (carta) => {
    if (jugoMaquina == false) {
      setMesaJugador(mesaJugador.concat(carta));
      setManoJugador(manoJugador.filter((j) => j.id != carta.id));
      if (manoMaquina.length != 0 && mesaMaquina.length != 3) {
        maquinaResponde(carta.cardValueRank); //aca puede evaluar cantarme truco o envido.
      }
    }
  };

  /* ACCIONAR DE LA MAQUINA - RESPUESTA A LA CARTA TIRADA DEL USUARIO */
  const maquinaResponde = (valorDeLaCartaTirada) => {
    if (!envidoMaquina()) {
      if (!maquinaCantaTruco(valorDeLaCartaTirada)) {
        const cartaMayor = manoMaquina.find(
          (carta) => carta.cardValueRank < valorDeLaCartaTirada
        );
        maquinaTiraCarta(cartaMayor);
        setEnvidoCantado(true);
      }
    }
  };

  const maquinaCantaTruco = (valorDeLaCartaTirada) => {
    let valorDeCartasEnMano = 0;
    manoMaquina.forEach((carta) => {
      valorDeCartasEnMano = valorDeCartasEnMano + carta.cardValueRank;
    });

    if (valorDeCartasEnMano > 10 && nivelDeTruco == 0) {
      setMensajeMaquina("¡Canto Truco!");
      setConfirmarAccion(true);
      localStorage.setItem("cartaJugador", valorDeLaCartaTirada);
      return true;
    } else {
      return false;
    }
  };

  /* MAQUINA TIRA UNA CARTA EN RESPUESTA A LA CARTA DEL USUARIO */
  const maquinaTiraCarta = (cartaMayor) => {
    if (cartaMayor) {
      setMesaMaquina(mesaMaquina.concat(cartaMayor));
      setManoMaquina(manoMaquina.filter((c) => c.id != cartaMayor.id));
      setCartaMayor(true);
    } else {
      let cartasOrdenadas = manoMaquina.sort(
        (c, c2) => c.cardValueRank - c2.cardValueRank
      );
      let cartaElegida = cartasOrdenadas[cartasOrdenadas.length - 1];
      setMesaMaquina(mesaMaquina.concat(cartaElegida));
      setManoMaquina(manoMaquina.filter((c) => c.id != cartaElegida.id));
    }
  };

  /* JUGADOR RESPONDE A UNA CARTA TIRADA PREVIAMENTE POR LA MAQUINA */
  const respuestaAMaquina = (carta) => {
    if (jugoMaquina == true) {
      setMesaJugador(mesaJugador.concat(carta));
      setManoJugador(manoJugador.filter((j) => j.id != carta.id));
      setEnvidoCantado(true); //en realidad no, solo que ya no se puede cantar

      let ultimaCartaDeLaMaquina = mesaMaquina[mesaMaquina.length - 1];
      if (ultimaCartaDeLaMaquina.cardValueRank > carta.cardValueRank) {
        setTurnoMaquina(false);
        setJugoMaquina(false);
      } else {
        setTurnoMaquina(true);
        if (mesaMaquina.length == 3) {
          setTurnoMaquina(false);
        }
      }
    }
  };

  /* ACCIONAR DEL USUARIO - CANTAR ENVIDO, JUNTO CON LA RESPUESTA DE LA MAQUINA */
  const maquinaNoQuiereEnvido = (puntos) => {
    setMensajeMaquina("¡No, no quiero!");
    setPuntajeJugador(puntajeJugador + puntos);
    setEnvidoCantado(true);
    setConfirmarAccion(false);
  };

  const maquinaCantaEnvido = (puntosDeEnvidoJugador, puntosDeEnvidoMaquina) => {
    setMensajeMaquina("¡Envido!");
    localStorage.setItem("envidoMaquina", puntosDeEnvidoMaquina);
    localStorage.setItem("envidoJugador", puntosDeEnvidoJugador);
    setConfirmarAccion(true);

  };

  const maquinaCantaRealEnvido = (
    puntosDeEnvidoJugador,
    puntosDeEnvidoMaquina
  ) => {
    setMensajeMaquina("¡Real Envido!");
    localStorage.setItem("envidoMaquina", puntosDeEnvidoMaquina);
    localStorage.setItem("envidoJugador", puntosDeEnvidoJugador);
    setConfirmarAccion(true);
  };

  const maquinaCantaFaltaEnvido = (
    puntosDeEnvidoJugador,
    puntosDeEnvidoMaquina
  ) => {
    setMensajeMaquina("¡Falta Envido!");
    localStorage.setItem("envidoMaquina", puntosDeEnvidoMaquina);
    localStorage.setItem("envidoJugador", puntosDeEnvidoJugador);
    setConfirmarAccion(true);
  };

  const cantarEnvido = () => {
    if (envidoCantado == false && mensajeMaquina != "¡Envido!" && mensajeMaquina != '¡Canto Truco!') {
      let puntosDeEnvidoJugador = calcularEnvido("jugador");
      let puntosDeEnvidoMaquina = calcularEnvido("maquina");
      if (puntosDeEnvidoMaquina <= 24) {
        maquinaNoQuiereEnvido(1);
        return true;
      }
      if (puntosDeEnvidoMaquina >= 32) {
        maquinaCantaFaltaEnvido(puntosDeEnvidoJugador, puntosDeEnvidoMaquina);
        return true;
      }

      if (puntosDeEnvidoMaquina > 28) {
        maquinaCantaRealEnvido(puntosDeEnvidoJugador, puntosDeEnvidoMaquina);
        return true;
      } 
      
      if (puntosDeEnvidoMaquina > 10 && puntosDeEnvidoMaquina <= 28){
        if (puntosDeEnvidoJugador > puntosDeEnvidoMaquina) {
          setPuntajeJugador(puntajeJugador + 2);
          setMensajeMaquina("¡Me ganaste!");
          setConfirmarAccion(false);
        } else {
          setMensajeMaquina("¡He ganado!");
          setPuntajeMaquina(puntajeMaquina + 2);
          setConfirmarAccion(false);
        }
        setEnvidoCantado(true);
      }
      
    }
  };

  const cantarRealEnvido = () => {
    if (
      envidoCantado == false &&
      mensajeMaquina != "¡Real Envido!" &&
      mensajeMaquina != "¡Falta Envido!" && mensajeMaquina != '¡Canto Truco!'
    ) {
      let puntosDeEnvidoJugador = calcularEnvido("jugador");
      let puntosDeEnvidoMaquina = calcularEnvido("maquina");

      if (puntosDeEnvidoMaquina <= 28) {
        maquinaNoQuiereEnvido(1);
        return true;
      }

      if (puntosDeEnvidoMaquina > 32) {
        maquinaCantaFaltaEnvido(puntosDeEnvidoJugador, puntosDeEnvidoMaquina);
        return true;
      } else {
        setMensajeMaquina("¡Quiero! " + puntosDeEnvidoMaquina);
        if (puntosDeEnvidoJugador > puntosDeEnvidoMaquina) {
          setPuntajeJugador(puntajeJugador + 3);
          setMensajeMaquina("¡Me ganaste!");
          setConfirmarAccion(false);
        } else {
          setPuntajeMaquina(puntajeMaquina + 3);
          setConfirmarAccion(false);
        }
        setEnvidoCantado(true);
      }
    }
  };

  const cantarFaltaEnvido = () => {
    if (envidoCantado == false && mensajeMaquina != "¡Falta Envido!" && mensajeMaquina != '¡Canto Truco!') {
      let valorDelJugador = calcularEnvido("jugador");
      let valorDeLaMaquina = calcularEnvido("maquina");

      if (valorDeLaMaquina < 32) {
        maquinaNoQuiereEnvido(1);
        return true;
      } else {
        if (valorDelJugador > valorDeLaMaquina) {
          setPuntajeJugador(puntajeJugador + 15);
          setMensajeMaquina("¡Me ganaste!");
          setConfirmarAccion(false);
        } else {
          setPuntajeMaquina(puntajeMaquina + 15);
          setConfirmarAccion(false);
        }
        setEnvidoCantado(true);
      }
    }
  };

  /*FUNCIONALIDADES PARA CALCULAR EL ENVIDO DE LOS JUGADORES */
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
  /*EVALUA EL ENVIDO EN CASO QUE TENGA FLOR TAMBIEN */
  const calcularPuntaje = (mano, palo) => {
    let puntaje = 0;
    let cartas = _.filter(mano, { suit: palo });

    if (cartas.length == 2 || cartas.length == 3) {
      puntaje = calcularEnvidoComun(cartas);
    }
   
    return puntaje;
  };
 
  /*ENVIDO COMUN */
  const calcularEnvidoComun = (cartas) => {
    let puntaje = 20;
    cartas.forEach((carta) => {
      puntaje = puntaje + carta.envidoCardValue;
    });
    return puntaje;
  };
  //______________________________________________________________________________________

  //LOGICA DEL TRUCO (CANTADO POR EL USUARIO Y LA RESPUESTA DE LA MAQUINA).
  const cantarTruco = () => {
    if (mensajeMaquina != "¡Canto Truco!" && mensajeMaquina != '¡Envido!') {
      let cartasEnManoMaquina = manoMaquina.length;
      let puntajeDeCartasMaquina = sumarPuntosDeLaManoMaquina();
 
      if (cartasEnManoMaquina == 3) {
        if (puntajeDeCartasMaquina >= 30) {
          maquinaNoQuiereTruco(1);
        } else {
          if (puntajeDeCartasMaquina <= 15) {
            maquinaQuiereTruco(2, "Re Truco");
          } else {
            maquinaQuiereTruco(1, "Truco");
          }
        }
      }

      if (cartasEnManoMaquina == 2) {
        if (puntajeDeCartasMaquina >= 16) {
          maquinaNoQuiereTruco(1);
        } else {
          if (puntajeDeCartasMaquina <= 10) {
            maquinaQuiereTruco(2, "Re Truco"); //canta re truco
          } else {
            maquinaQuiereTruco(1, "Truco"); //ACEPTA
          }
        }
      }

      if (cartasEnManoMaquina == 1) {
        if (puntajeDeCartasMaquina >= 10) {
          maquinaNoQuiereTruco(1);
        } else {
          if (puntajeDeCartasMaquina <= 5) {
            maquinaQuiereTruco(2, "Re Truco"); //canta re truco
          } else {
            maquinaQuiereTruco(1, "Truco");
          }
        }
      }

      if (cartasEnManoMaquina == 0) {
        let cartaUtilma = mesaMaquina[mesaMaquina.length - 1];
        if (cartaUtilma.cardValueRank >= 8) {
          maquinaNoQuiereTruco(1);
        } else {
          if (puntajeDeCartasMaquina <= 5) {
            maquinaQuiereTruco(2, "Re Truco");
          } else {
            maquinaQuiereTruco(1, "Truco");
          }
        }
      }
    }
  };

  const cantarReTruco = () => {
    if (mensajeMaquina == "¡Canto Truco!") {
      let cartasEnManoMaquina = manoMaquina.length;
      let puntajeDeCartasMaquina = sumarPuntosDeLaManoMaquina();

      if (cartasEnManoMaquina == 3) {
        if (puntajeDeCartasMaquina >= 25) {
          maquinaNoQuiereTruco(2);
        } else {
          if (puntajeDeCartasMaquina < 10) {
            maquinaQuiereTruco(3, "Vale Cuatro");
          } else {
            setMensajeMaquina("¡Quiero!");
            setNivelDeTruco(2);
            setTurnoMaquina(true)
          }
        }
      }

      if (cartasEnManoMaquina == 2) {
        if (puntajeDeCartasMaquina >= 13) {
          maquinaNoQuiereTruco(2);
        } else {
          if (puntajeDeCartasMaquina < 5) {
            maquinaQuiereTruco(3, "Vale Cuatro");
          } else {
            setMensajeMaquina("¡Quiero!");
            setNivelDeTruco(2);
          }
        }
      }

      if (cartasEnManoMaquina == 1) {
        if (puntajeDeCartasMaquina >= 8) {
          maquinaNoQuiereTruco(2);
        } else {
          if (puntajeDeCartasMaquina < 2) {
            maquinaQuiereTruco(3, "Vale Cuatro");
          } else {
            setMensajeMaquina("¡Quiero!");
            setNivelDeTruco(2);
          }
        }
      }

      if (cartasEnManoMaquina == 0) {
        let cartaUtilma = mesaMaquina[mesaMaquina.length - 1];
        if (cartaUtilma.cardValueRank >= 5) {
          maquinaQuiereTruco(2);
        } else {
          if (puntajeDeCartasMaquina < 2) {
            maquinaQuiereTruco(3, "Vale Cuatro");
          } else {
            setMensajeMaquina("¡Quiero!");
            setNivelDeTruco(2);
          }
        }
      }
    }
  };

  const cantarValeCuatro = () => {
    if (nivelDeTruco == 2 && mensajeMaquina == "¡Quiero Re Truco!") {
      let cartasEnManoMaquina = manoMaquina.length;
      let puntajeDeCartasMaquina = sumarPuntosDeLaManoMaquina();

      if (cartasEnManoMaquina == 3) {
        if (puntajeDeCartasMaquina >= 20) {
          maquinaNoQuiereTruco(3);
        } else {
          maquinaQuiereTruco(3);
        }
      }

      if (cartasEnManoMaquina == 2) {
        if (puntajeDeCartasMaquina >= 10) {
          maquinaNoQuiereTruco(3);
        } else {
          maquinaQuiereTruco(3);
        }
      }

      if (cartasEnManoMaquina == 1) {
        if (puntajeDeCartasMaquina >= 5) {
          maquinaNoQuiereTruco(3);
        } else {
          maquinaQuiereTruco(3);
        }
      }

      if (cartasEnManoMaquina == 0) {
        let cartaUtilma = mesaMaquina[mesaMaquina.length - 1];

        if (cartaUtilma.cardValueRank >= 5) {
          maquinaQuiereTruco(3);
        } else {
          maquinaNoQuiereTruco(3);
        }
      }
    }
  };

  const maquinaNoQuiereTruco = (puntos) => {
    setMensajeMaquina("¡No quiero!");
    setPuntajeJugador(puntajeJugador + puntos);
    setTurnoTerminado(true);
    setMesaJugador([]);
    setMesaMaquina([]);
  };

  const maquinaQuiereTruco = (nivelDeTruco, tipo) => {
    if (tipo == "Truco") {
      setMensajeMaquina("¡Quiero!");
      setNivelDeTruco(nivelDeTruco);
      setConfirmarAccion(false)
      setEnvidoCantado(true)
    }
    if (tipo == "Re Truco") {
      setMensajeMaquina("¡Quiero Re Truco!");
      setNivelDeTruco(nivelDeTruco);
      setConfirmarAccion(false)
      setEnvidoCantado(true)

    }

    if (tipo == "Vale Cuatro") {
      setMensajeMaquina("¡Quiero Vale Cuatro!");
      setNivelDeTruco(nivelDeTruco);
      setConfirmarAccion(false)
      setEnvidoCantado(true)

    }
  };

  const sumarPuntosDeLaManoMaquina = () => {
    let puntaje = 0;
    manoMaquina.forEach((element) => {
      puntaje = puntaje + element.cardValueRank;
    });
    return puntaje;
  };

  //LOGICA DEL QUIERO NO QUIERO PARA LAS DIFERENTES ACCIONES
  const quiero = () => {
    if (confirmarAccion == true) {
      if (mensajeMaquina == "¡Canto Truco!") {
        aceptarTruco(1);
      }
      if (mensajeMaquina == "¡Quiero Re Truco!") {
        aceptarTruco(2);
      }
      if (mensajeMaquina == "¡Quiero Vale Cuatro!") {
        aceptarTruco(3);
      }
      if (mensajeMaquina == "¡Envido!") {
        if(mesaJugador.length == 1){
          maquinaTiraCarta();
        }
        aceptarEnvido(2);
      }
      if (mensajeMaquina == "¡Real Envido!") {
        if(mesaJugador.length == 1){
          maquinaTiraCarta();
        }
        aceptarEnvido(3);
      }
      if (mensajeMaquina == "¡Falta Envido!") {
        aceptarEnvido(15);
      }
    }
  };

  const noQuiero = () => {
    if (confirmarAccion == true) {
      if (
        mensajeMaquina == "¡Envido!" ||
        mensajeMaquina == "¡Real Envido!" ||
        mensajeMaquina == "¡Falta Envido!"
      ) {
        setConfirmarAccion(false);
        setEnvidoCantado(true);
        setPuntajeMaquina(puntajeMaquina + 1);
        setMensajeMaquina("");
        if(mesaJugador.length == 1){
          maquinaTiraCarta();
        }
      }

      if (mensajeMaquina == "¡Canto Truco!") {
        setPuntajeMaquina(puntajeMaquina + 1);
        setTurnoTerminado(true);
        repartir();
      }
      if (mensajeMaquina == "¡Quiero Re Truco!") {
        setPuntajeMaquina(puntajeMaquina + 2);
        setTurnoTerminado(true);
        repartir();
      }

      if (mensajeMaquina == "¡Quiero Vale Truco!") {
        setPuntajeMaquina(puntajeMaquina + 3);
        setTurnoTerminado(true);
        repartir();
      }
      setConfirmarAccion(false);
    }
  };

  const aceptarTruco = (nivelDeTruco) => {
    let valorDeLaCartaTirada = localStorage.getItem("cartaJugador");
    const cartaMayor = manoMaquina.find(
      (carta) => carta.cardValueRank < valorDeLaCartaTirada
    );
    maquinaTiraCarta(cartaMayor);
    setConfirmarAccion(false);
    setNivelDeTruco(nivelDeTruco);
    setEnvidoCantado(true);
    setMensajeMaquina("");
  };

  const aceptarEnvido = (valor) => {
    setEnvidoCantado(true);
    setConfirmarAccion(false);
    let envidoMaquina = parseInt(localStorage.getItem("envidoMaquina"));
    let envidoJugador = parseInt(localStorage.getItem("envidoJugador"));

    if (envidoJugador > envidoMaquina) {
      setPuntajeJugador(puntajeJugador + valor);
      setMensajeMaquina(envidoMaquina + ' Ganaste');

    } else {
      setPuntajeMaquina(puntajeMaquina + valor);
      setMensajeMaquina(envidoMaquina + ' He ganado');

    }
  };

  const meVoyAlMaso = () => {
    setMesaJugador([]);
    setMesaMaquina([]);
    setManoJugador([]);
    setManoMaquina([]);
    setTurnoTerminado(true);
    repartir();

    if (nivelDeTruco == 0) {
      setPuntajeMaquina(puntajeMaquina + 1);
    }
    if (nivelDeTruco == 1) {
      setPuntajeMaquina(puntajeMaquina + 2);
    }
    if (nivelDeTruco == 2) {
      setPuntajeMaquina(puntajeMaquina + 3);
    }

    if (nivelDeTruco == 4) {
      setPuntajeMaquina(puntajeMaquina + 4);
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
      setEnvidoCantado(false);
      setTurnoTerminado(false); //se setea en false porque comenzo otra jugada.
      setJugoMaquina(false);
      setConfirmarAccion(false);

      if (mano == 0) {
        setMano(1);
        setTurnoMaquina(false);
      } else {
        setMano(0);
        setTurnoMaquina(true);
      }

      setMensajeMaquina("");
      setNivelDeTruco(0);
    }
  };

  //SE EJECUTA EN CADA RENDERIZADO PARA VER SI ALGUNO LLEGO A 15 PUNTOS.
  const evaluarPosibleGanador = () => {
    if (puntajeJugador >= 15) {
      Swal.fire("Muy bien, has ganado");
      setPuntajeJugador(0);
      setPuntajeMaquina(0);
      setTurnoTerminado(true);
      setConfirmarAccion(false);
      setJugoMaquina(false);
      setNivelDeTruco(0);
    }
    if (puntajeMaquina >= 15) {
      Swal.fire("Has perdido :(");
      setPuntajeJugador(0);
      setPuntajeMaquina(0);
      setTurnoTerminado(true);
      setConfirmarAccion(false);
      setJugoMaquina(false);
      setNivelDeTruco(0);
    }
  };

  //INFORMACION QUE VA A LA VISTA, RECORRO LOS ARRAY ACA EN LUGAR DE EN EL RETURN.
  const manoJugadorLista = manoJugador.map((carta) => (
    <div className="mano" key={carta.id}>
      <img src={carta.image} width={90}></img>
      <button className="botonTirar" onClick={() => jugadorTiraUnaCarta(carta)}>
        Tirar
      </button>
    </div>
  ));

  const manoMaquinaLista = manoMaquina.map((carta) => (
    <img key={carta.id} src='https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-dorso-minimalart.png' width={90}></img>
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
          <button className="botonesDeAccion" onClick={() => quiero()}>
            Quiero
          </button>
          <button
            className="botonesDeAccion"
            style={{ backgroundColor: "#b6a616" }}
            onClick={() => meVoyAlMaso()}
          >
            Me voy al Mazo
          </button>
          <button className="botonesDeAccion" onClick={() => noQuiero()}>
            No Quiero
          </button>
        </div>

        <div className="envidoIA">
          <button className="botonesDeAccion" onClick={() => cantarEnvido()}>
            Envido
          </button>
          <button
            className="botonesDeAccion"
            onClick={() => cantarRealEnvido()}
          >
            Real Envido
          </button>
          <button
            className="botonesDeAccion"
            onClick={() => cantarFaltaEnvido()}
          >
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
          <div style={{ backgroundColor: "#221f07", height: "20px" }}></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignContent: "center",
            }}
          >
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          alignItems: "center",
        }}
      >
        <div className="cartasDelaMaquina">{manoMaquinaLista}</div>
        <div className="cuadroDeDialogo">{mensajeMaquina}</div>
      </div>
    </div>
  );
};

export default JuegoIA;
