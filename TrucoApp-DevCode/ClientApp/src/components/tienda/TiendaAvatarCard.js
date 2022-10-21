import React from 'react';
import imagenes from '../avatar/AvatarImagenes';

export function TiendaAvatarCard({ imagen, precio, estadoDeCompra }){

   return(<div className="card border-0">
                <img className="card-img-top" src={imagenes[`${imagen}`]} style={{width:'100%', height:'100%'}} alt={imagen}/>
                <div className="card-body">
                <p className="card-text d-flex flex-column text-center">
                        <strong> ${precio}</strong>
                        <span className={`badge bg-danger p-3 ${estadoDeCompra==0 ? '':'disabled'}`} style={{cursor:'pointer'}} >COMPRAR</span>
                    </p>
                </div>
            </div>);
}

export default TiendaAvatarCard;