import React from 'react';
import './tienda.css';
import ropaV2 from './../../assets/avatar/ropa-v2.png';
import ropaV3 from './../../assets/avatar/ropa-v3.png';
import ropaV4 from './../../assets/avatar/ropa-v4.png';
import ropaV5 from './../../assets/avatar/ropa-v5.png';
export function TiendaAvatar() {
 
  return (
    <div className="componente-store">
      <h1 className="titulo mb-5">Lookea tu Avatar con el mejor estilo </h1>
      
      <div className="card p-3" style={{width:'80%'}}>
            <div className="card-header">
              <h3 className="card-title text-dark">Ropa</h3>
            </div>
            <div className="card- d-flex flex-row">
                <div className="card">
                    <img className="card-img-top" src={ropaV2} alt="remera-version2"/>
                    <div className="card-body">
                       <p className="card-text d-flex flex-column text-center">
                            <strong> $300</strong>
                            <span className="badge bg-danger p-3" style={{cursor:'pointer'}}>COMPRAR</span>
                        </p>
                    </div>
                </div>

                <div className="card" >
                    <img className="card-img-top" src={ropaV3} alt="remera-version3"/>
                    <div className="card-body">
                       <p className="card-text d-flex flex-column text-center">
                            <strong> $300</strong>
                            <span className="badge bg-danger p-3" style={{cursor:'pointer'}}>COMPRAR</span>
                        </p>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src={ropaV4} alt="remera-version4"/>
                    <div className="card-body">
                        <p className="card-text d-flex flex-column text-center">
                            <strong> $300</strong>
                            <span className="badge bg-danger p-3" style={{cursor:'pointer'}}>COMPRAR</span>
                        </p>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src={ropaV5} alt="remera-version5"/>
                    <div className="card-body">
                        <p className="card-text d-flex flex-column text-center">
                            <strong> $300</strong>
                            <span className="badge bg-danger p-3" style={{cursor:'pointer'}}>COMPRAR</span>
                        </p>
                    </div>
                </div>
            </div>
            <a href="/inicio/tienda-avatar" className="btn btn-danger mt-3">COMPRAR TODO</a>
      </div> 
     
    </div>
  );
}
