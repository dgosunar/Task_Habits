import styled from "styled-components";

function CreateTask({ setOpenModal }) {
    return (
        <CreateTodoButton
            onClick={() => {
                setOpenModal(state => !state);
            }}
        >Crear Nueva Tarea
        </CreateTodoButton>
    );
}

export { CreateTask };


export const CreateTodoButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-main);
    padding: 10px;
    border-radius: 8px;
    width: 200px;
    color: var(--primary-main);
    cursor: pointer;
`;