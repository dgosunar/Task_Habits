import React from 'react';
import styled from 'styled-components';
import { Layout } from '../../componets/Layout'
import { MyImage, MyLink } from '../../styles/styles';

function Home() {

  return (
    <Layout>
      <Container>
        <LogoBox>
          <MyImage src='./Logos/CompletLogo_light.png' alt='imagotipo' />
          <div className='secondarySubtitle'>Gestiona tus tareas, conquista tus metas</div>
          <div className='secondarySubtitle'>Pequeños hábitos, grandes victorias</div>
        </LogoBox>
        <ImagenBox>
            <MyImage src='./Images/Reading list-bro.png' alt='imagenHome' />
            <MyLink href='https://storyset.com/people' target='_blank' rel='noopener noreferrer'>People illustrations by Storyset</MyLink>
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