import React from "react";

export const BotonesQuieroNoQuiero = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        id="quiero"
        className="d-flex justify-content-center align-items-center buttonPlayerQuiero m-1 text-white"
      >
        Quiero
      </div>
      <div
        id="no quiero"
        className="d-flex justify-content-center align-items-center buttonPlayer2Mazo m-1 text-white"
      >
        No Quiero
      </div>
    </div>
  );
};
