import React from "react";
import { Context } from "../../../Context";
import { Separator } from "../../../Components/Modals/Separator";
import { Modal } from "../../../Components/Modals/Modal";
import { CreateTask } from "../../../Components/CreateTask";
import { MyIcon } from "../../../styles/styles";
import { NewNote } from "../../../Components/Modals/NewNote";
import { NoteEdit } from "./Mod/NoteEdit";
import styled from "styled-components";
import "./notes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNoteSticky,
  faTrash,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { NoteDetails } from "./Mod/NoteDetails";

function NotesUI() {
  const {
    notes,
    setNotes,
    notesLoading,
    notesError,
    selectNotes,
    totalNoteSpace,
    addNote,
    deleteNote,
    notesDetails,
    setNotesDetails,
    showDetails,
    setShowDetails,
    showEdit,
    setShowEdit,
    upDateNote,
    openModal,
    setOpenModal,
  } = React.useContext(Context);

  const onSubmit = () => {};

  const onDelete = (id) => {
    deleteNote(id);
  };

  return (
    <Container>
      <div className="generalNotes">
        {notes.map((note) => (
          <div className="note" key={note.id}>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <FontAwesomeIcon icon={faNoteSticky} />
              <div
                className="secondarySubtitle"
                onClick={() => {
                  setNotesDetails(note);
                  setShowDetails((stateDetails) => !stateDetails);
                }}
              >
                {note.title}
              </div>
            </div>
            <Separator />
            <div
              className="description miniText"
              onClick={() => {
                setNotesDetails(note);
                setShowDetails((stateDetails) => !stateDetails);
              }}
            >
              <pre>{note.text}</pre>
            </div>
            <div className="NoteIcons">
              <MyIcon
                key={note.id}
                onClick={() => {
                  setNotesDetails(note);
                  setShowEdit((stateEdit) => !stateEdit);
                }}
              >
                <FontAwesomeIcon icon={faPen} color="#68D6F1" alt="PenIcon" />
              </MyIcon>
              <MyIcon
                onClick={() => {
                  onDelete(note.id);
                }}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  color="#f26868"
                  alt="TrashIcon"
                />
              </MyIcon>
            </div>
          </div>
        ))}
      </div>
      <CreateTask setOpenModal={setOpenModal} title="Nueva" />

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
  width: 60%;
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
