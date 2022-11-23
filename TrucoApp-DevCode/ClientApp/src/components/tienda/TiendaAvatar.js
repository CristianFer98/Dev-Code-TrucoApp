import React , { useState } from 'react';
import './tienda.css';
import { Link } from 'react-router-dom';
import Card from './TiendaAvatarCard';

export function TiendaAvatar() {
    const url = "https://dev-code-trucoapp20221119110900.azurewebsites.net/api/Accesorio/ObtenerAccesorios";

    const [accesorios, setAccesorios] = useState([]);

    const idsAccesoriosPelo = [1,2,3,4,5,6];
    const idsAccesoriosRopa = [7,8,9,10,11];
    
    const comprarTodo= async(arrayAccesorios)=>{
        const url = 'https://dev-code-trucoapp20221119110900.azurewebsites.net/api/Accesorio/ComprarTodo';
        const resp = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(arrayAccesorios)
        });

        if(resp.ok){
             console.log("se envio ids")
        }else{
            console.log("no funciono")
        }
     
    }
  
    const getAccesorios = ()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data=>setAccesorios(data));
        //console.table(accesorios);
    }
    getAccesorios();

    const getListadoRopa = () =>{
        const listadoRopa =[];
        accesorios.map((accesorio) =>{
            if(accesorio.descripcion=='ropa'){
                listadoRopa.push(accesorio);   
            }
        });
        return listadoRopa;
    }

    const getListadoPelo = () =>{
        const listadoPelo =[];
        accesorios.map((accesorio) =>{
            if(accesorio.descripcion=='pelo'){
                listadoPelo.push(accesorio);   
            }
        });
        return listadoPelo;
    }
  return (
    <div className="componente-store" style={{ zIndex:'999', height:'100%'}}>
      <h1 className="titulo titulo-tienda-avatar mb-5 mt-3">Lookea tu Avatar con el mejor estilo </h1>
      
      <div className="card p-3" style={{width:'80%'}} id="div-pelo">
            <div className="card-header mb-3">
                <h3 className="card-title text-dark">Pelo</h3>
            </div>
            <div className="contenedor-pelo d-flex flex-lg-row flex-sm-column justify-content-center card border-0" style={{width:'100%', zIndex:'8'}}>
            
                {getListadoPelo().map((pelo,i) => (
                                <Card
                                key={i}
                                id={pelo.idAccesorio}
                                imagen={pelo.imagen}
                                precio={pelo.precio}
                                comprado={pelo.comprado}
                                />
                            ))}
            </div> 
            <button 
                className="btn btn-danger mt-3 text-light" 
                style={{fontWeight: 'bold', color:'white'}}
                onClick={()=> comprarTodo(idsAccesoriosPelo)}
            >
                COMPRAR TODO
            </button>
      </div>

      <div className="card p-3 mt-3" style={{width:'80%'}} id="div-ropa">
            <div className="card-header mb-3">
                <h3 className="card-title text-dark">Ropa</h3>
            </div>
            <div className="contenedor-ropa d-flex flex-lg-row flex-sm-column justify-content-center card border-0" style={{width:'100%', zIndex:'8'}}>
            
                {getListadoRopa().map((ropa, i) => (
                        <Card
                        key={i}
                        id={ropa.idAccesorio}
                        imagen={ropa.imagen}
                        precio={ropa.precio}
                        comprado={ropa.comprado}
                        />
                    ))}
            </div> 
            <button 
                className="btn btn-danger mt-3 text-light" 
                style={{fontWeight: 'bold', color:'white'}}
                onClick={()=> comprarTodo(idsAccesoriosRopa)}>
                    COMPRAR TODO
            </button>
      </div>
   
      <Link to="/inicio/tienda" className="btn btn-success mt-3 mb-3" style={{textDecoration:'none', color:'white'}}>
                VOLVER
      </Link>
    </div>
  );
}
