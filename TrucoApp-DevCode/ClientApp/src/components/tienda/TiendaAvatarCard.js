import React from 'react';
import imagenes from '../avatar/AvatarImagenes';
import Swal from 'sweetalert2';

export function TiendaAvatarCard({ id, imagen, precio, comprado }){

    const comprar = async (id) =>{

        const resp = await fetch(
            `https://localhost:44342/api/Accesorio/ComprarAccesorio/${id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (resp.ok) {
             //alert("comprado con exito");
             Swal.fire("Compra realizada con éxito", "", "success");
          }else{
            console.log("no se pudo realizar la operacion");
          }

    }

   return(<div className="card py-3 ms-3 border-0 acc" style={{width:'50%'}}>
              <div className="acc-componente">
                <div className="acc-imagen">
                  <img className="card-img-top" src={imagenes[`${imagen}`]} />
                </div>
                <div className="card-body text-center d-flex flex-column" style={{height:'auto'}}>
                  <strong className="card-text">${precio}</strong>
                  <button 
                        className={`btn btn-danger border-0 text-light ${comprado==false ? '':'disabled'}`}
                        onClick={()=>comprar(id)}
                        style={{cursor:'pointer', fontWeight: 'bold'}} >
                            COMPRAR
                  </button>
                </div>
             </div>
           </div>);

              
}

export default TiendaAvatarCard;