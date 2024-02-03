import React from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const useNoteFunctions = () => {

  // localStorage.removeItem('Note_v1');
  const defaultNotes = [
    { id: 1, title: 'Nota1', text: 'Anotaciones 1...', workspace: 0 },
    { id: 2, title: 'Nota2', text: 'Anotaciones 2...', workspace: 0 },
    { id: 3, title: 'Nota3', text: 'Anotaciones 3...', workspace: 0 },
  ];
  // localStorage.setItem('Note_v1', JSON.stringify(defaultNotes));

  const { item: notes, saveItem: setNotes, loading, error } = useLocalStorage('Note_v1', defaultNotes);
  const getNotes = () => (notes);
  const getNotesLoading = () => (loading);
  const getNotesError = () => (error);



  //Filtrador de Espacios de Trabajo
  const selectNotes = (spaceId) => (
    getNotes().filter(
      note => note.workspace === spaceId,
    )
  );

  // Cantidad de tareas por Espacio de Trabajo
  const totalNoteSpace = (spaceId) => (
    selectNotes(spaceId).length
  );

  //Metodos para Espacios de Trabajo
  const addNote = (title, text, workspace) => {
    const id = notes.length === 0 ? 1 : notes[notes.length - 1].id + 1;
    const newNote = [...notes, {
      id: id,
      title,
      text,
      workspace,
    }];
    setNotes(newNote);
  }

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  }

  return {
    getNotes,
    setNotes,
    getNotesLoading,
    getNotesError,
    selectNotes,
    totalNoteSpace,
    addNote,
    deleteNote
  };
};

export default useNoteFunctions;