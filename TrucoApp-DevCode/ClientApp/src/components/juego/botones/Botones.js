import React from "react";
import { BotonesEnvido } from "./BotonesEnvido";
import { BotonesQuieroNoQuiero } from "./BotonesQuieroNoQuiero";
import { BotonesTruco } from "./BotonesTruco";
import { BotonIrAlMazo } from "./BotonIrAlMazo";

export const Botones = () => {
  return (
    <div className="divButtons d-flex flex-column flex-wrap justify-content-center w-100">
      <BotonesQuieroNoQuiero />

      <div className="d-flex justify-content-center mt-0 flex-wrap flex-md-nowrap ">
        <BotonesEnvido />
        <BotonesTruco />

        <BotonIrAlMazo />
      </div>
    </div>
  );
};
