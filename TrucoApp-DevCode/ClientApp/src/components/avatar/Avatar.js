import React from 'react';
import { useState } from 'react';
import './avatar.css';
import imagenes from './AvatarImagenes';
import { Link } from 'react-router-dom';
import { 
  mostrarAvatarSeleccionadoMasConfiguracion,
  setPelo,
  setPiel,
  setOjos
} from './Funciones';

const url = "https://localhost:44342/api/Avatar/GuardarAvatar";

export function Avatar() {
  const [IdUsuarioAvatar, setIdUsuarioAvatar] = useState(1);
  const [Pelo, setEstadoPelo] = useState('pelo');
  const [Ceja, setEstadoCeja] = useState('ceja-negra');
  const [ColorDePiel, setEstadoColorDePiel] = useState('piel-default');
  const [ColorDeOjos, setEstadoColorDeOjos] = useState('iris-marron');
  const [Ropa, setEstadoRopa] = useState('ropa');

  const [avatarAccesorios, setAvatarAccesorios] = useState([]);
  
    const getAvatarAccesorios = ()=>{
        fetch("https://localhost:44342/api/Accesorio/ObtenerAccesorios")
        .then(res=> res.json())
        .then(data=>setAvatarAccesorios(data));
        
    }
    getAvatarAccesorios();  
    const getListadoPelo = () =>{
      const listadoPelo =[];
      avatarAccesorios.map((accesorio) =>{
          if(accesorio.descripcion=='pelo'){
              listadoPelo.push(accesorio);   
          }
      });
      return listadoPelo;
    }

    const getListadoRopa = () =>{
      const listadoRopa =[];
      avatarAccesorios.map((accesorio) =>{
          if(accesorio.descripcion=='ropa'){
              listadoRopa.push(accesorio);   
          }
      });
      return listadoRopa;
  }

   const handleSubmit= async (e) =>{
      e.preventDefault(); 
         const resp = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              IdUsuarioAvatar:IdUsuarioAvatar,
              Pelo:Pelo, 
              Ceja:Ceja,
              ColorDePiel:ColorDePiel,
              ColorDeOjos:ColorDeOjos, 
              Ropa:Ropa 
            })
          });
          if (resp.ok) {
            console.log("guardado con exito");
            document.querySelector('.mensaje').classList.remove('alert-primary');
            document.querySelector('.mensaje').classList.add('alert-success');
            document.querySelector('.mensaje').innerHTML="<i className='fa-solid fa-check'></i> Guardado con éxito";
          } else{
              console.log("error, no se pudo guardar");
              document.querySelector('.mensaje').classList.remove('alert-primary');
              document.querySelector('.mensaje').classList.add('alert-danger');
              document.querySelector('.mensaje').innerHTML="<i class='fa-solid fa-xmark'></i> Hubo un error intente más tarde";
          }     
     
  }

  return (
    <div className="componente-avatar" style={{height:'100%'}}>
      <h1 className="titulo mt-4">Crea tu avatar y personalizalo</h1>
      <div className="alert alert-primary text-center mt-3 mb-0 mensaje" role="alert" style={{width:'50%'}}>
      Selecciona un avatar, modifícalo y guárdalo.
    </div>
      <div className="componente-avatar-modificacion">
        <div className="componente-principal version-m" >
          <div className="avatar">
            <div className="oreja-izq piel-default"></div>
            <div className="cabeza piel-default">
              <div className="contendor-pelo">
                <img alt="" id="pelo-actual" src={imagenes['pelo-v1-m-negro']} className="pelo-m pelo-v1-m-negro"/>
              </div>
              <div className="cejas-ojos-nariz-boca">
                <div className="contenedor-cejas">
                  <div className="ceja-izq ceja-negra"></div>
                  <div className="ceja-der ceja-negra"></div>
                </div>
                <div className="contendor-ojos">
                  <div className="ojo-izq">
                    <div className="iris-izq iris-marron">
                      <div className="pupila-izq"></div>
                    </div>
                  </div>
                  <div className="ojo-der">
                    <div className="iris-der iris-marron">
                      <div className="pupila-der"></div>
                    </div>
                  </div>
                </div>
                <div className="nariz"></div>
                <div className="boca"></div>
              </div>
            </div>
            <div className="oreja-der piel-default"></div>
          </div>
          <div className="cuello piel-default"></div>
          <div className="componente-ropa">
            <img alt="" src={imagenes.ropa} id="ropaActual" className="ropa"/>
          </div>
          <div className="contendor-brazos">
            <div className="brazo-izq piel-default"></div>
            <div className="brazo-der piel-default"></div>
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center">
              <button 
              type="button"
              className="btn btn-primary mt-2 opcion me-3"
              onClick={() => mostrarAvatarSeleccionadoMasConfiguracion('.version-f')}
              >
                Opción 1
              </button> 
          </div>
          
        </div>

        <div className="componente-principal version-f">
          <div className="avatar">
            <div className="oreja-izq piel-default" style={{display:'none'}}></div>
            <div className="cabeza piel-default">
              <div className="contendor-pelo">
                <img alt="" id="pelo-actual" src={imagenes['pelo-v2-f-negro']} className="pelo-f pelo-v2-f-negro"/>
              </div>
              <div className="cejas-ojos-nariz-boca-f">
                <div className="contenedor-cejas">
                  <div className="ceja-izq ceja-negra"></div>
                  <div className="ceja-der ceja-negra"></div>
                </div>
                <div className="contendor-ojos">
                  <div className="ojo-izq">
                    <div className="iris-izq iris-marron">
                      <div className="pupila-izq"></div>
                    </div>
                  </div>
                  <div className="ojo-der">
                    <div className="iris-der iris-marron">
                      <div className="pupila-der"></div>
                    </div>
                  </div>
                </div>
                <div className="nariz"></div>
                <div className="boca"></div>
              </div>
            </div>
            <div className="oreja-der piel-default" style={{display:'none'}}></div>
          </div>
          <div className="cuello piel-default"></div>
          <div className="componente-ropa">
            <img alt="" src={imagenes.ropa} id="ropaActual" className="ropa"/>
          </div>
          <div className="contendor-brazos">
            <div className="brazo-izq piel-default"></div>
            <div className="brazo-der piel-default"></div>
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center">
              <button 
                type="button" 
                className="btn btn-primary mt-2 opcion me-3"
                onClick={() => mostrarAvatarSeleccionadoMasConfiguracion('.version-m')}
              >
                  Opción 2
              </button>
              
          </div>
          
        </div>

        <div className="componente-cambio-aspecto ocultar" style={{display:'none'}}>
          <div id="carouselExampleControls" className="carousel slide d-flex flex-row" data-bs-ride="carousel">
             <button className="carousel-control-prev m-0 p-0" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" style={{width:'5%'}}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <div className="carousel-inner">
                <div className="carousel-item active">
                    <strong style={{ fontSize: '18px' }}>Color de ojos</strong>
                    <div className="modificar color-ojo mb-3">
                      <div
                        className="ojo ojo-marron"
                        onClick={() => {
                          setOjos('iris-marron');
                          setEstadoColorDeOjos('iris-marron');
                        }}
                      >
                        <div className="iris iris-marron">
                          <div className="pupila" title="ojos marrones"></div>
                        </div>
                      </div>

                      <div
                        className="ojo ojo-verde"
                        onClick={() => {
                          setOjos('iris-verde');
                          setEstadoColorDeOjos('iris-verde');
                        }}
                      >
                        <div className="iris iris-verde">
                          <div className="pupila" title="ojos verdes"></div>
                        </div>
                      </div>
                      <div
                        className="ojo ojo-celeste"
                        onClick={() =>{
                          setOjos('iris-celeste');
                          setEstadoColorDeOjos('iris-celeste');
                        }}
                      >
                        <div className="iris iris-celeste">
                          <div className="pupila" title="ojos celestes"></div>
                        </div>
                      </div>
                    </div>
                    <strong style={{ fontSize: '18px' }}>Color de piel</strong>
                    <div className="modificar color-piel mb-3">
                      <div
                        className="piel piel-default"
                        title="default"
                        onClick={() =>{
                          setPiel('piel-default');
                          setEstadoColorDePiel('piel-default');
                        }}
                      ></div>
                      <div
                        className="piel piel-rosa"
                        title="piel rosa"
                        onClick={() => {
                          setPiel('piel-rosa');
                          setEstadoColorDePiel('piel-rosa');
                        }}
                      ></div>
                      <div
                        className="piel piel-morada"
                        title="piel morada"
                        onClick={() => {
                          setPiel('piel-morada');
                          setEstadoColorDePiel('piel-morada');
                        }}
                      ></div>
                      <div
                        className="piel piel-morena"
                        title="piel morena"
                        onClick={() => {
                          setPiel('piel-morena');
                          setEstadoColorDePiel('piel-morena');
                        }}
                      ></div>
                      <div
                        className="piel piel-oscura"
                        title="piel oscura"
                        onClick={() =>{
                          setPiel('piel-oscura');
                          setEstadoColorDePiel('piel-oscura');
                        }}
                      ></div>
                    </div>

                      <strong style={{ fontSize: '18px' }}>Color de pelo</strong>
                      <div className="modificar color-pelo mb-3">
                        <div
                          className="pelo pelo-negro"
                          title="pelo negro"
                          onClick={() => {
                            setPelo('negro', 'ceja-negra');
                            setEstadoCeja('ceja-negra');
                          }}
                        ></div>
                        <div
                          className="pelo pelo-castano"
                          title="pelo castaño"
                          onClick={() => {
                            setPelo('castano','ceja-castana');
                            setEstadoCeja('ceja-castana');
                          }}
                        ></div>
                        <div
                          className="pelo pelo-rubio"
                          title="pelo rubio"
                          onClick={() =>{
                            setPelo('rubio','ceja-rubia');
                            setEstadoCeja('ceja-rubia');
                          }}
                        ></div>
                        <div
                          className="pelo pelo-colorado"
                          title="pelo colorado"
                          onClick={() =>{
                            setPelo('colorado','ceja-colorada');
                            setEstadoCeja('ceja-colorada');
                          }}
                        ></div>
                        <div
                          className="pelo pelo-canoso"
                          title="pelo canoso"
                          onClick={() => {
                            setPelo('canoso','ceja-canosa');
                            setEstadoCeja('ceja-canosa');
                          }}
                        ></div>
                      </div>

                </div>
                <div className="carousel-item">
                  <strong style={{ fontSize: '18px'}} className="mb-3">Pelo</strong>
                  <div className="modificar cambio-pelo">
                    {getListadoPelo().map((pelo) => (
                      <button 
                        className={`${pelo.imagen} btn border-0 ${pelo.comprado==true?'':'disabled'}`}
                        style={{width:'200%', height:'auto'}}
                        onClick={()=>setPelo(pelo.imagen)}>
                          <img src={imagenes[pelo.imagen]} style={{width:'90%', height:'auto', cursor:'pointer'}}/>
                      </button>
                  ))}
                 
                  </div>

                  <strong style={{ fontSize: '18px'}} className="mb-3">Ropa</strong>    
                  <div className="modificar cambio-ropa">
                    {getListadoRopa().map((ropa) => (
                      <button 
                        className={`${ropa.imagen} btn border-0 ${ropa.comprado==true ?'':'disabled'}`}
                        style={{width:'200%', height:'auto'}}
                        onClick={()=>setPelo(ropa.imagen)}>
                          <img src={imagenes[ropa.imagen]} style={{width:'90%', height:'auto', cursor:'pointer'}}/>
                      </button>
                  ))}
                 
                  </div>
                  
                  <div className="alert alert-primary text-center mt-3 mb-0 mensaje d-flex justify-content-center flex-column" role="alert" style={{width:'100%'}}>
                    Ingresé a la tienda para tener acceso a todos los accesorios
                    <Link to="/inicio/tienda-avatar" className="btn btn-success mt-3 mb-3" style={{textDecoration:'none', color:'white'}}>
                            Ingresar
                    </Link>
                  </div>
                </div>
                
              </div>
             
              <button className="carousel-control-next m-0 p-0" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" style={{width:'5%'}}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
          </div>

            <form onSubmit={handleSubmit} style={{display:'none'}} className="guardarAvatar">
              <input
                  type="hidden"
                  name="IdUsuario"
                  value={IdUsuarioAvatar}
              />  
              <input 
                  type="hidden"
                  name="Pelo"
                  value={Pelo}
                />
                <input 
                  type="hidden"
                  name="Ceja"
                  value={Ceja}
                />
                <input 
                  type="hidden"
                  name="ColorDePiel"
                  value={ColorDePiel}
                />
                <input 
                  type="hidden"
                  name="ColorDeOjos"
                  value={ColorDeOjos}
                />
                <input 
                  type="hidden"
                  name="Ropa"
                  value={Ropa}
                />
              <button 
                  type="submit"
                  className="btn btn-primary mt-2"
                >
                  Guardar
                </button>
          </form>
        </div>
      </div>
    </div>
  );
}
