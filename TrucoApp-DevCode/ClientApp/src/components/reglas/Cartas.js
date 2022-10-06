import React from 'react';
import { espadas, bastos, oros, copas } from './loadCards';

function Cartas() {
  return (
    <>
      <section>
        <h3 className="text-dark">Los Anchos</h3>
        <p className="mx-5 my-3">
          Son las dos cartas mas fuertes del juego. El ancho de espada es la
          carta más fuerte y luego le sigue en ancho de basto. Pueden ganar
          contra cualquier otra carta.
        </p>
        <div className="row">
          <div className="col">
            <img
              className="my-3 rounded"
              src={espadas[0]}
              alt="Ancho de espada"
            />
          </div>
          <div className="col">
            <img
              className="my-3 rounded"
              src={bastos[0]}
              alt="Ancho de basto"
            />
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-dark">Siete de Espada y Siete de Oro</h3>
        <p className="mx-5 my-3">
          Luego de los anchos, son las cartas mas fuertes. El siete de espadas
          es la tercera carta mas fuertes y luego le sigue el siete de oros.
        </p>
        <div className="row">
          <div className="col">
            <img
              className="my-3 rounded"
              src={espadas[6]}
              alt="Ancho de espada"
            />
          </div>
          <div className="col">
            <img className="my-3 rounded" src={oros[6]} alt="Ancho de basto" />
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-dark">Los Tres</h3>
        <p>
          Son las cartas mas fuertes luego de las anteriormente mencionadas.
        </p>
        <div className="row">
          <div className="col col-md-6 col-xl-3">
            <img
              className="my-3 rounded"
              src={espadas[2]}
              alt="Ancho de espada"
            />
          </div>
          <div className="col col-md-6 col-xl-3">
            <img
              className="my-3 rounded"
              src={bastos[2]}
              alt="Ancho de basto"
            />
          </div>
          <div className="col col-md-6 col-xl-3">
            <img className="my-3 rounded" src={oros[2]} alt="Ancho de basto" />
          </div>
          <div className="col col-md-6 col-xl-3">
            <img className="my-3 rounded" src={oros[2]} alt="Ancho de basto" />
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-dark">Los Dos</h3>
        <p>Luego de los Tres, las cartas mas fuertes son los Dos.</p>
        <div className="row">
          <div className="col col-md-6 col-xl-3">
            <img
              className="my-3 rounded"
              src={espadas[1]}
              alt="Ancho de espada"
            />
          </div>
          <div className="col col-md-6 col-xl-3">
            <img
              className="my-3 rounded"
              src={bastos[1]}
              alt="Ancho de basto"
            />
          </div>
          <div className="col col-md-6 col-xl-3">
            <img className="my-3 rounded" src={oros[1]} alt="Ancho de basto" />
          </div>
          <div className="col col-md-6 col-xl-3">
            <img className="my-3 rounded" src={oros[1]} alt="Ancho de basto" />
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-dark">Las Ancho Falsos</h3>
        <p>
          Se les dice los Anchos Falsos porque no valen lo que los de basto y
          espadas. Son los de Oro y Copas, y son las cartas mas fuertes luego de
          todas las mencionadas.
        </p>
        <div className="row">
          <div className="col">
            <img className="my-3 rounded" src={oros[0]} alt="Ancho de espada" />
          </div>
          <div className="col">
            <img className="my-3 rounded" src={copas[0]} alt="Ancho de basto" />
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-dark">Las Figuras</h3>
        <p>
          Las figuras se les dice a las cartas entre el 10 y 12. Tienen la
          particularidad que en el envido, suman 0 tantos.
          <br />
          Luego de los Unos (no los Anchos), son las cartas mas fuertes. En el
          siguiente orden, de mas fuerte a mas débil: los 12, los 11 y los 10.
        </p>
        <div className="row">
          <div className="col col-md-6 col-xl-3">
            <img
              className="my-3 rounded"
              src={espadas[9]}
              alt="Ancho de espada"
            />
          </div>
          <div className="col col-md-6 col-xl-3">
            <img
              className="my-3 rounded"
              src={bastos[9]}
              alt="Ancho de basto"
            />
          </div>
          <div className="col col-md-6 col-xl-3">
            <img className="my-3 rounded" src={oros[9]} alt="Ancho de espada" />
          </div>
          <div className="col col-md-6 col-xl-3">
            <img className="my-3 rounded" src={copas[9]} alt="Ancho de basto" />
          </div>
        </div>
        <div className="row">
          <div className="col col-md-6 col-xl-3">
            <img
              className="my-3 rounded"
              src={espadas[8]}
              alt="Ancho de espada"
            />
          </div>
          <div className="col col-md-6 col-xl-3">
            <img
              className="my-3 rounded"
              src={bastos[8]}
              alt="Ancho de basto"
            />
          </div>
          <div className="col col-md-6 col-xl-3">
            <img className="my-3 rounded" src={oros[8]} alt="Ancho de espada" />
          </div>
          <div className="col col-md-6 col-xl-3">
            <img className="my-3 rounded" src={copas[8]} alt="Ancho de basto" />
          </div>
        </div>
        <div className="row">
          <div className="col col-md-6 col-xl-3">
            <img
              className="my-3 rounded"
              src={espadas[7]}
              alt="Ancho de espada"
            />
          </div>
          <div className="col col-md-6 col-xl-3">
            <img
              className="my-3 rounded"
              src={bastos[7]}
              alt="Ancho de basto"
            />
          </div>
          <div className="col col-md-6 col-xl-3">
            <img className="my-3 rounded" src={oros[7]} alt="Ancho de espada" />
          </div>
          <div className="col col-md-6 col-xl-3">
            <img className="my-3 rounded" src={copas[7]} alt="Ancho de basto" />
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-dark">Las más débiles</h3>
        <p>
          Son las cartas que siguen a todas las mencionadas anteriormente.
          <br />
          En el siguiente orden, están ordenadas de más fuertes a más débiles:
          los sietes falsos (por el mismo motivo que los anchos falsos), los
          seis, los cincos, y los cuatros.
        </p>
        <div className="row">
          <div className="col">
            <img
              className="my-3 rounded"
              src={bastos[6]}
              alt="Ancho de espada"
            />
          </div>
          <div className="col">
            <img className="my-3 rounded" src={copas[6]} alt="Ancho de basto" />
          </div>
        </div>
        <div className="row">
          <div className="col col-md-6 col-xl-3">
            <img
              className="my-3 rounded"
              src={espadas[5]}
              alt="Ancho de espada"
            />
          </div>
          <div className="col col-md-6 col-xl-3">
            <img
              className="my-3 rounded"
              src={bastos[5]}
              alt="Ancho de basto"
            />
          </div>
          <div className="col col-md-6 col-xl-3">
            <img className="my-3 rounded" src={oros[5]} alt="Ancho de espada" />
          </div>
          <div className="col col-md-6 col-xl-3">
            <img className="my-3 rounded" src={copas[5]} alt="Ancho de basto" />
          </div>
        </div>
        <div className="row">
          <div className="col col-md-6 col-xl-3">
            <img
              className="my-3 rounded"
              src={espadas[4]}
              alt="Ancho de espada"
            />
          </div>
          <div className="col col-md-6 col-xl-3">
            <img
              className="my-3 rounded"
              src={bastos[4]}
              alt="Ancho de basto"
            />
          </div>
          <div className="col col-md-6 col-xl-3">
            <img className="my-3 rounded" src={oros[4]} alt="Ancho de espada" />
          </div>
          <div className="col col-md-6 col-xl-3">
            <img className="my-3 rounded" src={copas[4]} alt="Ancho de basto" />
          </div>
        </div>
        <div className="row">
          <div className="col col-md-6 col-xl-3">
            <img
              className="my-3 rounded"
              src={espadas[3]}
              alt="Ancho de espada"
            />
          </div>
          <div className="col col-md-6 col-xl-3">
            <img
              className="my-3 rounded"
              src={bastos[3]}
              alt="Ancho de basto"
            />
          </div>
          <div className="col col-md-6 col-xl-3">
            <img className="my-3 rounded" src={oros[3]} alt="Ancho de espada" />
          </div>
          <div className="col col-md-6 col-xl-3">
            <img className="my-3 rounded" src={copas[3]} alt="Ancho de basto" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Cartas;
