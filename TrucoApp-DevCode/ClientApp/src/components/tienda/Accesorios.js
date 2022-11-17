import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './accesorios.css';
import './mp';

const Accesorios = ({ id, imagen, descripcion, precio, stock }) => {
  const [idPreferencia, setIdPreferencia] = useState();

  const getIdPreferencia = async()=>{

    fetch(`https://localhost:44342/api/Producto/ComprarProducto/${id}`)
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

  const comprarProducto = async()=>{
    let stockActual = stock - 1;
    console.log("id: ", idPreferencia);
    console.log("preferencia ",localStorage.getItem("idPreferencia"))
    const resp = await fetch(
         `https://localhost:44342/api/Producto/ActualizarStock/${id}`,
         {
           method: "PUT",
           headers: {
             "Content-Type": "application/json",
           },
           body:JSON.stringify({
                  stock:stockActual,
                  cantidadAComprar: 1, 
                }) 
           
         }
       );
 
       if (resp.ok) {
          console.log("se actualizo stock");
          // <div class="cho-container"></div>
          
       }else{
         console.log("no se pudo actualizar stock");
       }
       
       getIdPreferencia();

       const mp = new MercadoPago('TEST-266fb749-17ee-4759-b90f-ffa5a3e4c8c0', {
        locale: 'es-AR'
      });
    
      mp.checkout({
        preference: {
          id: "822844930-403a18a7-eefe-4f02-8ee0-6990b70cc3b8"// `${localStorage.getItem("idPreferencia")}`
        },
        autoOpen: true,
        render: {
          container: '.cho-container',
          label: 'Pagar',
        }
      });
 }

  return (
    <div className="card py-3 border-0 accesorio">
    <div className="accesorio-componente">
      <div className="accesorio-imagen" style={{background:'#d9d9d9' }}>
        <img className="card-img-top" src={imagen} alt={descripcion}/>
      </div>
      <div className="card-body text-center" style={{height:'auto'}}>
        <p className="card-title text-center">
          <strong>{descripcion}</strong>
        </p>
        <strong className="card-text">${precio}</strong>
     </div>
      <div className="botones">
        <span className="badge bg-success mb-2 btn-detalles text-center" id="detalles">
          <Link to={`/inicio/tienda/${id}`} style={{textDecoration:'none', color:'white'}}>
             <span className="texto-detalles">VER DETALLES</span>
            <i className="fa-sharp fa-solid fa-circle-info d-lg-none d-sm-block i-font" title="ver detalles" ></i>
          </Link>
        </span>
        <span className="badge bg-danger btn-comprar text-center" id="comprar" >
          <span 
            className="texto-comprar cho-container"
            id="checkout-open"
            onClick={()=>{
              comprarProducto();
            }}>
              COMPRAR
          </span> 
          <i 
           className="fa-solid fa-cart-shopping d-lg-none d-sm-block i-font" 
           title="comprar"
           onClick={()=>{
            comprarProducto();
          }}>
           </i>
        </span>
      </div>
    </div>
  </div>
    
  );
};

export default Accesorios;
