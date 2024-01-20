import React from 'react';
import { Layout } from '../../Componets/Layout'
import styled from 'styled-components';

function Home() {

  return (
    <Layout>
      <Container>
        <LogoBox>
          <img src={`/Logos/CompletLogo_light.png`} alt="Imagotipo" />
          <div className='secondarySubtitle'>Gestiona tus tareas, conquista tus metas</div>
          <div className='secondarySubtitle'>Pequeños hábitos, grandes victorias</div>
        </LogoBox>
        <ImagenBox>
          <MyImagen>
            <img src={`/Images/Reading list-bro.png`} alt="Imagotipo" />
          </MyImagen>
          <AttributeImagen>
            <a href="https://storyset.com/people" target='_blank'>People illustrations by Storyset</a>
          </AttributeImagen>
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
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 60%;
  width: 40%;
`;

export const ImagenBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40%;
`;

export const MyImagen = styled.div`
display: flex;
`;
export const AttributeImagen = styled.div`
display: flex;
`;