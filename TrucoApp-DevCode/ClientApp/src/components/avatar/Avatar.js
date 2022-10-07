import React from 'react';
import './avatar.css';
import imagenes from './Imagenes';
import { 
  mostrarAvatarSeleccionadoMasConfiguracion,
  setPelo,
  setPiel,
  setOjos
} from './Funciones';

export function Avatar() {
  return (
    <div className="componente-avatar" style={{height:'100%'}}>
      <h1 className="titulo mt-4">Crea tu avatar y personalizalo</h1>
      <div class="alert alert-primary text-center mt-3 mb-0" role="alert" style={{width:'50%'}}>
      Selecciona un avatar, modifícalo y guárdalo.
      <br/>
      Así de simple!
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
            <img alt="" src={imagenes.ropa} />
          </div>
          <div className="contendor-brazos">
            <div className="brazo-izq piel-default"></div>
            <div className="brazo-der piel-default"></div>
          </div>
          <button 
           type="button"
           class="btn btn-primary mt-2"
           onClick={() => mostrarAvatarSeleccionadoMasConfiguracion('.version-f')}
           >
            Opción 1
          </button>
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
            <img alt="" src={imagenes.ropa} />
          </div>
          <div className="contendor-brazos">
            <div className="brazo-izq piel-default"></div>
            <div className="brazo-der piel-default"></div>
          </div>
          <button 
            type="button" 
            class="btn btn-primary mt-2"
            onClick={() => mostrarAvatarSeleccionadoMasConfiguracion('.version-m')}
          >
              Opción 2
          </button>
        </div>

        <div className="componente-cambio-aspecto ocultar" style={{display:'none'}}>
          <strong style={{ fontSize: '18px' }}>Color de ojos</strong>
          <div className="modificar color-ojo">
            <div
              className="ojo ojo-marron"
              onClick={() => setOjos('iris-marron')}
            >
              <div className="iris iris-marron">
                <div className="pupila" title="ojos marrones"></div>
              </div>
            </div>

            <div
              className="ojo ojo-verde"
              onClick={() => setOjos('iris-verde')}
            >
              <div className="iris iris-verde">
                <div className="pupila" title="ojos verdes"></div>
              </div>
            </div>
            <div
              className="ojo ojo-celeste"
              onClick={() => setOjos('iris-celeste')}
            >
              <div className="iris iris-celeste">
                <div className="pupila" title="ojos celestes"></div>
              </div>
            </div>
          </div>
          <strong style={{ fontSize: '18px' }}>Color de piel</strong>
          <div className="modificar color-piel">
            <div
              className="piel piel-default"
              title="default"
              onClick={() => setPiel('piel-default')}
            ></div>
            <div
              className="piel piel-rosa"
              title="piel rosa"
              onClick={() => setPiel('piel-rosa')}
            ></div>
            <div
              className="piel piel-morada"
              title="piel morada"
              onClick={() => setPiel('piel-morada')}
            ></div>
            <div
              className="piel piel-morena"
              title="piel morena"
              onClick={() => setPiel('piel-morena')}
            ></div>
            <div
              className="piel piel-oscura"
              title="piel oscura"
              onClick={() => setPiel('piel-oscura')}
            ></div>
          </div>
          <strong style={{ fontSize: '18px' }}>Color de pelo</strong>
          <div className="modificar color-pelo">
            <div
              className="pelo pelo-negro"
              title="pelo negro"
              onClick={() => setPelo('negro', 'ceja-negra')}
            ></div>
            <div
              className="pelo pelo-castano"
              title="pelo castaño"
              onClick={() => setPelo('castano', 'ceja-castana')}
            ></div>
            <div
              className="pelo pelo-rubio"
              title="pelo rubio"
              onClick={() => setPelo('rubio', 'ceja-rubia')}
            ></div>
            <div
              className="pelo pelo-colorado"
              title="pelo colorado"
              onClick={() => setPelo('colorado', 'ceja-colorada')}
            ></div>
            <div
              className="pelo pelo-canoso"
              title="pelo canoso"
              onClick={() => setPelo('canoso', 'ceja-canosa')}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
