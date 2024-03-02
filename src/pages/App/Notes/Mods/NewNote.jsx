import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Context } from "../../../../Context";
import styled from "styled-components";
import { PBotton, SBotton } from "../../../../Components/Bottons";
import { Card } from "../../../../Components/Modals/Card";

function NewNote() {
  const { setOpenModal, addNote, workspace } = React.useContext(Context);

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [mySpace, setMySpace] = React.useState(0);

  const onSubmit = () => {
    addNote(title, description, mySpace);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const onChangeSpace = (event) => {
    const idCorrespondiente = workspace.findIndex(
      (s) => s.name === event.target.value
    );
    setMySpace(idCorrespondiente);
  };

  return (
    <Card title="Crear Nueva Nota">
      <Container>
        <Form>
          <TextBox>
            <Label>Titulo de la Nota</Label>
            <textarea
              placeholder="..."
              className="titleStyle"
              value={title}
              onChange={onChangeTitle}
            />
          </TextBox>
          <TextBox>
            <Label>Descripción</Label>
            <textarea
              placeholder="..."
              className="descriptionStyle"
              value={description}
              onChange={onChangeDescription}
            />
          </TextBox>
          <Details>
            <StatusBox>
              <Label>Espacio de Trabajo</Label>
              <select
                className="status generalText"
                selected={mySpace}
                onChange={onChangeSpace}
              >
                {workspace.map((item) => (
                  <option key={item.id}>{item.name}</option>
                ))}
              </select>
            </StatusBox>
          </Details>
        </Form>
        <BottonBox>
          <SBotton onClick={onCancel}>Cancelar</SBotton>
          <PBotton onClick={onSubmit}>Crear</PBotton>
        </BottonBox>
      </Container>
    </Card>
  );
}

export { NewNote };

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: calc(100% - 40px);
  gap: 10px;
  padding: 10px 20px;

  .titleStyle {
    background: var(--white);
    margin: 0;
    padding: 10px;
    width: calc(100% - 20px);
    height: 18px;
    color: var(--black);
    font-family: "Montserrat";
    border: 1px solid var(--primary-main);
    border-radius: 8px;
  }
  .titleStyle::placeholder {
    color: var(--gray-light);
  }
  .titleStyle:focus {
    outline-color: var(--secondary-main);
  }

  .descriptionStyle {
    background: var(--white);
    margin: 0;
    padding: 10px;
    width: calc(100% - 20px);
    height: 70px;
    color: var(--black);
    font-family: "Montserrat";
    border: 1px solid var(--primary-main);
    border-radius: 8px;
  }
  .descriptionStyle::placeholder {
    color: var(--gray-light);
  }
  .descriptionStyle:focus {
    outline-color: var(--secondary-main);
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
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  padding: 10px 20px;
`;

export const GoodBotton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-main);
  padding: 10px;
  border-radius: 8px;
  min-width: 100px;
  color: var(--primary-main);
  cursor: pointer;
`;

export const BadBotton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--gray-light);
  padding: 10px;
  border-radius: 8px;
  min-width: 100px;
  color: var(--primary-main);
  cursor: pointer;
`;
