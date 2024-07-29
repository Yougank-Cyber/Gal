import React from 'react';
import '../styles/Modal.css';

const Modal = ({ src, onClose, onNext, onPrevious }) => {
  const handleClick = (e) => {
    if (e.target.className === 'modal') {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleClick}>
      <span className="close" onClick={onClose}>&times;</span>
      <img className="modal-content" src={src} alt="Selected" />
      <button className="prev" onClick={(e) => { e.stopPropagation(); onPrevious(); }}>&#10094;</button>
      <button className="next" onClick={(e) => { e.stopPropagation(); onNext(); }}>&#10095;</button>
    </div>
  );
};

export default Modal;
