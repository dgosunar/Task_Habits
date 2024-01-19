import styled from "styled-components";
import { GoPlus } from "react-icons/go";

function CreateTask({setOpenModal}) {
    return (
        <BoxBotton>
            <CreateTodoButton
                onClick={()=>{
                    setOpenModal(state => !state);
                }}
            ><GoPlus />
            </CreateTodoButton>
        </BoxBotton>
    );
}

export { CreateTask };

export const BoxBotton = styled.div`
    display: flex;
    padding: 10px 79px;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
`;

export const CreateTodoButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 58px;
    width: 58px;
    background: var(--secondary-main);

    font-size: 40px;
    cursor: pointer;
    border-radius: 100px;
    transform: rotate(-90deg);
    transition: .3s ease;

    &:hover{
        transform: rotate(270deg)
    }
`;