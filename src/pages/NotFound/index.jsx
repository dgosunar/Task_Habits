import React from "react";
import { Layout } from "../../layout/Home";
import styled from "styled-components";

function NotFound() {
  return (
    <Layout title={"Pagina no encontrada"}>
      <Container>
        <img
          src="./Images/404 error with person looking for-bro.png"
          alt="image404"
        />
        <a
          href="https://storyset.com/online"
          target="_blank"
          rel="noopener noreferrer"
        >
          Online illustrations by Storyset
        </a>
      </Container>
    </Layout>
  );
}

export default NotFound;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 80%;
  width: 100%;
`;
