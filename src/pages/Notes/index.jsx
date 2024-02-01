import React from 'react';
import { Layout } from '../../componets/Layout/Dashboard';
import { ContextProvider } from "../../Context";
import NotesUI from "./notesUI";

function Notes() {

  return (
    <Layout title={'Notas'}>
      <ContextProvider>
        <NotesUI/>
      </ContextProvider>
    </Layout>
  );
}

export default Notes;