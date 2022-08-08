import React, { useState, useEffect } from "react";
import CreatedPost from "../CreatedPost";
import { ModalStyled } from "./style";

const Modal = ({ id = "modal", onClose=() => {}, children }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose()
  }

  return (
    <ModalStyled>
      <div id={id} className="modal" onClick={handleOutsideClick}>
        <div className="modal-container">
          <button className="close" onClick={onClose} />
          <div className="content">{children}</div>
        </div>
      </div>
    </ModalStyled>
  );
};

export default Modal;
