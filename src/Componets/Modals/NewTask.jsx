import styled from "styled-components";
import { Context } from "../../Context";
import React from "react";


function NewTask() {

  const {
    setOpenModal,
    addTask,
  } = React.useContext(Context);

  const [newTaskValue, setNewTaskValue] = React.useState('');

  const onSubmit=()=>{
    addTask(newTaskValue);
    setOpenModal(false);
  };

  const onCancel=()=>{
    setOpenModal(false);
  };

  const onChange=(event)=>{
    setNewTaskValue(event.target.value);
  };

    return (
        <Form>
            <label className="generalText">
                Ingresa una nueva tarea
            </label>
            <textarea placeholder="Tarea Nueva" className="newTaskStyle" value={newTaskValue} onChange={onChange}/>
            <BottonContainer>
                <BadBotton className="mediumText" onClick={onCancel}>Cancelar</BadBotton>
                <GoodBotton className="mediumText" onClick={onSubmit}>Crear</GoodBotton>
            </BottonContainer>
        </Form>
    )
}

export { NewTask };

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: calc(100% - 40px);
    gap: 10px;
    padding: 10px 20px;
`;

export const BottonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
    width: calc(100% - 40px);
`;

export const GoodBotton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-main);
    padding: 10px;
    border-radius: 8px;
    width: 100px;
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
    width: 100px;
    color: var(--primary-main);
    cursor: pointer;
`;