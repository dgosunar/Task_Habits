import styled from "styled-components";
import { PBotton } from "./Bottons";

function CreateTask({ setOpenModal, title }) {
  return (
    <CreateTodoButton>
      <PBotton
        onClick={() => {
          setOpenModal((state) => !state);
        }}
      >
        {title}
      </PBotton>
    </CreateTodoButton>
  );
}

export { CreateTask };

export const CreateTodoButton = styled.div`
  position: relative;
  bottom: 0px;
`;
