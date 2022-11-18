import React , { useState } from 'react';
import imagenes from '../avatar/AvatarImagenes';
import './mp';

export function TiendaAvatarCard({ id, imagen, precio, comprado }){

  const [idPreferencia, setIdPreferencia] = useState();

  const getIdPreferencia = async()=>{

    fetch(`https://localhost:44342/api/Accesorio/ComprarAccesorio/${id}`)
       .then(res=> res.json())
       .then(data=>{
        console.log(data.result)
           let preference =data.result;
           if(preference){
            setIdPreferencia(preference);
            localStorage.setItem("idPreferencia", preference);
           }else{
            setIdPreferencia(null);
           }
          //822844930-436e32b0-c6d7-4206-b714-5ed4ecb26de5
        });
    }

    const comprar = async (id) =>{

      getIdPreferencia();

      const mp = new MercadoPago('TEST-266fb749-17ee-4759-b90f-ffa5a3e4c8c0', {
       locale: 'es-AR'
       });
     
       mp.checkout({
         preference: {
           id: "822844930-dbcd52a6-1d4a-4031-b40e-fef727ce787a"// `${localStorage.getItem("idPreferencia")}`
         },
         autoOpen: true,
         render: {
           container: '.cho-container',
           label: 'Pagar',
         }
       });

      const resp = await fetch(
            `https://localhost:44342/api/Accesorio/ActualizarEstadoComprado/${id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
            }
      );

      if (resp.ok) {
             console.log("se actualizo estado");
      }else{
            console.log("no se pudo actualizar el estado");
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