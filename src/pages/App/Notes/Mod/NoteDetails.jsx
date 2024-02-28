import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Context } from "../../../../Context";
import styled from "styled-components";
import { PBotton, XButton } from "../../../../componets/Bottons";
import { Separator } from "../../../../componets/Modals/Separator";

function NoteDetails() {
  const { setShowDetails, setShowEdit, notesDetails } =
    React.useContext(Context);

  const onSubmit = () => {
    setShowDetails(false);
    setShowEdit(true);
  };

  const onCancel = () => {
    setShowDetails(false);
  };

  return (
    <CardDetails>
      <Container>
        <Form>
          <div className="titleStyle primarySubtitle">{notesDetails.title}</div>
          <Separator />
          <div className="descriptionStyle mediumText">
            <pre>{notesDetails.text}</pre>
          </div>
        </Form>
        <BottonBox>
          <PBotton onClick={onSubmit}>Editar</PBotton>
        </BottonBox>

        <XButton onClick={onCancel} />
      </Container>
    </CardDetails>
  );
}

export { NoteDetails };

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 500px;
  height: min-content;
  background-color: var(--bg-cards);
  color: var(--white);
  padding: 10px;
  gap: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px var(--black);

  @media screen and (max-width: 600px) {
    width: calc(100% - 50px);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  backdrop-filter: blur(7px);
  height: 75vh;
  width: 100%;
  gap: 10px;

  .contenido {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    overflow-y: auto;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: calc(100% - 50px);
  gap: 10px;

  .titleStyle {
    display: flex;
    margin: 0;
    padding: 0 10px;
    width: calc(100% - 50px);
    text-align: center;
  }

  .descriptionStyle {
    margin: 0 10px;
    width: calc(100% - 20px);
    height: calc(100% - 53px);
    overflow-y: auto;
    scrollbar-width: none;
    border-radius: 8px;
  }
`;

export const Details = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;

  .calendar {
    display: flex;
    padding: 10px;
    border-radius: 8px;
    font-family: "Montserrat";
    border: 1px solid var(--primary-main);
  }
  .calendar::placeholder {
    color: var(--gray-light);
  }
  .calendar:focus {
    outline-color: var(--secondary-main);
  }
`;

export const StatusBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 183px;

  .status {
    display: flex;
    padding: 10px;
    width: 183px;
    border-radius: 8px;
    font-family: "Montserrat";
    border: 1px solid var(--primary-main);
    background-color: var(--white);
  }
  .status::placeholder {
    color: var(--gray-light);
  }
  .status:focus {
    outline-color: var(--secondary-main);
  }
`;
export const Label = styled.div`
  font-size: 12px;
  width: fit-content;
  padding: 0 5px;
  background-color: var(--white);
  margin: 0 0 -8px 1px;
  color: var(--primary-main);
  z-index: 1;
  border-radius: 8px 8px 0 0;
`;

export const BottonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: calc(100% - 40px);
  padding: 0 20px;
`;
