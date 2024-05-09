import React from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const useNoteFunctions = () => {
  // ==============================================================
  // Uso del LocalStorage =========================================
  // const defaultNotes = [
  //   { id: 1, title: "Nota1", text: "Anotaciones 1...", workspace: 0 },
  //   { id: 2, title: "Nota2", text: "Anotaciones 2...", workspace: 0 },
  //   { id: 3, title: "Nota3", text: "Anotaciones 3...", workspace: 0 },
  // ];
  const {
    item: allNotes,
    saveItem: setAllNotes,
    notesLoading,
    notesError,
  } = useLocalStorage("Note_v1", []);

  const {
    item: recentNotes,
    saveItem: setRecentNotes,
    recentNotesLoading,
    recentNotesError,
  } = useLocalStorage("Recent_Note_v1", {});

  console.log(recentNotes);

  const [notesDetails, setNotesDetails] = React.useState([]);
  const [showDetails, setShowDetails] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);

  // ==============================================================
  //Filtrador de notas ============================================

  const selectNotes = (spaceId) =>
    allNotes.filter((n) => n.workspace === spaceId);

  // ==============================================================
  // Cantidad de tareas por Espacio de Trabajo ====================
  const totalNoteSpace = (spaceId) => selectNotes(spaceId).length;

  // ==============================================================
  //Metodos para Notas ============================================
  const addNote = (title, text, workspace) => {
    const id = allNotes.length === 0 ? 1 : allNotes[allNotes.length - 1].id + 1;
    const newNote = [
      ...allNotes,
      {
        id: id,
        title,
        text,
        workspace,
      },
    ];
    setAllNotes(newNote);
  };

  const upDateNote = (id, title, text, workspace) => {
    const updatedNotes = allNotes.map((n) =>
      n.id === id ? { ...n, title: title, text: text, workspace: workspace } : n
    );
    setAllNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = allNotes.filter((note) => note.id !== id);
    setAllNotes(updatedNotes);
  };

  return {
    allNotes,
    setAllNotes,
    notesLoading,
    notesError,
    recentNotes,
    setRecentNotes,
    recentNotesLoading,
    recentNotesError,
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
  };
};

export default useNoteFunctions;
