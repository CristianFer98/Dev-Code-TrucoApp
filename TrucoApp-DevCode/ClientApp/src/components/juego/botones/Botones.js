import React from "react";
import { useSelector } from "react-redux";
import { ocultarBotonesYAcciones } from "../../../helpers/truco/ocultarBotonesYAcciones";
import { tiposBotones } from "../../../types/tiposBotones";
import { BotonesEnvido } from "./BotonesEnvido";
import { BotonesQuieroNoQuiero } from "./BotonesQuieroNoQuiero";
import { BotonesTruco } from "./BotonesTruco";
import { BotonIrAlMazo } from "./BotonIrAlMazo";
import { BotonTantoEnvido } from "./BotonTantoEnvido";

export const Botones = () => {
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);

  return (
    <div className="divButtons d-flex flex-column flex-wrap justify-content-center w-100">
      {ocultarBotonesYAcciones(uid, partida, tiposBotones.quieroNoQuiero) && (
        <BotonesQuieroNoQuiero />
      )}
      <div className="d-flex justify-content-center mt-0 flex-wrap flex-md-nowrap ">
        {ocultarBotonesYAcciones(uid, partida, tiposBotones.envido) && (
          <BotonesEnvido />
        )}

        {ocultarBotonesYAcciones(uid, partida, tiposBotones.tantos) && (
          <BotonTantoEnvido />
        )}

        {ocultarBotonesYAcciones(uid, partida, tiposBotones.truco) && (
          <>
            <BotonesTruco />
            {ocultarBotonesYAcciones(uid, partida, tiposBotones.irAlMazo) && (
              <BotonIrAlMazo />
            )}
          </>
        )}
      </div>
    </div>
  );
};
