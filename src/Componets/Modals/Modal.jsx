import React from "react";
import ReactDOM from 'react-dom';
import styled from "styled-components";
import { Separator } from "./Separator";

function Modal({ children , title}) {
    return ReactDOM.createPortal(
        <ModalStyle>
            <Card>
                <span className="primarySubtitlePM">{title}</span>
                <Separator />
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
    z-index: 3;
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
    border-radius: 8px;
    box-shadow: 0px 4px 10px 0px var(--black);
`;

