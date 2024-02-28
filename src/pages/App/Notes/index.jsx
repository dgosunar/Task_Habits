import React from "react";
import { Layout } from "../../../layout/Dashboard";
import NotesUI from "./notesUI";
import { ContextProvider } from "../../../Context";

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
