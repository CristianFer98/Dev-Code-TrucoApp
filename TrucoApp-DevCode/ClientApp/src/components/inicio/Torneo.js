import React from "react";
import Card from "react-bootstrap/Card";
import InfoDeUsuario from "./InfoDeUsuario";
import { ChatGeneral } from "./ChatGeneral";
import "./torneo.css";
import Button from 'react-bootstrap/Button';


export const Torneo = () => {
  return (
    <>
      <div className="primario">
        <div className="secundario">
          <InfoDeUsuario />
       
          <div style={{width:"100%", display:"flex", justifyContent:"space-between", marginTop:"20px"}}>
       <Button variant="dark" style={{marginLeft:"50px"}}>Crear Torneo</Button>{' '}
       
       <div style={{marginRight:"50px"}}>
       <Button variant="dark">1</Button>{' '}
       <Button variant="dark">2</Button>{' '}
       <Button variant="dark">3</Button>{' '}
       </div>
       </div>

        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around",marginTop:"20px"}}>
        <Card style={{ width: "15rem",height:"125px", margin:"10px" }}>
          <Card.Body>
            <Card.Title>Torneo</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Organiza: Cristian98 <Card.Img src="https://robohash.org/user2.png" style={{width:"40px", height:"40px"}}></Card.Img>
            </Card.Subtitle>
            <Card.Link href="#">Acceder al Torneo</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem",height:"125px", margin:"10px" }}>
          <Card.Body>
            <Card.Title>Torneo</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Organiza: Roberto123 <Card.Img src="https://robohash.org/user3.png" style={{width:"40px", height:"40px"}}></Card.Img>
            </Card.Subtitle>
            <Card.Link href="#">Acceder al Torneo</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem",height:"125px", margin:"10px" }}>
          <Card.Body>
            <Card.Title>Torneo</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Organiza: Marian89 <Card.Img src="https://robohash.org/user4.png" style={{width:"40px", height:"40px"}}></Card.Img>
            </Card.Subtitle>
            <Card.Link href="#">Acceder al Torneo</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem",height:"125px", margin:"10px" }}>
          <Card.Body>
            <Card.Title>Torneo</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Organiza: RoboHHH <Card.Img src="https://robohash.org/user5.png" style={{width:"40px", height:"40px"}}></Card.Img>
            </Card.Subtitle>
            <Card.Link href="#">Acceder al Torneo</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem",height:"125px", margin:"10px" }}>
          <Card.Body>
            <Card.Title>Torneo</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Organiza: Dabydenko <Card.Img src="https://robohash.org/user6.png" style={{width:"40px", height:"40px"}}></Card.Img>
            </Card.Subtitle>
            <Card.Link href="#">Acceder al Torneo</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem",height:"125px", margin:"10px" }}>
          <Card.Body>
            <Card.Title>Torneo</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Organiza: HyperDrup <Card.Img src="https://robohash.org/user7.png" style={{width:"40px", height:"40px"}}></Card.Img>
            </Card.Subtitle>
            <Card.Link href="#">Acceder al Torneo</Card.Link>
          </Card.Body>
        </Card>

        </div>
        </div>
        <span className="chat">
          <ChatGeneral />
        </span>
      </div>
    </>
  );
};
