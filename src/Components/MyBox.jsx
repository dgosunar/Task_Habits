import React from "react";
import styled from "styled-components";

export default function MyBox({ children, label }) {
  return (
    <Container>
      <LabelStyle className="miniText">{label}</LabelStyle>
      {children}
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-width: calc(100% - 12px);
  height: fit-content;
  border: 1px solid;
  border-radius: 8px;
  padding: 6px 5px;
`;

export const LabelStyle = styled.div`
  position: relative;
  left: 10px;
  width: fit-content;
  padding: 6px 4px;
  border-radius: 8px;
  margin-top: -17px;
  background-color: var(--primary-main);
`;
