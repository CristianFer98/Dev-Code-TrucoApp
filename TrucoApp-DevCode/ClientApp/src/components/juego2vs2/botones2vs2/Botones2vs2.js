import React from "react";
import { useSelector } from "react-redux";
import { ocultarBotonesYAcciones } from "../../../helpers/truco/ocultarBotonesYAcciones";
import { tiposBotones } from "../../../types/tiposBotones";
import { BotonesEnvido2vs2 } from "./BotonesEnvido2vs2";
import { BotonesQuieroNoQuiero2vs2 } from "./BotonesQuieroNoQuiero2vs2";
import { BotonesTruco2vs2 } from "./BotonesTruco2vs2";
import { BotonIrAlMazo2vs2 } from "./BotonIrAlMazo2vs2";
import { BotonTantoEnvido2vs2 } from "./BotonTantoEnvido2vs2";

export const Botones2vs2 = () => {
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);

  return (
    <div className="divButtons2vs2 d-flex flex-column flex-wrap justify-content-center w-100">
      {ocultarBotonesYAcciones(uid, partida, tiposBotones.quieroNoQuiero) && (
        <BotonesQuieroNoQuiero2vs2 />
      )}
      <div className="d-flex justify-content-center mt-0 flex-wrap flex-md-nowrap ">
        {ocultarBotonesYAcciones(uid, partida, tiposBotones.envido) && (
          <BotonesEnvido2vs2 />
        )}
        {ocultarBotonesYAcciones(uid, partida, tiposBotones.tantos) && (
          <BotonTantoEnvido2vs2 />
        )}
        {ocultarBotonesYAcciones(uid, partida, tiposBotones.truco) && (
          <>
            <BotonesTruco2vs2 />
            {ocultarBotonesYAcciones(uid, partida, tiposBotones.irAlMazo) && (
              <BotonIrAlMazo2vs2 />
            )}
          </>
        )}
      </div>
    </div>
  );
};
