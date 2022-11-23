import React from 'react';
import imagenes from '../avatar/AvatarImagenes';
import './mp';
import { getIdPreferencia } from './Funciones';

export function TiendaAvatarCard({ id, imagen, precio, comprado }) {
    const comprar = async (id) => {
        const url = "https://dev-code-trucoapp20221119110900.azurewebsites.net/api/Accesorio/ComprarAccesorio/";
        getIdPreferencia(url, id);
        const mp = new MercadoPago('TEST-266fb749-17ee-4759-b90f-ffa5a3e4c8c0', {
            locale: 'es-AR'
        });
        console.log(localStorage.getItem("preferenceId"))
        mp.checkout({
            preference: {
                id: `${localStorage.getItem("preferenceId")}`
            },
            autoOpen: true,
            render: {
                container: '.cho-container',
                label: 'Pagar',
            }
        });

        const resp = await fetch(
            `https://dev-code-trucoapp20221119110900.azurewebsites.net/api/Accesorio/ActualizarEstadoComprado/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (resp.ok) {
            console.log("se actualizo estado");
        } else {
            console.log("no se pudo actualizar el estado");
        }

    }

    return (<div className="card py-3 ms-3 border-0 acc" style={{ width: '50%' }}>
        <div className="acc-componente">
            <div className="acc-imagen">
                <img className="card-img-top" src={imagenes[`${imagen}`]} />
            </div>
            <div className="card-body text-center d-flex flex-column" style={{ height: 'auto' }}>
                <strong className="card-text">${precio}</strong>
                <button
                    className={`btn btn-danger border-0 text-light ${comprado == false ? '' : 'disabled'}`}
                    onClick={() => comprar(id)}
                    style={{ cursor: 'pointer', fontWeight: 'bold' }} >
                    COMPRAR
                </button>
            </div>
        </div>
    </div>);


}

export default TiendaAvatarCard;