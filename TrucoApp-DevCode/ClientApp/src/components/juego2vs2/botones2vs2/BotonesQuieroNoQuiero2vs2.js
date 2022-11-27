import React from "react";

export const BotonesQuieroNoQuiero2vs2 = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        // onClick={handleQuieroNoQuiero}
        id="quiero"
        className="d-flex justify-content-center align-items-center buttonPlayerQuiero m-1 text-white"
      >
        Quiero
      </div>
      <div
        // onClick={handleQuieroNoQuiero}
        id="no quiero"
        className="d-flex justify-content-center align-items-center buttonPlayer2Mazo m-1 text-white"
      >
        No Quiero
      </div>
    </div>
  );
};
