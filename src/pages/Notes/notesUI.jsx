import React from "react";
import { Context } from "../../Context";
import { Separator } from "../../componets/Modals/Separator";
import { Modal } from "../../componets/Modals/Modal";
import { CreateTask } from "../../componets/CreateTask";
import { MyIcon } from "../../styles/styles";
import styled from "styled-components";
import "./notes.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky, faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { NewNote } from "../../componets/Modals/NewNote";
import { NoteDetails } from "./NoteDetails";


function NotesUI() {

    const {
        getNotes,
        setNotes,
        getNotesLoading,
        getNotesError,
        selectNotes,
        totalNoteSpace,
        deleteNote,
        getOpenModal,
        setOpenModal,
    } = React.useContext(Context);


    const [openDetails, setOpenDetails] = React.useState(false);
    const getOpenDetails = () => (openDetails);

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
                            <FontAwesomeIcon icon={faNoteSticky} />
                            <div className="secondarySubtitle">{note.title}</div>
                        </div>
                        <Separator />
                        <div className="description miniText">{note.text}</div>
                        <div className="NoteIcons">
                            <div className="seeMore generalText">Ver mas...</div>
                            <MyIcon key={note.id} onClick={() => {setOpenDetails(state => !state)}}>
                                {getOpenDetails() ? (
                                        <NoteDetails note={note}/>
                                ) : (<></>)}
                                <FontAwesomeIcon icon={faPen} color="#68D6F1" alt="PenIcon" />
                            </MyIcon>
                            <MyIcon onClick={() => { onDelete(note.id) }} >
                                <FontAwesomeIcon icon={faTrash} color="#f26868" alt="TrashIcon" />
                            </MyIcon>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <CreateTask setOpenModal={setOpenModal} title="Nueva" />
                {getOpenModal() ? (
                    <Modal title='Nueva Nota'>
                        <NewNote />
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