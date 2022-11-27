import React , { useState, useEffect } from 'react';
import './tienda.css';
import { Link } from 'react-router-dom';
import Card from './TiendaAvatarCard';

export function TiendaAvatar() {

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

    const url = "https://localhost:44342/api/Accesorio/ObtenerAccesorios";

    const [accesorios, setAccesorios] = useState([]);

    const idsAccesoriosPelo = [1,2,3,4,5,6];
    const idsAccesoriosRopa = [7,8,9,10,11];

    const getIdPreferencia = async(opcion)=>{
        
        fetch(`https://localhost:44342/api/Accesorio/ComprarTodo/${opcion}`)
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data.result);
            if(lib){

                const mp = new window.MercadoPago('TEST-266fb749-17ee-4759-b90f-ffa5a3e4c8c0', {
                    locale: 'es-AR'
                  });
                  
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
    
    const comprarTodo= async(arrayAccesorios, opcion)=>{
        getIdPreferencia(opcion);
        
        const url = 'https://localhost:44342/api/Accesorio/ActualizarEstadosComprado';
        const resp = await fetch(url, {
            method: "PUT",
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
                className="btn btn-danger mt-3 text-light comprar-todo-pelo" 
                style={{fontWeight: 'bold', color:'white'}}
                onClick={()=> {
                    comprarTodo(idsAccesoriosPelo, 1);
                    document.querySelector('.comprar-todo-ropa').classList.toggle('cho-container');
                }}
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
                className="btn btn-danger mt-3 text-light comprar-todo-ropa" 
                style={{fontWeight: 'bold', color:'white'}}
                onClick={()=> {
                    comprarTodo(idsAccesoriosRopa, 2);
                    document.querySelector('.comprar-todo-ropa').classList.toggle('cho-container');
                }}>
                    COMPRAR TODO
            </button>
      </div>
   
      <Link to="/inicio/tienda" className="btn btn-success mt-3 mb-3" style={{textDecoration:'none', color:'white'}}>
                VOLVER
      </Link>
    </div>
  );
}
