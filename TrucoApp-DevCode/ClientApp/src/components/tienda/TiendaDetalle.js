import React, { useState } from 'react';
import './tienda.css';
import AccesorioDetalle from './AccesorioDetalle';
import { useParams } from 'react-router';

export function TiendaDetalle() {
    const { id } = useParams();

    const url = `https://dev-code-trucoapp20221119110900.azurewebsites.net/api/Producto/ObtenerProductoPorId/${id}`;

    const [accesorio, setAccesorio] = useState([]);
    const [colores, setColores] = useState([]);
    const [talles, setTalles] = useState([]);


    console.log(id)
    const getProducto = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAccesorio(data));
        //console.log(accesorio);
    }

    const getColores = () => {
        fetch(`https://dev-code-trucoapp20221119110900.azurewebsites.net/api/Color/ObtenerColoresPorIdProducto/${id}`)
            .then(res => res.json())
            .then(data => setColores(data));
        //console.log("Colores: ",colores);
    }

    const getTalles = () => {
        fetch(`https://dev-code-trucoapp20221119110900.azurewebsites.net/api/Talle/ObtenerTallesPorIdProducto/${id}`)
            .then(res => res.json())
            .then(data => setTalles(data));
        //console.log("Talles: ",talles);
    }

    getProducto();
    getColores();
    getTalles();

    return (
        <div className="componente-store" style={{ height: '100%' }}>
            <AccesorioDetalle
                id={accesorio.idProducto}
                imagen={accesorio.imagen}
                descripcion={accesorio.descripcion}
                cantidadAComprar={accesorio.cantidadAcomprar}
                stock={accesorio.stock}
                medidas={accesorio.medidas}
                marca={accesorio.marca}
                tipoBaraja={accesorio.tipoBaraja}
                precio={accesorio.precio}
                colores={colores}
                talles={talles}
            />
        </div>

    );
}