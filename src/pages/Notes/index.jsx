import React from "react";
import { Layout } from "../../layout/Dashboard";
import { ContextProvider } from "../../Context";
import NotesUI from "./notesUI";

function Notes() {
  return (
    <Layout title={"Notas"}>
      <ContextProvider>
        <NotesUI />
      </ContextProvider>
    </Layout>
  );
}

export default Notes;
