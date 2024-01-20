import React from 'react';
import { Layout } from '../../Componets/Layout'
import styled from 'styled-components';
import ContactCard from '../../Componets/ContactCard';

function Contact() {

  return (
    <Layout>
      <Container>
        <ContactCard title='Contacto'/>
        <ImagenBox>
          <MyImagen>
            <img src="./Images/Developer activity-bro.png" />
          </MyImagen>
          <AttributeImagen>
            <a href="https://storyset.com/work" target='_blank' rel="noreferrer">Work illustrations by Storyset</a>
          </AttributeImagen>
        </ImagenBox>
      </Container>
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