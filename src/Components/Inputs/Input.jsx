import React from "react";
import styled from "styled-components";

export default function Input({ children, label }) {
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
  width: 100%;
  height: 50px;
`;

export const LabelStyle = styled.div`
  position: relative;
  left: 10px;
  width: fit-content;
  padding: 2px 4px;
  background-color: #fff;
  border-radius: 5px;
`;
