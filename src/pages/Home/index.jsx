import React from "react";
import styled from "styled-components";
import { Layout } from "../../layout/Home";

function Home() {
  return (
    <Layout>
      <Container>
        <LogoBox>
          <img src="./Logos/CompletLogo_light.png" alt="imagotipo" />
          <div className="secondarySubtitle">
            Gestiona tus tareas, conquista tus metas
          </div>
          <div className="secondarySubtitle">
            Pequeños hábitos, grandes victorias
          </div>
        </LogoBox>
        <ImagenBox>
          <img src="./Images/Reading list-bro.png" alt="imagenHome" />
          <a
            href="https://storyset.com/people"
            target="_blank"
            rel="noopener noreferrer"
          >
            People illustrations by Storyset
          </a>
        </ImagenBox>
      </Container>
    </Layout>
  );
}

export default Home;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 40%;

  @media screen and (max-width: 768px) {
    height: 30%;
    width: 100%;
  }
`;

export const ImagenBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40%;

  @media screen and (max-width: 768px) {
    height: 50%;
    width: 100%;
  }
`;
