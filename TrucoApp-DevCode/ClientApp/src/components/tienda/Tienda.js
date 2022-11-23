import React, { useState } from 'react';
import './tienda.css';
import Accesorios from './Accesorios';
import { Link } from 'react-router-dom';
import imagenes from './TiendaImagenes';

export function Tienda() {

    const url = "https://dev-code-trucoapp20221119110900.azurewebsites.net/api/Producto/ObtenerProductos";

    const [accesorios, setAccesorios] = useState([]);

    const getProductos = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAccesorios(data));
        //console.table(accesorios);
    }
    getProductos();
    return (
        <><div className="componente-store">
            <h1 className="titulo mt-5"> Tienda de Accesorios</h1>
            <br />
            <div className="alert alert-primary d-flex flex-column alert-tienda-avatar" role="alert">
                <h5 className="text-center mb-3">
                    Mira los accesorios para tu avatar
                </h5>
                <Link to="/inicio/tienda-avatar" className="btn btn-primary" style={{ textDecoration: 'none', color: 'white' }}>
                    Acceder
                </Link>
            </div>
            <br />
            <div className="accesorios">
                {accesorios.map((accesorio, i) => (
                    <Accesorios
                        key={i}
                        id={accesorio.idProducto}
                        imagen={imagenes[`${accesorio.imagen}`]}
                        descripcion={accesorio.descripcion}
                        precio={accesorio.precio}
                        stock={accesorio.stock} />
                ))}
            </div>
        </div></>
    );
}