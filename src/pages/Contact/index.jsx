import React from 'react';
import { Layout } from '../../componets/Layout'
import styled from 'styled-components';
import ContactCard from '../../componets/ContactCard';
import { MyImage, MyLink } from '../../styles/styles';

function Contact() {

  return (
    <Layout>
      <Container>
        <ContactCard title='Contacto'/>
        <ImagenBox>
            <MyImage src='./Images/Developer activity-bro.png' alt='imagenContacto'/>
            <MyLink href='https://storyset.com/work' target='_blank' rel='noopener noreferrer'>Work illustrations by Storyset</MyLink>
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

  @media screen and (max-width: 1024px) {
    justify-content: space-evenly;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 600px) {
  }
`;

export const ImagenBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;

  @media screen and (max-width: 992px) {
    width: 100%;
    height: 40%;
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 600px) {
  }
`;