import React from "react";
import { useSelector } from "react-redux";
import {
  botonesTantos,
  sePuedeCantarEnvidos,
  sePuedeCantarQuieroNoQuiero,
  sePuedeCantarTruco,
} from "../../../helpers/truco/getUserTurno";
import { BotonesEnvido } from "./BotonesEnvido";
import { BotonesQuieroNoQuiero } from "./BotonesQuieroNoQuiero";
import { BotonesTruco } from "./BotonesTruco";
import { BotonIrAlMazo } from "./BotonIrAlMazo";
import { BotonTantoEnvido } from "./BotonTantoEnvido";

export const Botones = () => {
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const { jugadorUno, jugadorDos, turno, envido, mano } = partida;
  const {
    envidosCantados,
    estadoEnvidoCantado,
    estadoCantarTantos,
    jugadorQueDebeResponderEnvido,
  } = envido;

  return (
    <div className="divButtons d-flex flex-column flex-wrap justify-content-center w-100">
      {sePuedeCantarQuieroNoQuiero(
        uid,
        jugadorUno,
        jugadorDos,
        turno,
        estadoEnvidoCantado,
        estadoCantarTantos,
        jugadorQueDebeResponderEnvido
      ) && <BotonesQuieroNoQuiero />}
      <div className="d-flex justify-content-center mt-0 flex-wrap flex-md-nowrap ">
        {sePuedeCantarEnvidos(
          uid,
          jugadorUno,
          jugadorDos,
          turno,
          envidosCantados,
          estadoCantarTantos,
          mano
        ) && <BotonesEnvido />}

        {botonesTantos(
          envidosCantados,
          estadoCantarTantos,
          uid,
          jugadorUno,
          jugadorDos,
          turno
        ) && <BotonTantoEnvido />}

        {sePuedeCantarTruco(
          uid,
          jugadorUno,
          jugadorDos,
          turno,
          estadoEnvidoCantado,
          estadoCantarTantos
        ) && (
          <>
            <BotonesTruco />
            <BotonIrAlMazo />
          </>
        )}
      </div>
    </div>
  );
};
