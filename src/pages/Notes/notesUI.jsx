import React from "react";
import { Context } from "../../Context";
import { Separator } from "../../componets/Modals/Separator";
import { Modal } from "../../componets/Modals/Modal";
import { CreateTask } from "../../componets/CreateTask";
import { MyIcon } from "../../styles/styles";
import styled from "styled-components";
import "./notes.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky, faTrash } from "@fortawesome/free-solid-svg-icons";


function NotesUI() {

    const {
        getNotes,
        setNotes,
        getNotesLoading,
        getNotesError,
        selectNotes,
        totalNoteSpace,
        addNote,
        deleteNote,
        getOpenModal,
        setOpenModal,
    } = React.useContext(Context);

    const onSubmit = () => {
    };

    const onDelete = (id) => {
        deleteNote(id);
    };

    return (
        <Container>
            <div className="generalNotes">
                {getNotes().map((note) => (
                    <div className="note" key={note.id}>
                        <div style={{ display: "flex", flexDirection: "row", gap: "10px", }}>
                            <FontAwesomeIcon icon={faNoteSticky}/>
                            <div className="secondarySubtitle">{note.title}</div>
                        </div>
                        <Separator />
                        <div className="miniText">{note.text}</div>
                        <div className="icons">
                            {/* <MyIcon src="./Icons/Pen.svg" onClick={() => { onSubmit() }} alt="PenIcon" /> */}
                            <MyIcon>
                                <FontAwesomeIcon icon={faTrash} color="#f26868" onClick={() => { onDelete(note.id) }} alt="TrashIcon" />
                            </MyIcon>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <CreateTask setOpenModal={setOpenModal} title="Nueva" />
                {getOpenModal() ? (
                    <Modal title='Nueva Nota'>
                        <></>
                    </Modal>
                ) : (<></>)}
            </div>
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