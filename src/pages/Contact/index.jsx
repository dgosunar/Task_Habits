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
`;

export const ImagenBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40%;
`;