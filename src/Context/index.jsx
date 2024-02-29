import React from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import useTaskFunctions from "../Hooks/useTaskFunctions";
import useSpaceFunctions from "../Hooks/useSpaceFunctions";
import useNoteFunctions from "../Hooks/useNoteFunctions";

const Context = React.createContext();

function ContextProvider({ children }) {
  // ==============================================================
  // Uso del LocalStorage =========================================
  const {
    item: space,
    saveItem: setSpace,
    spaceLoading,
    spaceError,
  } = useLocalStorage("spaceSelected_v1", 0);

  const [isLogin, setIsLogin] = React.useState();
  const [openModal, setOpenModal] = React.useState(false);

  const accentColors = [
    { id: 0, color: "#FFFFFF" },
    { id: 1, color: "#F16767" },
    { id: 2, color: "#F19B67" },
    { id: 3, color: "#F1CF67" },
    { id: 4, color: "#78F167" },
    { id: 5, color: "#67F1F1" },
    { id: 6, color: "#67BDF1" },
    { id: 7, color: "#7867F1" },
    { id: 8, color: "#AC67F1" },
    { id: 9, color: "#F167E0" },
  ];
  const [colorSelected, setColorSelected] = React.useState(0);

  const generalStatus = [
    { id: 1, name: "Pendiente" },
    { id: 2, name: "En Proceso" },
    { id: 3, name: "Completado" },
  ];

  const taskFunctions = useTaskFunctions(generalStatus, space);
  const {
    task,
    setTask,
    loading,
    error,
    selectTask,
    searchValue,
    setSearchValue,
    spaceTasks,
    setSpaceTasks,
    totalTask,
    totalPending,
    totalInProcess,
    totalCompleted,
    totalTaskSpace,
    totalPendingSpace,
    totalInProcessSpace,
    totalCompletedSpace,
    searchTask,
    addTask,
    pendingTask,
    startTask,
    completeTask,
    deleteTask,
  } = taskFunctions;

  const spaceFunctions = useSpaceFunctions(task, setTask);
  const {
    workspace,
    workspaceLoading,
    workspaceError,
    addSpace,
    updateSpace,
    deleteSpace,
  } = spaceFunctions;

  const noteFunctions = useNoteFunctions(space);
  const {
    allNotes,
    setAllNotes,
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
    spaceNotes,
    setSpaceNotes,
    upDateNote,
  } = noteFunctions;

  return (
    <Context.Provider
      value={{
        isLogin,
        setIsLogin,
        openModal,
        setOpenModal,
        accentColors,
        colorSelected,
        setColorSelected,
        generalStatus,
        space,
        setSpace,
        spaceLoading,
        spaceError,

        task,
        setTask,
        loading,
        error,
        selectTask,
        searchValue,
        setSearchValue,
        spaceTasks,
        setSpaceTasks,
        totalTask,
        totalPending,
        totalInProcess,
        totalCompleted,
        totalTaskSpace,
        totalPendingSpace,
        totalInProcessSpace,
        totalCompletedSpace,
        searchTask,
        addTask,
        pendingTask,
        startTask,
        completeTask,
        deleteTask,

        workspace,
        workspaceLoading,
        workspaceError,
        addSpace,
        updateSpace,
        deleteSpace,

        allNotes,
        setAllNotes,
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
        spaceNotes,
        setSpaceNotes,
        upDateNote,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
