import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Modal.css';

export default function Modal({ active, setActive, resultGame }) {
  const navigate = useNavigate();
  return (
    <div className={active ? 'cox-modal acvite' : 'cox-modal'}>
      <div
        className="cox-modal-content"
      >
        <div className="resul-text">
          <h2>
            {resultGame}
          </h2>
        </div>
        <div className="cox-modal-button">
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={() => {
              setActive(false);
              window.location.reload('/blackjack');
            }}
          >
            Play more
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => navigate('/')}
          >
            Stop playing
          </button>
        </div>
      </div>
    </div>
  );
}
