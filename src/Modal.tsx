<<<<<<< HEAD
import React, { useEffect, useRef } from "react";
=======
import React, { useEffect, useRef, ReactChild } from "react";
>>>>>>> b9b0ab77add25ebb0080b89223a92503735c3732
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

<<<<<<< HEAD
const Modal: React.FC = ({ children }) => {
  const elRef = useRef(document.createElement("div"));

  useEffect(() => {
    if (!modalRoot) return;
=======
const Modal = ({ children }: { children: ReactChild[] }) => {
  const elRef = useRef(document.createElement("div"));

  useEffect(() => {
    if (!modalRoot) {
      return;
    }
>>>>>>> b9b0ab77add25ebb0080b89223a92503735c3732
    modalRoot.appendChild(elRef.current);
    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
