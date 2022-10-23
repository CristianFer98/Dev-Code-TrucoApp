import React from 'react';
import imagenes from '../avatar/AvatarImagenes';

export function TiendaAvatarCard({ imagen, precio, comprado }){

   return(<div className="card border-0">
                <img className="card-img-top" src={imagenes[`${imagen}`]} style={{width:'100%', height:'100%'}} alt={imagen}/>
                <div className="card-body">
                <p className="card-text d-flex flex-column text-center">
                        <strong> ${precio}</strong>
                        <button className={`btn btn-danger border-0 text-light ${comprado==false ? '':'disabled'}`} style={{cursor:'pointer', fontWeight: 'bold'}} >COMPRAR</button>
                    </p>
                </div>
            </div>);
}

export default TiendaAvatarCard;