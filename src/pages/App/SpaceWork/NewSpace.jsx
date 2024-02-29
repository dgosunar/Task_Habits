import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Context } from "../../../Context";
import styled from "styled-components";
import { BottonBox, PBotton, SBotton } from "../../../Components/Bottons";
import { Card } from "../../../Components/Modals/Card";

function NewSpace() {
  const { setOpenModal, addSpace } = React.useContext(Context);

  const [description, setDescription] = React.useState("");
  //const [color, setColor] = React.useState(0);

  const onSubmit = () => {
    //addSpace(description, color);
    addSpace(description, 0);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChangeDescripcion = (event) => {
    setDescription(event.target.value);
  };

  return (
    <Card title="Crear Nuevo Espacio">
      <Container>
        <Form>
          <TextBox>
            <Label>Nombre del Espacio de Trabajo</Label>
            <textarea
              placeholder="..."
              className="newTaskStyle"
              value={description}
              onChange={onChangeDescripcion}
            />
          </TextBox>
          {/* <TextBox>
            <Label>Selecciona un Color</Label>
            <div className="selectColor">
              {accentColors.map((c) => (
                <button
                  className="color"
                  style={{ backgroundColor: c.color }}
                  onClick={() => thisColor(c.id)}
                />
              ))}
            </div>
          </TextBox> */}
        </Form>
        <BottonBox>
          <SBotton onClick={onCancel}>Cancelar</SBotton>
          <PBotton onClick={onSubmit}>Crear</PBotton>
        </BottonBox>
      </Container>
    </Card>
  );
}

export { NewSpace };

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

  .newTaskStyle {
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
  .newTaskStyle::placeholder {
    color: var(--gray-light);
  }
  .newTaskStyle:focus {
    outline-color: var(--secondary-main);
  }
  .selectColor {
    display: flex;
    gap: 5px;
    border: 1px solid var(--primary-main);
    border-radius: 8px;
    padding: 10px;
  }
  .color {
    display: flex;
    height: 25px;
    width: 25px;
    border: 1px solid var(--white);
    border-radius: 100%;
  }
  .color:hover {
    border: 1px solid var(--primary-main);
  }
  .color:focus {
    border: 1px solid var(--primary-main);
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
