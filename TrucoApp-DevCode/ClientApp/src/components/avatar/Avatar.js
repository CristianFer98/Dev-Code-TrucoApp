import React from 'react';
import './avatar.css';
import pelo from './../../assets/avatar/pelo1.png';
import peloCastano from './../../assets/avatar/pelo2.png';
import peloRubio from './../../assets/avatar/pelo3.png';
import peloColorado from './../../assets/avatar/pelo4.png';
import peloCanoso from './../../assets/avatar/pelo5.png';

import ropa from './../../assets/avatar/ropa.png';

const setPelo = (peloNuevo, cejaColorNuevo) => {
  let peloActual = document.querySelector('#pelo-actual');
  let cejaColorActual = document.querySelector('.ceja-izq').classList[1];
  document.querySelector('.ceja-izq').classList.remove(cejaColorActual);
  document.querySelector('.ceja-der').classList.remove(cejaColorActual);
  document.querySelector('.ceja-izq').classList.add(cejaColorNuevo);
  document.querySelector('.ceja-der').classList.add(cejaColorNuevo);
  peloActual.src = peloNuevo;
};
const setPiel = (colorNuevo) => {
  let colorActual = document.querySelector('.cabeza').classList[1];

  document.querySelector('.cabeza').classList.remove(colorActual);
  document.querySelector('.oreja-der').classList.remove(colorActual);
  document.querySelector('.oreja-izq').classList.remove(colorActual);
  document.querySelector('.cuello').classList.remove(colorActual);
  document.querySelector('.brazo-der').classList.remove(colorActual);
  document.querySelector('.brazo-izq').classList.remove(colorActual);

  document.querySelector('.cabeza').classList.add(colorNuevo);
  document.querySelector('.oreja-der').classList.add(colorNuevo);
  document.querySelector('.oreja-izq').classList.add(colorNuevo);
  document.querySelector('.cuello').classList.add(colorNuevo);
  document.querySelector('.brazo-der').classList.add(colorNuevo);
  document.querySelector('.brazo-izq').classList.add(colorNuevo);
};

const setOjos = (colorNuevo) => {
  let colorActual = document.querySelector('.iris-der').classList[1];

  document.querySelector('.iris-izq').classList.remove(colorActual);
  document.querySelector('.iris-der').classList.remove(colorActual);
  document.querySelector('.iris-izq').classList.add(colorNuevo);
  document.querySelector('.iris-der').classList.add(colorNuevo);
};
export function Avatar() {
  return (
    <div className="componente-avatar">
      <h1 className="titulo">Crea tu avatar y personalizalo</h1>
      <div className="componente-avatar-modificacion">
        <div className="componente-principal">
          <div className="avatar">
            <div className="oreja-izq piel-default"></div>
            <div className="cabeza piel-default">
              <div className="contendor-pelo">
                <img alt="" id="pelo-actual" src={pelo} />
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
            <img alt="" src={ropa} />
          </div>
          <div className="contendor-brazos">
            <div className="brazo-izq piel-default"></div>
            <div className="brazo-der piel-default"></div>
          </div>
        </div>

        <div className="componente-cambio-aspecto">
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
              onClick={() => setPelo(pelo, 'ceja-negra')}
            ></div>
            <div
              className="pelo pelo-castano"
              title="pelo castaño"
              onClick={() => setPelo(peloCastano, 'ceja-castana')}
            ></div>
            <div
              className="pelo pelo-rubio"
              title="pelo rubio"
              onClick={() => setPelo(peloRubio, 'ceja-rubia')}
            ></div>
            <div
              className="pelo pelo-colorado"
              title="pelo colorado"
              onClick={() => setPelo(peloColorado, 'ceja-colorada')}
            ></div>
            <div
              className="pelo pelo-canoso"
              title="pelo canoso"
              onClick={() => setPelo(peloCanoso, 'ceja-canosa')}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
