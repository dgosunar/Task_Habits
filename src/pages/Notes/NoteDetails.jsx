import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Context } from "../../Context";
import styled from "styled-components";
import { PBotton, SBotton } from "../../componets/Bottons";

function NoteDetails({note}) {

  const {
  } = React.useContext(Context);

  return (
    <Container>
      <div className="secondarySubtitle">{note.title}</div>
      <div className="description miniText">{note.text}</div>
    </Container>
  )
}

export { NoteDetails };

export const Container = styled.div`
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