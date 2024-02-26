import styled from "styled-components";
import { GrClose } from "react-icons/gr";

export function XButton({ onClick }) {
  return (
    <CloseButton onClick={onClick}>
      <GrClose className="xBotton" />
    </CloseButton>
  );
}

export const CloseButton = styled.div`
  display: flex;
  width: 30px;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;

  .xBotton {
    display: flex;
    height: 30px;
    color: var(--accent-red);
  }
`;

export const Botton = styled.div`
  display: flex;
  color: var(--black);
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100px;
  height: 20px;
  border-radius: 8px;
  cursor: pointer;
`;

export const PBotton = styled(Botton)`
  background-color: var(--secondary-main);

  &:hover {
    background-color: var(--secondary-light);
  }
  &:active {
    background-color: var(--secondary-main);
  }
`;

export const SBotton = styled(Botton)`
  background-color: var(--gray);

  &:hover {
    background-color: var(--gray-light);
  }
  &:active {
    background-color: var(--gray);
  }
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
