import React from "react";
import "./tabla.css";
const TablaDeTorneo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "20px",
        color: "white",
      }}
    >
      <div className="columna">
        <div className="cuartos">
        <p className="participante">Roberto123</p>
        <p className="participante">Mario88</p>
        <p className="participante">JuliaLopez</p>
        <p className="participante">HomeroJ</p>
        </div>
      </div>


      <div className="columna">
        <div className="semifinal">
        <p className="participante">Roberto123</p>
        <p className="participante">HomeroJ</p>
        </div>
      </div>

      <div className="columna">
      <div className="final">

        <h2 style={{backgroundColor:"gray", width:"100%", borderTopLeftRadius:"15px", borderTopRightRadius:"15px", textAlign:"center"}}>Final</h2>
        <div>
        <p className="participante">Roberto123</p>
        <p className="participante">HomeroJ</p>
        </div>
        </div>
      </div>

      <div className="columna">
        <div className="semifinal">
        <p className="participante">Roberto123</p>
        <p className="participante">HomeroJ</p>
        </div>
      </div>

      <div className="columna">
        <div className="cuartos">
        <p className="participante">Roberto123</p>
        <p className="participante">Mario88</p>
        <p className="participante">JuliaLopez</p>
        <p className="participante">HomeroJ</p>
        </div>
      </div>
    </div>
  );
};

export default TablaDeTorneo;
