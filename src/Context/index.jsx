import React from "react";
import useTaskFunctions from "../Hooks/useTaskFunctions";
import useSpaceFunctions from "../Hooks/useSpaceFunctions";

const Context = React.createContext();

function ContextProvider({ children }) {

    const generalStatus = [
        { id: 1, name: 'Pendiente' },
        { id: 2, name: 'En Proceso' },
        { id: 3, name: 'Completado' },
    ];
    const getGeneralStatus = () => (generalStatus);

    const taskFunctions = useTaskFunctions(getGeneralStatus);
    const {
        getTask,
        setTask,
        getTaskLoading,
        getTaskError,
        getSearchValue,
        setSearchValue,
        getSpaceTasks,
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

    const spaceFunctions = useSpaceFunctions(getGeneralStatus, getTask, setTask);
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

    React.useEffect(() => {
        if (getTask().length > 0) {
            setSpaceTasks(selectSpace(getSpace()));
        }
    }, [getTask()]);

    const [openModal, setOpenModal] = React.useState(false);
    const getOpenModal = () => (openModal);

    // const initialworkspace = workspace.length === 0 ? [
    //     { id: 0, name: 'General' }
    // ] : workspace;
    // const [currentworkspace, setCurrentworkspace] = React.useState(initialworkspace);

    return (
        <Context.Provider value={{
            getGeneralStatus,
            getOpenModal,
            setOpenModal,
            getTask,
            setTask,
            getTaskLoading,
            getTaskError,
            getSearchValue,
            setSearchValue,
            getSpaceTasks,
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
        }}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider };