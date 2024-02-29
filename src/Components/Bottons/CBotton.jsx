import styled from "styled-components";
import { PBotton } from ".";

function CBotton({ setOpenModal, title }) {
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

export { CBotton };

export const CreateTodoButton = styled.div`
  position: relative;
  bottom: 0px;
`;
