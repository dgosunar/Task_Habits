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

  const [colorSelected, setColorSelected] = React.useState(0);

  const generalStatus = [
    { id: 1, name: "Pendiente" },
    { id: 2, name: "En Proceso" },
    { id: 3, name: "Completado" },
  ];
  const getGeneralStatus = () => generalStatus;

  const taskFunctions = useTaskFunctions(getGeneralStatus);
  const {
    task,
    setTask,
    loading,
    error,
    searchValue,
    setSearchValue,
    spaceTasks,
    setSpaceTasks,
    totalTask,
    totalPending,
    totalInProcess,
    totalCompleted,
    searchTask,
    addTask,
    pendingTask,
    startTask,
    completeTask,
    deleteTask,
  } = taskFunctions;

  const spaceFunctions = useSpaceFunctions(getGeneralStatus, task, setTask);
  const {
    getWorkspace,
    getWorkspaceLoading,
    getWorkspaceError,
    getSpace,
    setSpace,
    selectSpace,
    totalTaskSpace,
    totalPendingSpace,
    totalStartSpace,
    totalCompleteSpace,
    addSpace,
    deleteSpace,
  } = spaceFunctions;

  const noteFunctions = useNoteFunctions();
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
  } = noteFunctions;

  React.useEffect(() => {
    if (task.length > 0) {
      setSpaceTasks(selectSpace(getSpace()));
    }
  }, [task]);

  const [openModal, setOpenModal] = React.useState(false);

  // const initialworkspace = workspace.length === 0 ? [
  //     { id: 0, name: 'General' }
  // ] : workspace;
  // const [currentworkspace, setCurrentworkspace] = React.useState(initialworkspace);

  return (
    <Context.Provider
      value={{
        accentColors,
        colorSelected,
        setColorSelected,
        getGeneralStatus,
        openModal,
        setOpenModal,
        task,
        setTask,
        loading,
        error,
        searchValue,
        setSearchValue,
        spaceTasks,
        setSpaceTasks,
        totalTask,
        totalPending,
        totalInProcess,
        totalCompleted,
        searchTask,
        addTask,
        pendingTask,
        startTask,
        completeTask,
        deleteTask,
        getWorkspace,
        getWorkspaceLoading,
        getWorkspaceError,
        getSpace,
        setSpace,
        selectSpace,
        totalTaskSpace,
        totalPendingSpace,
        totalStartSpace,
        totalCompleteSpace,
        addSpace,
        deleteSpace,

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
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
