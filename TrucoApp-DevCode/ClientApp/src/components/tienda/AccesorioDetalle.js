import React from 'react';
import './accesorios.css';
import { Link } from 'react-router-dom';
const AccesorioDetalle = ({ imagen, descripcion, detalle1, detalle2, detalle3, precio }) => {
  return (
    <><h1 className="text-center mt-4 mb-4">{descripcion}</h1>
    <div className="card p-4 border-0" style={{ width: '50rem' }}>
       <div className="d-flex flex-row justify-content-center">
            <div className="accesorio-componente">
                <div className="accesorio-imagen p-5" style={{ background: '#d9d9d9'}}>
                    <img className="card-img-top" src={imagen} alt={descripcion} style={{ width:'400px', height:'400px' }}/>
                </div>
            </div>
            <div className="detalles d-flex flex-row ms-5">

                <ul className="list-group list-group-flush">
                    <li className="list-group-item mb-2">{detalle1}</li>
                    <li className="list-group-item mb-2">{detalle2}</li>
                    <li className="list-group-item mb-2">{detalle3}</li>
                    <li className="list-group-item mb-4">
                        Precio: <strong>${precio}</strong>
                    </li>
                    <div className="d-flex flex-column">
                    <span className="badge bg-danger p-3" style={{ cursor: 'pointer', fontSize:'20px' }}>COMPRAR</span>
                </div>
                </ul>
            </div>
       </div>
       <Link to="/inicio/tienda" className="btn btn-success mt-3" style={{textDecoration:'none', color:'white'}}>
                VOLVER
      </Link>
    </div></>
    
  );
};

export default AccesorioDetalle;
