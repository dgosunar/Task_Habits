import React from "react";
import styled from "styled-components";
import { Separator } from "./Separator";

function Card({ children, title }) {
  return (
    <Container>
      <div className="primarySubtitle">{title}</div>
      <Separator />
      {children}
    </Container>
  );
}

export { Card };

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 500px;
  height: min-content;
  background-color: var(--white);
  color: var(--black);
  padding: 10px;
  gap: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px var(--black);

  @media screen and (max-width: 600px) {
    width: calc(100% - 50px);
  }
`;
