import React from "react";
import { BotonesEnvido2vs2 } from "./BotonesEnvido2vs2";
import { BotonesQuieroNoQuiero2vs2 } from "./BotonesQuieroNoQuiero2vs2";
import { BotonesTruco2vs2 } from "./BotonesTruco2vs2";
import { BotonIrAlMazo2vs2 } from "./BotonIrAlMazo2vs2";
import { BotonTantoEnvido2vs2 } from "./BotonTantoEnvido2vs2";

export const Botones2vs2 = () => {
  return (
    <div className="divButtons2vs2 d-flex flex-column flex-wrap justify-content-center w-100">
      <BotonesQuieroNoQuiero2vs2 />
      <div className="d-flex justify-content-center mt-0 flex-wrap flex-md-nowrap ">
        <BotonesEnvido2vs2 />
        {/* <BotonTantoEnvido2vs2 /> */}
        {/* <>
          <BotonesTruco2vs2 />
          <BotonIrAlMazo2vs2 />
        </> */}
      </div>
    </div>
  );
};
