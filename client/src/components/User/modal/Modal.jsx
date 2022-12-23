import React from 'react';
import './Modal.css';

export default function Modal({
  setModal, modal, error, errors, setError,
}) {
  return (
    <div className={modal ? 'cox-modal acvite' : 'cox-modal'}>
      <div
        className="cox-modal-content-user"
      >
        <div className="resul-text">
          <i>
            {(error && error) || (errors && errors)}
          </i>
        </div>
        <div className="cox-modal-button">
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={() => {
              setModal(false);
              setError(false);
            }}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
