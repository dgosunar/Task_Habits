import React from 'react';
import { Layout } from '../../componets/Layout/Home';
import styled from 'styled-components';
import { MyImage, MyLink } from '../../styles/styles';


function NotFound() {

  return (
    <Layout title={"Pagina no encontrada"}>
      <Container>
        <MyImage src='./Images/404 error with person looking for-bro.png' alt='image404' />
        <MyLink href='https://storyset.com/online' target='_blank' rel='noopener noreferrer'>Online illustrations by Storyset</MyLink>
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