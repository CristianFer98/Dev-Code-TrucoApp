import React from "react";
import mazo from "../../assets/cartas/Mazo.png";

export const Flop2vs2 = () => {
  return (
    <div className="divGame d-flex flex-row justify-content-center w-100">
      {/* <div className="animate__animated animate__fadeIn d-flex justify-content-center divFlopSides align-items-center">
        <img className="deck" src={mazo} alt="" />
      </div> */}
      <div className="w-100 d-flex flex-column align-items-center">
        <div className="divFlop h-100">
          <div className="d-flex h-50 mb-2">
            {/* <CartaMesa
              animation={"animate__slideInDown"}
              key={carta.id}
              carta={carta}
            /> */}
          </div>

          <div className="d-flex h-50">
            {/* <CartaMesa
              animation={"animate__slideInUp"}
              key={carta.id}
              carta={carta}
            /> */}
          </div>
        </div>
      </div>

      <div className="divFlopSides"></div>
    </div>
  );
};
