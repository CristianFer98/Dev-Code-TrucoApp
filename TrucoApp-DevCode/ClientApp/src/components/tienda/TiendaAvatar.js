import React from 'react';
import './tienda.css';
import { Link } from 'react-router-dom';
import peloV1F from './../../assets/avatar/pelo-v1-f.png';
import peloV2F from './../../assets/avatar/pelo-v2-f.png';
import peloV2M from './../../assets/avatar/pelo-v2-m.png';
import peloV3M from './../../assets/avatar/pelo-v3-m.png';
import ropaV2 from './../../assets/avatar/ropa-v2.png';
import ropaV3 from './../../assets/avatar/ropa-v3.png';
import ropaV4 from './../../assets/avatar/ropa-v4.png';
import ropaV5 from './../../assets/avatar/ropa-v5.png';
export function TiendaAvatar() {
  return (
    <div className="componente-store">
      <h1 id="lookea-tu-avatar" className="titulo my-5">Lookea tu Avatar con el mejor estilo </h1>

      <div className="card p-3" style={{ width: '60%', zIndex: '8' }}>
        <div className="card-header">
          <h3 className="card-title text-dark">Pelo</h3>
        </div>
        <div className="card- d-flex flex-row">
          <div className="card">
            <img
              className="card-img-top mx-auto"
              src={peloV1F}
              style={{ width: '80%' }}
              alt="pelo-version1f"
            />
            <div className="card-body">
              <p className="card-text d-flex flex-column text-center">
                <strong> $300</strong>
                <span
                  className="badge bg-danger p-3"
                  style={{ cursor: 'pointer' }}
                >
                  COMPRAR
                </span>
              </p>
            </div>
          </div>

          <div className="card">
            <img
              className="card-img-top mx-auto"
              src={peloV2F}
              alt="pelo-version2f"
              style={{ width: '70%' }}
            />
            <div className="card-body">
              <p className="card-text d-flex flex-column text-center">
                <strong> $300</strong>
                <span
                  className="badge bg-danger p-3"
                  style={{ cursor: 'pointer' }}
                >
                  COMPRAR
                </span>
              </p>
            </div>
          </div>

          <div className="card">
            <img
              className="card-img-top mx-auto "
              src={peloV2M}
              style={{ width: '80%' }}
              alt="pelo-version2m"
            />
            <div className="card-body">
              <p className="card-text d-flex flex-column text-center">
                <strong> $300</strong>
                <span
                  className="badge bg-danger p-3"
                  style={{ cursor: 'pointer' }}
                >
                  COMPRAR
                </span>
              </p>
            </div>
          </div>

          <div className="card">
            <img
              className="card-img-top mx-auto"
              src={peloV3M}
              style={{ width: '80%' }}
              alt="pelo-version3m"
            />
            <div className="card-body">
              <p className="card-text d-flex flex-column text-center">
                <strong> $300</strong>
                <span
                  className="badge bg-danger p-3"
                  style={{ cursor: 'pointer' }}
                >
                  COMPRAR
                </span>
              </p>
            </div>
          </div>
        </div>
        <a href="/inicio/tienda-avatar" className="btn btn-danger mt-3">
          COMPRAR TODO
        </a>
      </div>

      <div className="card p-3" style={{ width: '60%' }}>
        <div className="card-header">
          <h3 className="card-title text-dark">Ropa</h3>
        </div>
        <div className="card- d-flex flex-row">
          <div className="card">
            <img className="card-img-top" src={ropaV2} alt="remera-version2" />
            <div className="card-body">
              <p className="card-text d-flex flex-column text-center">
                <strong> $350</strong>
                <span
                  className="badge bg-danger p-3"
                  style={{ cursor: 'pointer' }}
                >
                  COMPRAR
                </span>
              </p>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src={ropaV3} alt="remera-version3" />
            <div className="card-body">
              <p className="card-text d-flex flex-column text-center">
                <strong> $350</strong>
                <span
                  className="badge bg-danger p-3"
                  style={{ cursor: 'pointer' }}
                >
                  COMPRAR
                </span>
              </p>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src={ropaV4} alt="remera-version4" />
            <div className="card-body">
              <p className="card-text d-flex flex-column text-center">
                <strong> $350</strong>
                <span
                  className="badge bg-danger p-3"
                  style={{ cursor: 'pointer' }}
                >
                  COMPRAR
                </span>
              </p>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src={ropaV5} alt="remera-version5" />
            <div className="card-body">
              <p className="card-text d-flex flex-column text-center">
                <strong> $350</strong>
                <span
                  className="badge bg-danger p-3"
                  style={{ cursor: 'pointer' }}
                >
                  COMPRAR
                </span>
              </p>
            </div>
          </div>
        </div>
        <a href="/inicio/tienda-avatar" className="btn btn-danger mt-3">
          COMPRAR TODO
        </a>
      </div>

      <Link
        to="/inicio/tienda"
        className="btn btn-success mt-3 mb-3"
        style={{ textDecoration: 'none', color: 'white' }}
      >
        VOLVER
      </Link>
    </div>
  );
}
