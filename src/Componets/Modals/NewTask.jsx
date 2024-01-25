import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Context } from "../../Context";
import styled from "styled-components";

function NewTask() {

  const {
    setOpenModal,
    addTask,
    spaceWork,
  } = React.useContext(Context);

  const [description, setDescription] = React.useState('');
  const [space, setSpace] = React.useState(0);
  const [date, setDate] = React.useState('');

  const onSubmit = () => {
    const formattedDate = new Intl.DateTimeFormat('es', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'UTC',
    }).format(date);
    const myDate = (formattedDate === '01/01/1970, 00:00:00'? ' ': formattedDate)
    addTask(description, space, myDate);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChangeDescripcion = (event) => {
    setDescription(event.target.value);
  };

  const onChangeSpace = (event) => {
    const idCorrespondiente = spaceWork.findIndex((space) => space.name === event.target.value);
    setSpace(idCorrespondiente);
  };

  return (
    <Container>
      <Form>
        <TextBox>
          <Label>Ingresa una nueva tarea</Label>
          <textarea placeholder="Hacer ..." className="newTaskStyle" value={description} onChange={onChangeDescripcion} />
        </TextBox>
        <Details>
          <StatusBox>
            <Label>Espacio de Trabajo</Label>
            <select className="status generalText" selected={space} onChange={onChangeSpace}>
              {spaceWork.map((item) => (
                <option key={item.id} >{item.name}</option>
              ))}
            </select>
          </StatusBox>

          <StatusBox>
            <Label>Fecha Limite:</Label>
            <DatePicker
              className="calendar generalText"
              selected={date}
              onChange={(date) => setDate(date)}
              showTimeSelect dateFormat="Pp" />
          </StatusBox>
        </Details>
      </Form>
      <BottonBox>
        <BadBotton className="mediumText" onClick={onCancel}>Cancelar</BadBotton>
        <GoodBotton className="mediumText" onClick={onSubmit}>Crear</GoodBotton>
      </BottonBox>
    </Container>
  )
}

export { NewTask };

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
        font-family: 'Montserrat';
        border: 1px solid var(--primary-main);
        border-radius: 8px;
    }
    .newTaskStyle::placeholder {
        color: var(--gray-light);
    }
    .newTaskStyle:focus {
        outline-color: var(--secondary-main);
    }
`;

export const Details = styled.div`
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      align-items: center;

      .calendar{
        display: flex;
        padding: 10px;
        border-radius: 8px;
        font-family: 'Montserrat';
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
      
      .status{
          display: flex;
          padding: 10px;
          width: 183px;
          border-radius: 8px;
          font-family: 'Montserrat';
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