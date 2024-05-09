import React from "react";
import { Context } from "../../../Context";
import { Separator } from "../../../Components/Modals/Separator";
import { Modal } from "../../../Components/Modals/Modal";
import { MyIcon } from "../../../styles/styles";
import { NewNote } from "./Mods/NewNote";
import styled from "styled-components";
import "./notes.css";
import { CBotton } from "../../../Components/Bottons/CBotton";
import { NoteDetails } from "./Mods/NoteDetails";
import { NoteEdit } from "./Mods/NoteEdit";
import { SelectorSpace } from "../../../Components/SelectorSpace";
import { Note } from "./Components/Note";

function NotesUI() {
  const {
    notesLoading,
    notesError,
    deleteNote,
    setNotesDetails,
    showDetails,
    setShowDetails,
    showEdit,
    setShowEdit,
    openModal,
    setOpenModal,
    selectNotes,
    space,
    recentNotes,
    setRecentNotes,
  } = React.useContext(Context);

  const onDelete = (id) => {
    deleteNote(id);
  };

  return (
    <Container>
      <SelectorSpace />
      <Separator />

      <div className="generalNotes">
        {notesLoading ? (
          <></>
        ) : notesError ? (
          <></>
        ) : !notesLoading && selectNotes(space).length === 0 ? (
          <></>
        ) : (
          selectNotes(space).map((n) => <Note n={n} onDelete={onDelete} />)
        )}
      </div>
      <CBotton setOpenModal={setOpenModal} title="Nueva" />

      {/* Modal para Editar Notas */}
      {showEdit ? (
        <Modal>
          <NoteEdit />
        </Modal>
      ) : (
        <></>
      )}
      {/* Modal para Ver Notas */}
      {showDetails ? (
        <Modal>
          <NoteDetails />
        </Modal>
      ) : (
        <></>
      )}
      {/* Modal para Crear Notas */}
      {openModal ? (
        <Modal title="Nueva Nota">
          <NewNote />
        </Modal>
      ) : (
        <></>
      )}
    </Container>
  );
}
export default NotesUI;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 10px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 600px) {
  }
`;
