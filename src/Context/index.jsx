import React from "react";
import useTaskFunctions from "../Hooks/useTaskFunctions";
import useSpaceFunctions from "../Hooks/useSpaceFunctions";
import useNoteFunctions from "../Hooks/useNoteFunctions";

const Context = React.createContext();

function ContextProvider({ children }) {
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

  const generalStatus = [
    { id: 1, name: "Pendiente" },
    { id: 2, name: "Completado" },
  ];

  // ==============================================================
  // Uso del LocalStorage =========================================

  const [space, setSpace] = React.useState(0);

  const taskFunctions = useTaskFunctions(generalStatus);
  const {
    task,
    setTask,
    loading,
    error,
    selectTask,
    searchValue,
    setSearchValue,
    totalTask,
    totalPending,
    totalCompleted,
    totalTaskSpace,
    totalPendingSpace,
    totalCompletedSpace,
    searchTask,
    addTask,
    pendingTask,
    completeTask,
    deleteTask,
  } = taskFunctions;

  const noteFunctions = useNoteFunctions();
  const {
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
  } = noteFunctions;

  const spaceFunctions = useSpaceFunctions(
    task,
    setTask,
    allNotes,
    setAllNotes
  );
  const {
    workspace,
    workspaceLoading,
    workspaceError,
    addSpace,
    updateSpace,
    deleteSpace,
  } = spaceFunctions;

  const [isLogin, setIsLogin] = React.useState();
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <Context.Provider
      value={{
        isLogin,
        setIsLogin,
        openModal,
        setOpenModal,
        accentColors,
        generalStatus,
        space,
        setSpace,

        task,
        setTask,
        loading,
        error,
        selectTask,
        searchValue,
        setSearchValue,
        totalTask,
        totalPending,
        totalCompleted,
        totalTaskSpace,
        totalPendingSpace,
        totalCompletedSpace,
        searchTask,
        addTask,
        pendingTask,
        completeTask,
        deleteTask,

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

        workspace,
        workspaceLoading,
        workspaceError,
        addSpace,
        updateSpace,
        deleteSpace,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
