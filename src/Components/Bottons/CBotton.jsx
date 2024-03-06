import styled from "styled-components";

function CBotton({ setOpenModal }) {
  return (
    <CreateTodoButton>
      <PlusBotton
        onClick={() => {
          setOpenModal((state) => !state);
        }}
        className="secondaryTitle"
      >
        +
      </PlusBotton>
    </CreateTodoButton>
  );
}

export { CBotton };

export const CreateTodoButton = styled.div`
  position: absolute;
  bottom: 60px;
  right: 10px;
  z-index: 30;
  cursor: pointer;
`;

export const PlusBotton = styled.div`
  display: flex;
  color: var(--black);
  background-color: var(--secondary-main);
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
