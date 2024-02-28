import React from "react";
import { Layout } from "../../../layout/Home";
import styled from "styled-components";

function Contact() {
  return (
    <Layout>
      <Container>Servicios</Container>
    </Layout>
  );
}

export default Contact;

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
`;
