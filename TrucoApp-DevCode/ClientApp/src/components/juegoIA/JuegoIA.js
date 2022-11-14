import React, { useState, useEffect } from "react";
import { barajar } from "./cartas";
import _ from "lodash";
import "./juegoIA.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { CDBSidebarMenuItem } from "cdbreact";

const JuegoIA = () => {
  const cartas = barajar();
  //Jugador
  const [manoJugador, setManoJugador] = useState(cartas[0]);
  const [mesaJugador, setMesaJugador] = useState([]);
  const [puntajeJugador, setPuntajeJugador] = useState(0);
  const [mensajeJugador, setMensajeJugador] = useState("");

  //Maquina
  const [manoMaquina, setManoMaquina] = useState(cartas[1]);
  const [mesaMaquina, setMesaMaquina] = useState([]);
  const [puntajeMaquina, setPuntajeMaquina] = useState(0);
  const [mensajeMaquina, setMensajeMaquina] = useState("");
  const randomUsuarioMaquina = Math.round(Math.random() * 1000);
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
  const [elQueComienza, setElQueComienza] = useState();
  /* 0 = MAQUINA ES MANO */

  /*DEFINE EL JUGADOR QUE COMIENZA, SOLO SE EJECUTA UNA VEZ*/
  useEffect(() => {
    let elquecomienza = Math.round(Math.random() * 1);
    setElQueComienza(elquecomienza);
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
    if (
      manoJugador.length == 0 &&
      manoMaquina.length == 0 &&
      mesaJugador.length == 3 &&
      mesaMaquina.length == 3
    ) {
      //J M E
      let bazaUno = bazaGanador(0);
      let bazaDos = bazaGanador(1);
      let bazaTres = bazaGanador(2);

      let ganador = ganadorConParda(bazaUno, bazaDos, bazaTres);
      if (ganador === "Jugador") {
        ganaJugador();
      } else if (ganador === "Maquina") {
        ganaMaquina();
      } else {
        ganaMano();
      }
      setTurnoTerminado(true);
      setNivelDeTruco(0);
    }

    if (
      manoJugador.length === 1 &&
      manoMaquina.length === 1 &&
      mesaJugador.length === 2 &&
      mesaMaquina.length === 2
    ) {

      let bazaUno = bazaGanador(0);
      let bazaDos = bazaGanador(1);

      if(bazaUno === 'J' && bazaDos === 'J'){
        ganaJugador();
      }

      if(bazaUno === 'M' && bazaDos === 'M' ){
        ganaMaquina();
      }
    }
  };

  const bazaGanador = (index) => {
    let bazaUno = "";
    if (mesaJugador[index].cardValueRank < mesaMaquina[index].cardValueRank) {
      bazaUno = "J"; //Jugador
    } else if (
      mesaJugador[index].cardValueRank > mesaMaquina[index].cardValueRank
    ) {
      bazaUno = "M"; //Maquina
    } else {
      bazaUno = "E"; //Empate
    }
    return bazaUno;
  };

  const ganadorConParda = (bazaUno, bazaDos, bazaTres) => {
    //EVALUA LA MEJOR MANO DEL JUGADOR
    if (bazaUno === "J" && bazaDos === "J" && bazaTres === "J") {
      return "Jugador";
    }

    if (bazaUno === "M" && bazaDos === "J" && bazaTres === "J") {
      return "Jugador";
    }

    if (bazaUno === "J" && bazaDos === "M" && bazaTres === "J") {
      return "Jugador";
    }

    if (bazaUno === "J" && bazaDos === "J" && bazaTres === "M") {
      return "Jugador";
    }

    //EVALUA LA MEJOR MANO DE LA MAQUINA
    if (bazaUno === "M" && bazaDos === "M" && bazaTres === "M") {
      return "Maquina";
    }

    if (bazaUno === "M" && bazaDos === "J" && bazaTres === "M") {
      return "Maquina";
    }

    if (bazaUno === "M" && bazaDos === "M" && bazaTres === "J") {
      return "Maquina";
    }

    //EVALUA LAS PARDAS
    if (bazaUno === "E" && bazaDos === "E" && bazaTres === "E") {
      return "Mano";
    }

    if (bazaUno === "E" && bazaDos === "E" && bazaTres === "M") {
      return "Maquina";
    }

    if (bazaUno === "E" && bazaDos === "M" && bazaTres === "E") {
      return "Maquina";
    }

    if (bazaUno === "M" && bazaDos === "E" && bazaTres === "E") {
      return "Maquina";
    }

    if (bazaUno === "E" && bazaDos === "E" && bazaTres === "J") {
      return "Jugador";
    }

    if (bazaUno === "E" && bazaDos === "J" && bazaTres === "E") {
      return "Jugador";
    }

    if (bazaUno === "J" && bazaDos === "E" && bazaTres === "E") {
      return "Jugador";
    }

    if (bazaUno === "E" && bazaDos === "J" && bazaTres === "J") {
      return "Jugador";
    }

    if (bazaUno === "J" && bazaDos === "E" && bazaTres === "J") {
      return "Jugador";
    }

    if (bazaUno === "J" && bazaDos === "J" && bazaTres === "E") {
      return "Jugador";
    }

    if (bazaUno === "E" && bazaDos === "M" && bazaTres === "M") {
      return "Maquina";
    }

    if (bazaUno === "M" && bazaDos === "E" && bazaTres === "M") {
      return "Maquina";
    }

    if (bazaUno === "M" && bazaDos === "M" && bazaTres === "E") {
      return "Maquina";
    }

    if (bazaUno === "E" && bazaDos === "M" && bazaTres === "J") {
      return "Maquina";
    }

    if (bazaUno === "E" && bazaDos === "J" && bazaTres === "M") {
      return "Jugador";
    }

    if (bazaUno === "M" && bazaDos === "E" && bazaTres === "J") {
      return "Maquina";
    }

    if (bazaUno === "J" && bazaDos === "E" && bazaTres === "M") {
      return "Jugador";
    }

    if (bazaUno === "M" && bazaDos === "J" && bazaTres === "E") {
      return "Maquina";
    }

    if (bazaUno === "J" && bazaDos === "M" && bazaTres === "E") {
      return "Jugador";
    }
  };

  const ganaJugador = () => {
    if (nivelDeTruco == 0) {
      //NO TRUCO
      setPuntajeJugador(puntajeJugador + 1);
      setTurnoTerminado(true);
      

    }
    if (nivelDeTruco == 1) {
      // TRUCO
      setPuntajeJugador(puntajeJugador + 2);
      setTurnoTerminado(true);

    }
    if (nivelDeTruco == 2) {
      // RE TRUCO
      setPuntajeJugador(puntajeJugador + 3);
      setTurnoTerminado(true);

    }
    if (nivelDeTruco == 3) {
      // VALE CUATRO
      setPuntajeJugador(puntajeJugador + 4);
      setTurnoTerminado(true);

    }
  };

  const ganaMaquina = () => {
    if (nivelDeTruco == 0) {
      //NO TRUCO
      setPuntajeMaquina(puntajeMaquina + 1);
      setTurnoTerminado(true);

    }
    if (nivelDeTruco == 1) {
      // TRUCO
      setPuntajeMaquina(puntajeMaquina + 2);
      setTurnoTerminado(true);

    }
    if (nivelDeTruco == 2) {
      // RE TRUCO
      setPuntajeMaquina(puntajeMaquina + 3);
      setTurnoTerminado(true);

    }
    if (nivelDeTruco == 3) {
      // VALE CUATRO
      setPuntajeMaquina(puntajeMaquina + 4);
      setTurnoTerminado(true);
      
    }
  };

  const ganaMano = () => {
    if (elQueComienza === 0) {
      ganaMaquina();
    } else {
      ganaJugador();
    }
  };

  /* ACCIONAR DE LA MAQUINA (CUANDO ES MANO Y CUANDO MATA)*/

  useEffect(() => {
    if (turnoMaquina == true) {
      movimientoDeLaMaquina();
    }
  });

  const movimientoDeLaMaquina = () => {
    if (!envidoMaquina()) {
      let carta = manoMaquina[manoMaquina.length - 1];
      setMesaMaquina(mesaMaquina.concat(carta));
      setManoMaquina(manoMaquina.filter((c) => c.id != carta.id));
      setTurnoMaquina(false);
      maquinaCantaTruco();
    }
    setTurnoMaquina(false);
    setJugoMaquina(true);
  };

  //Maquina canta envido
  const envidoMaquina = () => {
    if (envidoCantado == false) {
      let puntosDeEnvidoMaquina = calcularEnvido("maquina");
      let puntosDeEnvidoJugador = calcularEnvido("jugador");

      if (puntosDeEnvidoMaquina > 31) {
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
        maquinaCantaTruco();
      }
    }
  };

  const maquinaCantaTruco = (valorDeLaCartaTirada) => {
    let valorDeCartasEnMano = sumarPuntosDeLaManoMaquina();
    let cartasEnManoMaquina = manoMaquina.length;

    if (
      cartasEnManoMaquina === 2 &&
      nivelDeTruco == 0 &&
      valorDeCartasEnMano < 25
    ) {
      setMensajeMaquina("CANTO TRUCO");
      setConfirmarAccion(true);
      setEnvidoCantado(true);
      localStorage.setItem("cartaJugador", valorDeLaCartaTirada);
      return true;
    }

    if (
      cartasEnManoMaquina === 1 &&
      nivelDeTruco == 0 &&
      valorDeCartasEnMano < 12
    ) {
      setMensajeMaquina("CANTO TRUCO");
      setConfirmarAccion(true);
      setEnvidoCantado(true);
      localStorage.setItem("cartaJugador", valorDeLaCartaTirada);
      return true;
    }
    return false;
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
      maquinaCantaTruco();
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
    setMensajeMaquina("NO QUIERO");
    setTimeout(() => {
      setMensajeMaquina("");
    }, 1500);
    setPuntajeJugador(puntajeJugador + puntos);
    setEnvidoCantado(true);
    setConfirmarAccion(false);

    if (
      mesaMaquina.length == 0 &&
      mesaJugador.length == 0 &&
      elQueComienza == 0
    ) {
      maquinaTiraCarta();
    }
    if (
      mesaMaquina.length == 0 &&
      mesaJugador.length == 1 &&
      elQueComienza == 1
    ) {
      maquinaTiraCarta();
    }
  };

  const maquinaCantaEnvido = (puntosDeEnvidoJugador, puntosDeEnvidoMaquina) => {
    setMensajeMaquina("ENVIDO");
    localStorage.setItem("envidoMaquina", puntosDeEnvidoMaquina);
    localStorage.setItem("envidoJugador", puntosDeEnvidoJugador);
    setConfirmarAccion(true);
  };

  const maquinaCantaRealEnvido = (
    puntosDeEnvidoJugador,
    puntosDeEnvidoMaquina
  ) => {
    setMensajeMaquina("REAL ENVIDO");
    localStorage.setItem("envidoMaquina", puntosDeEnvidoMaquina);
    localStorage.setItem("envidoJugador", puntosDeEnvidoJugador);
    setConfirmarAccion(true);
  };

  const maquinaCantaFaltaEnvido = (
    puntosDeEnvidoJugador,
    puntosDeEnvidoMaquina
  ) => {
    setMensajeMaquina("FALTA ENVIDO");
    localStorage.setItem("envidoMaquina", puntosDeEnvidoMaquina);
    localStorage.setItem("envidoJugador", puntosDeEnvidoJugador);
    setConfirmarAccion(true);
  };

  const cantarEnvido = () => {
    if (
      envidoCantado == false &&
      mensajeMaquina != "ENVIDO" &&
      mensajeMaquina != "REAL ENVIDO" &&
      mensajeMaquina != "FALTA ENVIDO"
    ) {
      setEnvidoCantado(true);

      setMensajeJugador("ENVIDO");
      setTimeout(() => {
        setMensajeJugador("");
      }, 1500);

      let puntosDeEnvidoJugador = calcularEnvido("jugador");
      let puntosDeEnvidoMaquina = calcularEnvido("maquina");

      if (puntosDeEnvidoMaquina <= 23) {
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

      if (puntosDeEnvidoMaquina >= 24 && puntosDeEnvidoMaquina <= 28) {
        evaluarGanadorDeEnvido(puntosDeEnvidoMaquina, puntosDeEnvidoJugador, 2);
      }
    }
  };

  const cantarRealEnvido = () => {
    if (
      envidoCantado == false &&
      mensajeMaquina != "REAL ENVIDO" &&
      mensajeMaquina != "FALTA ENVIDO"
    ) {
      setEnvidoCantado(true);

      setMensajeJugador("REAL ENVIDO");
      setTimeout(() => {
        setMensajeJugador("");
      }, 1500);

      let puntosDeEnvidoJugador = calcularEnvido("jugador");
      let puntosDeEnvidoMaquina = calcularEnvido("maquina");

      if (puntosDeEnvidoMaquina <= 28) {
        maquinaNoQuiereEnvido(1);
        return true;
      }

      if (puntosDeEnvidoMaquina >= 32) {
        maquinaCantaFaltaEnvido(puntosDeEnvidoJugador, puntosDeEnvidoMaquina);
        return true;
      }

      if (puntosDeEnvidoMaquina > 28 && puntosDeEnvidoMaquina < 32) {
        evaluarGanadorDeEnvido(puntosDeEnvidoMaquina, puntosDeEnvidoJugador, 3);
      }
    }
  };

  const cantarFaltaEnvido = () => {
    if (envidoCantado == false && mensajeMaquina != "FALTA ENVIDO") {
      setMensajeJugador("FALTA ENVIDO");
      setTimeout(() => {
        setMensajeJugador("");
      }, 1500);

      let puntosDeEnvidoJugador = calcularEnvido("jugador");
      let puntosDeEnvidoMaquina = calcularEnvido("maquina");

      if (puntosDeEnvidoMaquina < 32) {
        maquinaNoQuiereEnvido(1);
        return true;
      }

      if (puntosDeEnvidoMaquina >= 32) {
        evaluarGanadorDeEnvido(
          puntosDeEnvidoMaquina,
          puntosDeEnvidoJugador,
          15
        );
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

    if (cartas.length == 2) {
      puntaje = calcularEnvidoComun(cartas);
    }

    if (cartas.length == 3) {
      let cartasOrdenadas = cartas.sort(function (a, b) {
        return a.number < b.number ? 1 : a.number > b.number ? -1 : 0;
      });

      if (
        cartasOrdenadas.find((carta) => carta.number > 9 && carta.number < 13)
      ) {
        puntaje = calcularEnvidoComun(cartasOrdenadas);
      } else {
        cartasOrdenadas.pop();
        puntaje = calcularEnvidoComun(cartasOrdenadas);
      }
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

  const evaluarGanadorDeEnvido = (
    puntosMaquina,
    puntosJugador,
    puntosParaElGanador
  ) => {
    if (puntosJugador > puntosMaquina) {
      setPuntajeJugador(puntajeJugador + puntosParaElGanador);
      setMensajeMaquina("SON BUENAS");
      setTimeout(() => {
        setMensajeMaquina("");
      }, 1500);
      setConfirmarAccion(false);
    } else {
      setPuntajeMaquina(puntajeMaquina + puntosParaElGanador);
      setMensajeMaquina(puntosMaquina + " GANÉ");
      setTimeout(() => {
        setMensajeMaquina("");
      }, 1500);
      setConfirmarAccion(false);
    }
  };
  //______________________________________________________________________________________

  //LOGICA DEL TRUCO (CANTADO POR EL USUARIO Y LA RESPUESTA DE LA MAQUINA).
  const cantarTruco = () => {
    if (
      mensajeMaquina != "CANTO TRUCO" &&
      mensajeMaquina != "QUIERO RE TRUOO" &&
      mensajeMaquina != "QUIERO VALE CUATRO" &&
      mensajeMaquina != "ENVIDO" &&
      mensajeMaquina != "REAL ENVIDO" &&
      mensajeMaquina != "FALTA ENVIDO" &&
      mensajeMaquina != "SI QUIERO"
    ) {
      let cartasEnManoMaquina = manoMaquina.length;
      let puntajeDeCartasMaquina = sumarPuntosDeLaManoMaquina();

      if (cartasEnManoMaquina == 3) {
        if (puntajeDeCartasMaquina > 30) {
          maquinaNoQuiereTruco(1);
        } else {
          if (puntajeDeCartasMaquina <= 18) {
            maquinaQuiereReTruco();
          } else {
            maquinaAceptaTruco(1);
          }
        }
      }

      if (cartasEnManoMaquina == 2) {
        if (puntajeDeCartasMaquina > 22) {
          maquinaNoQuiereTruco(1);
        } else {
          if (puntajeDeCartasMaquina < 11) {
            maquinaQuiereReTruco();
          } else {
            maquinaAceptaTruco(1);
          }
        }
      }

      if (cartasEnManoMaquina == 1) {
        if (puntajeDeCartasMaquina > 10) {
          maquinaNoQuiereTruco(1);
        } else {
          if (puntajeDeCartasMaquina < 5) {
            maquinaQuiereReTruco();
          } else {
            maquinaAceptaTruco(1);
          }
        }
      }

      if (cartasEnManoMaquina == 0) {
        let cartaUtilma = mesaMaquina[mesaMaquina.length - 1];
        if (cartaUtilma.cardValueRank > 6) {
          maquinaNoQuiereTruco(1);
        } else {
          if (puntajeDeCartasMaquina < 5) {
            maquinaQuiereReTruco();
          } else {
            maquinaAceptaTruco(1);
          }
        }
      }
      setMensajeJugador("TRUCO");
    }
  };

  const cantarReTruco = () => {
    if (mensajeMaquina == "CANTO TRUCO") {
      if (
        mensajeMaquina != "QUIERO RE TRUCO" &&
        mensajeMaquina != "QUIERO VALE CUATRO"
      ) {
        let cartasEnManoMaquina = manoMaquina.length;
        let puntajeDeCartasMaquina = sumarPuntosDeLaManoMaquina();

        if (cartasEnManoMaquina == 3) {
          if (puntajeDeCartasMaquina > 20) {
            maquinaNoQuiereTruco(2);
          } else {
            if (puntajeDeCartasMaquina <= 12) {
              maquinaQuiereValeCuatro();
            } else {
              maquinaAceptaTruco(2);
            }
          }
        }

        if (cartasEnManoMaquina == 2) {
          if (puntajeDeCartasMaquina > 12) {
            maquinaNoQuiereTruco(2);
          } else {
            if (puntajeDeCartasMaquina <= 7) {
              maquinaQuiereValeCuatro();
            } else {
              maquinaAceptaTruco(2);
            }
          }
        }

        if (cartasEnManoMaquina == 1) {
          if (puntajeDeCartasMaquina > 6) {
            maquinaNoQuiereTruco(2);
          } else {
            if (puntajeDeCartasMaquina < 4) {
              maquinaQuiereValeCuatro();
            } else {
              maquinaAceptaTruco(2);
            }
          }
        }

        if (cartasEnManoMaquina == 0) {
          let cartaUtilma = mesaMaquina[mesaMaquina.length - 1];
          if (cartaUtilma.cardValueRank > 6) {
            maquinaNoQuiereTruco(2);
          } else {
            if (puntajeDeCartasMaquina < 4) {
              maquinaQuiereValeCuatro();
            } else {
              maquinaAceptaTruco(2);
            }
          }
        }
        setMensajeJugador("RE TRUCO");
      }
    }
  };

  const cantarValeCuatro = () => {
    if (mensajeMaquina == "QUIERO RE TRUCO") {
      if (
        mensajeMaquina != "CANTO TRUCO" &&
        mensajeMaquina != "QUIERO VALE CUATRO"
      ) {
        let cartasEnManoMaquina = manoMaquina.length;
        let puntajeDeCartasMaquina = sumarPuntosDeLaManoMaquina();

        if (cartasEnManoMaquina == 3) {
          if (puntajeDeCartasMaquina > 14) {
            maquinaNoQuiereTruco(3);
          }
          if (puntajeDeCartasMaquina <= 14) {
            maquinaAceptaTruco(3);
          }
        }

        if (cartasEnManoMaquina == 2) {
          if (puntajeDeCartasMaquina > 6) {
            maquinaNoQuiereTruco(3);
          }
          if (puntajeDeCartasMaquina <= 6) {
            maquinaAceptaTruco(3);
          }
        }

        if (cartasEnManoMaquina == 1) {
          if (puntajeDeCartasMaquina >= 3) {
            maquinaNoQuiereTruco(3);
          }
          if (puntajeDeCartasMaquina < 3) {
            maquinaAceptaTruco(3);
          }
        }

        if (cartasEnManoMaquina == 0) {
          let cartaUtilma = mesaMaquina[mesaMaquina.length - 1];
          if (cartaUtilma.cardValueRank >= 3) {
            maquinaNoQuiereTruco(3);
          }
          if (cartaUtilma.cardValueRank < 3) {
            maquinaAceptaTruco(3);
          }
        }
        setMensajeJugador("VALE CUATRO");
      }
    }
  };

  const maquinaNoQuiereTruco = (puntos) => {
    setMensajeMaquina("NO QUIERO");
    setPuntajeJugador(puntajeJugador + puntos);
    setTurnoTerminado(true);
    setMesaJugador([]);
    setMesaMaquina([]);
  };

  const maquinaAceptaTruco = (nivelDeTruco) => {
    setMensajeMaquina("SI QUIERO");
    setNivelDeTruco(nivelDeTruco);
    setConfirmarAccion(false);
    setEnvidoCantado(true);
    if (mesaJugador.length > mesaMaquina.length) {
      maquinaTiraCarta();
    }
  };

  const maquinaQuiereReTruco = () => {
    setMensajeMaquina("");
    setMensajeMaquina("QUIERO RE TRUCO");
    setConfirmarAccion(true);
    setEnvidoCantado(true);
  };

  const maquinaQuiereValeCuatro = () => {
    setMensajeMaquina("QUIERO VALE CUATRO");
    setConfirmarAccion(true);
    setEnvidoCantado(true);
  };

  const sumarPuntosDeLaManoMaquina = () => {
    let puntaje = 0;
    manoMaquina.forEach((element) => {
      puntaje = puntaje + element.cardValueRank;
    });
    return puntaje;
  };

  //LOGICA DEL QUIERO NO QUIERO PARA LAS DIFERENTES ACCIONES - jugador
  const quiero = () => {
    if (confirmarAccion == true) {
      if (mensajeMaquina == "CANTO TRUCO") {
        aceptarTruco(1);
        setMensajeJugador("QUIERO");
      }
      if (mensajeMaquina == "QUIERO RE TRUCO") {
        aceptarTruco(2);
        setMensajeJugador("¡QUIERO!");
      }
      if (mensajeMaquina == "QUIERO VALE CUATRO") {
        aceptarTruco(3);
        setMensajeJugador("¡SI, QUIERO!");
      }
      if (mensajeMaquina == "ENVIDO") {
        if (mesaJugador.length == 1) {
          maquinaTiraCarta();
        }
        aceptarEnvido(2);
      }
      if (mensajeMaquina == "REAL ENVIDO") {
        if (mesaJugador.length == 1) {
          maquinaTiraCarta();
        }
        aceptarEnvido(3);
      }
      if (mensajeMaquina == "FALTA ENVIDO") {
        if (mesaJugador.length == 1) {
          maquinaTiraCarta();
        }
        aceptarEnvido(15);
      }
    }
  };

  const noQuiero = () => {
    if (confirmarAccion == true) {
      if (
        mensajeMaquina == "ENVIDO" ||
        mensajeMaquina == "REAL ENVIDO" ||
        mensajeMaquina == "FALTA ENVIDO"
      ) {
        rechazarEnvido();
        setEnvidoCantado(true);
      }
      if (mensajeMaquina == "CANTO TRUCO") {
        rechazarTruco(1);
      }
      if (mensajeMaquina == "QUIERO RE TRUCO") {
        rechazarTruco(2);
      }
      if (mensajeMaquina == "QUIERO VALE CUATRO") {
        rechazarTruco(3);
      }
      setConfirmarAccion(false);
      setMensajeJugador("NO QUIERO");
    }
  };

  const aceptarTruco = (nivelDeTruco) => {
    if (localStorage.getItem("cartaJugador")) {
      if (mesaMaquina.length > mesaJugador.length) {
        setTurnoMaquina(false);
        setConfirmarAccion(false);
        setNivelDeTruco(nivelDeTruco);
        setEnvidoCantado(true);
        localStorage.clear();
        return true;
      }

      let valorDeLaCartaTirada = localStorage.getItem("cartaJugador");
      const cartaMayor = manoMaquina.find(
        (carta) => carta.cardValueRank < valorDeLaCartaTirada
      );
      maquinaTiraCarta(cartaMayor);
      setConfirmarAccion(false);
      setNivelDeTruco(nivelDeTruco);
      setEnvidoCantado(true);
      localStorage.clear();
    } else {
      setNivelDeTruco(nivelDeTruco);
      localStorage.clear();
      setEnvidoCantado(true);
      setConfirmarAccion(false);
    }
  };

  const aceptarEnvido = (valor) => {
    setEnvidoCantado(true);
    setConfirmarAccion(false);
    setTurnoMaquina(true);
    let envidoMaquina = parseInt(localStorage.getItem("envidoMaquina"));
    let envidoJugador = parseInt(localStorage.getItem("envidoJugador"));

    setMensajeJugador("QUIERO, " + envidoJugador);
    setTimeout(() => {
      setMensajeJugador("");
    }, 1500);
    if (envidoJugador > envidoMaquina) {
      setPuntajeJugador(puntajeJugador + valor);
      setMensajeMaquina("SON BUENAS");
    } else {
      setPuntajeMaquina(puntajeMaquina + valor);
      setMensajeMaquina(envidoMaquina + " GANÉ");
    }
    setTimeout(() => {
      setMensajeMaquina("");
    }, 1500);
  };

  const rechazarEnvido = () => {
    setConfirmarAccion(false);
    setEnvidoCantado(true);
    setTurnoMaquina(true);
    setPuntajeMaquina(puntajeMaquina + 1);
    setMensajeMaquina("");
    setTimeout(() => {
      setMensajeJugador("");
    }, 1500);
    if (mesaJugador.length == 1) {
      maquinaTiraCarta();
    }
  };

  const rechazarTruco = (puntos) => {
    setPuntajeMaquina(puntajeMaquina + puntos);
    setTurnoTerminado(true);
    repartir();
  };

  const meVoyAlMaso = () => {
    setMesaJugador([]);
    setMesaMaquina([]);
    setManoJugador([]);
    setManoMaquina([]);
    setTurnoTerminado(true);
    repartir();
    let puntosPorEnvidoNoJugado = 0;

    if (envidoCantado === false) {
      puntosPorEnvidoNoJugado = 1;
    }

    if (nivelDeTruco == 0) {
      setPuntajeMaquina(puntajeMaquina + 1 + puntosPorEnvidoNoJugado);
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

      if (elQueComienza == 0) {
        setElQueComienza(1);
        setTurnoMaquina(false);
      } else {
        setElQueComienza(0);
        setTurnoMaquina(true);
      }

      setMensajeMaquina("");
      setMensajeJugador("");
      setNivelDeTruco(0);
    }
  };

  //SE EJECUTA EN CADA RENDERIZADO PARA VER SI ALGUNO LLEGO A 15 PUNTOS.
  const evaluarPosibleGanador = () => {
    if (puntajeJugador >= 15) {
      Swal.fire(
        "Muy bien, has ganado",
        "Maquina: " + puntajeMaquina + " - Vos: " + puntajeJugador
      );
      setPuntajeJugador(0);
      setPuntajeMaquina(0);
      setTurnoTerminado(true);
      setConfirmarAccion(false);
      setJugoMaquina(false);
      setNivelDeTruco(0);
    }
    if (puntajeMaquina >= 15) {
      Swal.fire(
        "Has perdido",
        "Maquina: " + puntajeMaquina + " - Vos: " + puntajeJugador
      );
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
    <img
      className="animate__animated animate__fadeInTopLeft"
      src={carta.image}
      key={carta.id}
      width={75}
      onClick={() => jugadorTiraUnaCarta(carta)}
    ></img>
  ));

  const manoMaquinaLista = manoMaquina.map((carta) => (
    <img
      className="animate__animated animate__fadeInBottomLeft"
      key={carta.id}
      src="https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-dorso-minimalart.png"
      width={75}
    ></img>
  ));

  const mesaJugadorLista = mesaJugador.map((carta) => (
    <img
      className="animate__animated animate__slideInUp"
      src={carta.image}
      key={carta.id}
      width={80}
      style={{ marginRight: "10px" }}
    ></img>
  ));

  const mesaMaquinaLista = mesaMaquina.map((carta) => (
    <img
      className="animate__animated animate__slideInDown"
      src={carta.image}
      key={carta.id}
      width={80}
      style={{ marginRight: "10px" }}
    ></img>
  ));

  //____________________________________________________________________________________
  return (
    <div className="unovsmaquina">
      <div className="juegoIA">
        <div className="mesaIA">
          <div className="usersIA">
            <div className="vinetaMaquinaIA">
              <p
                className="dialogoMaquinaIA animate__animated animate__zoomIn"
                style={{ fontSize: "12px", fontWeight: "bold" }}
              >
                {mensajeMaquina}
              </p>
            </div>
            <img
              className="userIA"
              src={"https://robohash.org/user/300.png"}
            ></img>

            <img
              src={
                "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-dorso-minimalart.png"
              }
              width={70}
            ></img>

            <div className="vinetaJugadorIA">
              <p
                className="dialogoJugadorIA animate__animated animate__zoomIn"
                style={{ fontSize: "12px", fontWeight: "bold" }}
              >
                {mensajeJugador}
              </p>
            </div>
            <img
              className="userIA"
              src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
            ></img>
          </div>

          <div className="partidaIA">
            <div className="maquinaIA">
              <div className="manoMaquinaIA">{manoMaquinaLista}</div>

              <div className="mesaMaquinaIA">{mesaMaquinaLista}</div>
            </div>

            <div className="jugadorIA">
              <div className="mesaJugadorIA">{mesaJugadorLista}</div>
              <div className="manoJugadorIA">{manoJugadorLista}</div>
            </div>
          </div>
        </div>

        <div className="accionesIA">
          <div>
            <button className="buttonIA" onClick={() => quiero()}>
              Quiero
            </button>
            <button className="buttonIA" onClick={() => meVoyAlMaso()}>
              Al Mazo
            </button>
            <button className="buttonIA" onClick={() => noQuiero()}>
              No Quiero
            </button>
          </div>

          <div>
            <button className="buttonIA" onClick={() => cantarEnvido()}>
              Envido
            </button>
            <button className="buttonIA" onClick={() => cantarRealEnvido()}>
              Real Envido
            </button>
            <button className="buttonIA" onClick={() => cantarFaltaEnvido()}>
              Falta Envido
            </button>
            --
            <button className="buttonIA" onClick={() => cantarTruco()}>
              Truco
            </button>
            <button className="buttonIA" onClick={() => cantarReTruco()}>
              Re Truco
            </button>
            <button className="buttonIA" onClick={() => cantarValeCuatro()}>
              Vale Cuatro
            </button>
          </div>
        </div>
      </div>

      <div className="puntajeIA">
        <p>Maquina: {puntajeMaquina}</p>
        <p>Vos: {puntajeJugador}</p>
        <Link to="/inicio/">
          <CDBSidebarMenuItem
            icon="home"
            className="iconoIA"
            style={{ color: "#B43326", fontSize: "25px" }}
          >
            {" "}
          </CDBSidebarMenuItem>
        </Link>
      </div>
    </div>
  );
};

export default JuegoIA;
