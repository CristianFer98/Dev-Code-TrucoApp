import React from 'react';
import './accesorios.css';
import imagenes from './TiendaImagenes';
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
//import { checkout } from './Funciones';

const AccesorioDetalle = ({ id, imagen, descripcion, cantidadAComprar, stock, medidas, marca,tipoBaraja, precio, colores, talles }) => {
  
const [lib, setLib] = useState({});
const [url1,  setUrl] = useState({});

useEffect(() => {
    setUrl("https://sdk.mercadopago.com/js/v2");
    const name="MercadoPago";
    const script = document.createElement('script');
    script.src = url1;
    script.async = true;
    script.onload = () => setLib({ [name]: window[name] });

    document.body.appendChild(script)

    return () => {
        document.body.removeChild(script)
    }
}, [url1]);

const checkout = async (url, id)=>{ 
  const urlApi=url+id;
  fetch(urlApi)
     .then(res=> res.json())
     .then(data=>{
      console.log(data.result)

        if(lib){
          const mp = new  window.MercadoPago('TEST-266fb749-17ee-4759-b90f-ffa5a3e4c8c0', {
            locale: 'es-AR'});

            mp.checkout({
            preference: {
              id: `${data.result}`
            },
            autoOpen: true,
            render: {
              container: '.cho-container',
              label: 'Pagar',
            }
          });
        }
        
      });

    }

  const cambiarProducto = (producto, color) =>{
    const imgProducto = document.querySelector('#foto-producto');
    let posicionUltimoGuion = producto.lastIndexOf("-");   
    let prod = producto.substring( 0 , posicionUltimoGuion+1);
    imgProducto.src=imagenes[`${prod}${color}`];
  }
  const listaColores=(descripcion, producto) =>{
    return (<span 
              className={`${descripcion}`} 
              onClick={()=>cambiarProducto(producto, descripcion)}
              style={{marginRight:'10px', cursor:'pointer'}}
            >

            </span>);
  }

  const listaTalles = (idTalle,color, descripcion) =>{
    return (<option value={`${idTalle}`} name={`remera-${color}-${descripcion}`} className="text-center">
              {descripcion}
            </option>);
  }

  const getColores=()=>{

      if(colores.length!=0){
        const listadoColores=
        colores.map((color)=>
       listaColores(color.descripcion, imagen)
      );
      return listadoColores;
    }else{

      return null;
    }
    
  }

  const getTalles=(color)=>{

    if(talles.length!=0){
      const listadoTalles=
      talles.map((talle)=>
     listaTalles(talle.idTalle, color, talle.descripcion)
    );
    return listadoTalles;
  }else{

    return null;
  }
  
}
const [descripcionProducto, setDescripcionProducto] = useState([]);
const [cantidadAComprarProducto, setCantidadAComprarProducto] = useState([]);
const [precioProducto, setPrecioProducto] = useState([]);

const comprarProducto = async()=>{
   let stockActual = stock - cantidadAComprarProducto;
   const resp = await fetch(
        `https://localhost:44342/api/Producto/ActualizarStock/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
            stock:stockActual,
            cantidadAComprar: cantidadAComprarProducto, 
          })  
          
        }
      );

      if (resp.ok) {
         console.log("se actualizo stock");
      }else{
        console.log("no se pudo actualizar stock");
      }
      const url = "https://localhost:44342/api/Producto/ComprarProducto/";
      
        checkout(url,id); 
      
}
  
  return (
    <><h1 className="text-center mt-5 mb-4">{descripcion}</h1>
      <input 
       type="hidden" 
       value={descripcion}
       onChange={(event) => setDescripcionProducto(event.target.value)}
      />
    <div className="card p-4 border-0 accesorio-detalle">
       <div className="d-flex flex-row justify-content-center">
            <div className="accesorio-componente">
                <div className="accesorio-imagen-d p-5" style={{ background: '#d9d9d9'}}>
                    <img className="card-img-top" id="foto-producto" src={imagenes[imagen]} alt={descripcion}/>
                </div>
            </div>
            <div className="detalles d-flex flex-row ms-5">

                <ul className="list-group list-group-flush" id="lista-detalles">
                    <li className="list-group-item mb-2"  style={ getColores()==null ? { display:'none'} : {display : 'block'} }>
                      <strong>Colores: </strong>
                      <div className="d-flex justify-content-start">
                        {getColores()}
                      </div>
                    </li>
                    <li className="list-group-item mb-2"  style={ getTalles()==null ? { display:'none'} : {display : 'block'} }>
                      <strong>Talles: </strong>
                      <select name="remera" className="d-flex justify-content-start">
                        <option>Talles disponibles</option>
                        {getTalles("color")}
                      </select>
                    </li>
                    <li className="list-group-item mb-2"  style={ medidas==null ? { display:'none'} : {display : 'block'} }>
                      <strong>Medidas: </strong> {medidas}
                    </li>
                    <li className="list-group-item mb-2"  style={ marca==null ? { display:'none'} : {display : 'block'} }>
                      <strong>Marca: </strong> {marca}
                    </li>
                    <li className="list-group-item mb-2"  style={ tipoBaraja==null ? { display:'none'} : {display : 'block'} }>
                      <strong>Tipo de Baraja: </strong> {tipoBaraja}
                    </li>
                    <li className="list-group-item mb-2">
                      <strong>Cantidad a Comprar: </strong>
                      <input 
                        type="number" 
                        min="1" 
                        max={stock}
                        onChange={(event) => setCantidadAComprarProducto(event.target.value)} 
                        className="cantidadAComprar text-center"
                      />
                    </li>
                    <li className="list-group-item mb-4">
                        Precio: <strong>${precio}</strong>
                        <input 
                          type="hidden" 
                          value={precio}
                          onChange={(event) => setPrecioProducto(event.target.value)}
                        />
                    </li>
                    <div className="d-flex flex-column">
                    <span 
                      className="badge bg-danger d-lg-block d-sm-none bt-comprar1 cho-container" 
                      id="checkout-open"
                      style={{ cursor: 'pointer', fontSize:'20px' }}
                      onClick={()=>{
                        comprarProducto();
                      }}>
                      COMPRAR
                    </span>
                </div>
                </ul>
            </div>
       </div>
       <span 
        className="btn btn-danger d-sm-block d-lg-none bt-comprar text-light cho-container" 
        id="checkout-open"
        style={{ fontSize:'16px', width:'100%', height:'38px'}}
        onClick={()=>{
          comprarProducto();
        }}>
          COMPRAR
        </span>
       <Link to="/inicio/tienda" className="btn btn-success mt-3" style={{textDecoration:'none', color:'white'}}>
                VOLVER
      </Link>
    </div>
    <script src="https://sdk.mercadopago.com/js/v2"></script></>
    
  );
};

export default AccesorioDetalle;
