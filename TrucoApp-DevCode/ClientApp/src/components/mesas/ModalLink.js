import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function ModalLink({ idMesa }) {
  const [show, setShow] = useState(false);
  const [copiadoShow, setCopiadoShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const link = `https://localhost:44342/juego/${idMesa}`;

  const copiarLink = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(link);
    setCopiadoShow(true);
    setTimeout(() => {
      setCopiadoShow(false);
    }, 3500);
  };

  return (
    <>
      <Button className="dropdown-item" onClick={handleShow}>
        Generar Link
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>Copia este link y desafía a un amigo !</Modal.Title>
        </Modal.Header>
        <div>
          <Modal.Body className="d-flex justify-content-start align-items-center">
            {link}

            <div>
              <i
                onClick={copiarLink}
                className="bi bi-link-45deg btn btn-light h-100 ms-2"
              ></i>
              {copiadoShow && (
                <span
                  className="align-self-end ms-2 alert alert-success p-2"
                  style={{ fontSize: "12px" }}
                >
                  ¡Copiado!
                </span>
              )}
            </div>

            {/* <i class="bi bi-clipboard"></i> */}
          </Modal.Body>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
