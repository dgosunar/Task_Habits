import React from 'react';
import { Layout } from '../../Componets/Layout'
import styled from 'styled-components';

function NotFound() {

  return (
    <Layout>
      <Container>
        <img src="./Images/404 error with person looking for-bro.png" />
        <a href="https://storyset.com/online" target='_blank'>Online illustrations by Storyset</a>
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