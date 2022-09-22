import React from "react";
import "./tabla.css";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";

const TablaDeTorneo = () => {

    const history = useHistory();

    const handleVolverInicio = (e) => {
        e.preventDefault();
        history.push("/inicio");
      };

  return (

    <>
    <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Button
              variant="dark"
              onClick={handleVolverInicio}
              style={{ marginLeft: "20px" }}
              path="/inicio"
            >
              Abandonar torneo
            </Button>{" "}
          
          </div>
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
        <p className="participante" style={{opacity:"0.5"}}>Mario88</p>
        <p className="participante" >JuliaLopez</p>
        <p className="participante" style={{opacity:"0.5"}}>HomeroJ</p>
        </div>
      </div>


      <div className="columna">
        <div className="semifinal">
        <p className="participante">Roberto123</p>
        <p className="participante" style={{opacity:"0.5"}} >JuliaLopez</p>
        </div>
      </div>

      <div className="columna">
      <div className="final">

        <h2 style={{backgroundColor:"gray", width:"100%", borderTopLeftRadius:"15px", borderTopRightRadius:"15px", textAlign:"center"}}>Final</h2>
        <div>
        <p className="participante" style={{opacity:"0.5"}}>Roberto123</p>
        <p className="participante">Cristian98</p>
        </div>
        </div>
      </div>

      <div className="columna">
        <div className="semifinal">
        <p className="participante" style={{opacity:"0.5"}}>EstebanRucci</p>
        <p className="participante">Cristian98</p>
        </div>
      </div>

      <div className="columna">
        <div className="cuartos">
        <p className="participante">EstebanRucci</p>
        <p className="participante" style={{opacity:"0.5"}}>Marianela</p>
        <p className="participante">Cristian98</p>
        <p className="participante" style={{opacity:"0.5"}}>Monica95</p>
        </div>
      </div>

    </div>
    </>
  );
};

export default TablaDeTorneo;
