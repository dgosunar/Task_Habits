import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <ModalStyle>{children}</ModalStyle>,
    document.getElementById("modal")
  );
}

export { Modal };

export const ModalStyle = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 23, 36, 0.75);
  z-index: 30;
`;
