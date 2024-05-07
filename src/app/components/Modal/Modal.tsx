"use client";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import classes from "./modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(isOpen);

  const handleClose = () => {
    setModalOpen(false);
    onClose();
  };

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  return modalOpen
    ? ReactDOM.createPortal(
        <div className={classes.modal}>
          <div className={classes.modalOverlay} onClick={handleClose}></div>
          <div className={classes.modalBody}>
            <div className={classes.modalHeader}>
              <h2 className={classes.modalTitle}>{title}</h2>
              <button className={classes.modalClose} onClick={handleClose}>
                <b>X</b>
              </button>
            </div>
            <div className={classes.modalContent}>{children}</div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
