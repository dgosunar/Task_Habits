import React from "react";
import ReactDOM from 'react-dom';
import styled from "styled-components";

function Modal({ children }) {
    return ReactDOM.createPortal(
        <ModalStyle>
            <Card>
            <span className="primarySubtitlePM">Titulo de la Card</span>
            <Separator/>
            {children}
            </Card>
        </ModalStyle>,
        document.getElementById("modal")
    );
}

export { Modal };

export const ModalStyle = styled.div`
    display: flex;
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 23, 36, 0.75);
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 500px;
    background-color: var(--white);
    color: var(--black);
    padding: 10px;
    gap: 10px;
    border-radius: 15px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Separator = styled.div`
    display: flex;
    width: calc(100% - 20px);
    border-bottom-style: solid;
`;

