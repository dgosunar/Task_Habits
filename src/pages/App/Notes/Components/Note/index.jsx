import React from "react";
import { Context } from "../../../../../Context";
import { Separator } from "../../../../../Components/Modals/Separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNoteSticky,
  faTrash,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { MyIcon } from "../../../../../styles/styles";
import "../../notes.css";

function Note({ n, onDelete }) {
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
  return (
    <div className="note" key={n.id}>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <FontAwesomeIcon icon={faNoteSticky} />
        <div
          className="secondarySubtitle"
          onClick={() => {
            setNotesDetails(n);
            setShowDetails((stateDetails) => !stateDetails);
            setRecentNotes(n);
          }}
        >
          {n.title}
        </div>
      </div>
      <Separator />
      <div
        className="description miniText"
        onClick={() => {
          setNotesDetails(n);
          setShowDetails((stateDetails) => !stateDetails);
        }}
      >
        <pre>{n.text}</pre>
      </div>
      <div className="NoteIcons">
        <MyIcon
          key={n.id}
          onClick={() => {
            setNotesDetails(n);
            setShowEdit((stateEdit) => !stateEdit);
          }}
        >
          <FontAwesomeIcon icon={faPen} color="#68D6F1" alt="PenIcon" />
        </MyIcon>
        <MyIcon
          onClick={() => {
            onDelete(n.id);
          }}
        >
          <FontAwesomeIcon icon={faTrash} color="#f26868" alt="TrashIcon" />
        </MyIcon>
      </div>
    </div>
  );
}

export { Note };
