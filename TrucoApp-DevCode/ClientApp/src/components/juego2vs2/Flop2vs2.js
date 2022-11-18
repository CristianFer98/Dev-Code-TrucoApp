import React from "react";
import mazo from "../../assets/cartas/Mazo.png";

export const Flop2vs2 = () => {
  return (
    <div className="divGame2vs2 d-flex flex-row justify-content-center">
      {/* <div className="animate__animated animate__fadeIn d-flex justify-content-center divFlopSides align-items-center">
        <img className="deck" src={mazo} alt="" />
      </div> */}
      <div className="w-100 d-flex justify-content-center flex-column align-items-center">
        <div className="divFlop2vs2 d-flex justify-content-between h-75">
          <div
            className="h-25 align-self-center"
            style={{ transform: "rotate(-0.25turn)" }}
          >
            <img className="deck" src={mazo} alt="" />
          </div>
          <div className="d-flex flex-column justify-content-between">
            <div className="h-25">
              <img className="deck" src={mazo} alt="" />
            </div>
            <div
              className="h-25"
              style={{
                position: "relative",
                bottom: "20px",
              }}
            >
              <img className="deck" src={mazo} alt="" />
            </div>
          </div>
          <div
            className="h-25 align-self-center"
            style={{ transform: "rotate(0.25turn)" }}
          >
            <img className="deck" src={mazo} alt="" />
          </div>
        </div>
      </div>

      {/* <div className="divFlopSides"></div> */}
    </div>
  );
};
