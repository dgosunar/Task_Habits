import React from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const Context = React.createContext();

function ContextProvider({ children }) {

    const generalStatus = [
        { id: 1, name: 'Pendiente' },
        { id: 2, name: 'En Proceso' },
        { id: 3, name: 'Completado' },
    ];

    // localStorage.removeItem('Space_v1');
    // const defaultWork = [
    //     { id: 0, name: 'General' },
    // ];
    // localStorage.setItem('Space_v1', JSON.stringify(defaultWork));

    // localStorage.removeItem('Task_v1');
    // const defaultTask = [
    // { id: 1, text: 'Tarea Pendiente...', status: 1, workspace: 0, date: '' },
    // { id: 2, text: 'Tarea en Proceso...', status: 2, workspace: 0, date: '' },
    // { id: 3, text: 'Tarea Completada!!!', status: 3, workspace: 0, date: '' },
    // ];
    // localStorage.setItem('Task_v1', JSON.stringify(defaultTask));

    const { item: workspace, saveItem: saveSpace, loadingSpace, errorSpace } = useLocalStorage('Space_v1', []);
    const { item: task, saveItem: saveTask, loading, error } = useLocalStorage('Task_v1', []);

    const initialworkspace = workspace.length === 0 ? [
        { id: 0, name: 'General' }
    ] : workspace;

    const [space, setSpace] = React.useState(0);
    const [spaceTasks, setSpaceTasks] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const [currentworkspace, setCurrentworkspace] = React.useState(initialworkspace);

    React.useEffect(() => {
        if (task.length > 0) {
            setSpaceTasks(selectSpace(space));
        }
    }, [task]);

    // Cantidad de tareas globales
    const totalTask = () => (
        task.length
    )
    const totalPending = () => (
        task.filter(
            task => task.status === generalStatus[0].id
        ).length
    )
    const totalInProcess = () => (
        task.filter(
            task => task.status === generalStatus[1].id
        ).length
    )
    const totalCompleted = () => (
        task.filter(
            task => task.status === generalStatus[2].id
        ).length
    )

    //Filtrador de tareas
    const searchTask = spaceTasks.filter((task) => {
        const taskText = task.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return taskText.includes(searchText);
    })

    //Metodos para tareas
    const addTask = (text, workspace, date) => {
        const id = task.length === 0 ? 1 : task[task.length - 1].id + 1;
        const newTask = [...task, {
            id: id,
            text,
            status: generalStatus[0].id,
            workspace,
            date
        }];
        saveTask(newTask);
    }

    const updateTaskStatus = (id, newStatusId) => {
        const updatedTasks = task.map((t) =>
            t.id === id ? { ...t, status: newStatusId } : t
        );
        saveTask(updatedTasks);
    };

    const pendingTask = (id) => {
        updateTaskStatus(id, generalStatus[0].id);
    }

    const startTask = (id) => {
        updateTaskStatus(id, generalStatus[1].id);
    }

    const completeTask = (id) => {
        updateTaskStatus(id, generalStatus[2].id);
    }

    const deleteTask = (idTask) => {
        const updatedTasks = task.filter(task => task.id !== idTask);
        saveTask(updatedTasks);
    };

    //Filtrador de Espacios de Trabajo
    const selectSpace = (spaceId) => (
        console.log(task.filter(
            task => task.workspace === spaceId,
        )),
        task.filter(
            task => task.workspace === spaceId,
        )
    )


    // Cantidad de tareas por Espacio de Trabajo
    const totalTaskSpace = (spaceId) => (
        selectSpace(spaceId).length
    )
    const totalPendingSpace = (spaceId) => {
        const thisSpace = selectSpace(spaceId);
        const size = thisSpace.filter(
            task => task.status === generalStatus[0].id
        ).length;
        return size;
    }
    const totalStartSpace = (spaceId) => {
        const thisSpace = selectSpace(spaceId);
        const size = thisSpace.filter(
            task => task.status === generalStatus[1].id
        ).length;
        return size;
    }
    const totalCompleteSpace = (spaceId) => {
        const thisSpace = selectSpace(spaceId);
        const size = thisSpace.filter(
            task => task.status === generalStatus[2].id
        ).length;
        return size;
    }

    //Metodos para Espacios de Trabajo
    const addSpace = (name) => {
        const newSpace = [...workspace];
        const id = newSpace.length === 0 ? 1 : newSpace[newSpace.length - 1].id + 1;
        newSpace.push({
            id: id,
            name
        })
        saveSpace(newSpace);
    }
    const deleteSpace = (id) => {
        const updatedTasks = task.filter(task => task.workspace !== id);
        saveTask(updatedTasks);
        const updatedSpace = workspace.filter(space => space.id !== id);
        saveSpace(updatedSpace);
    };

    return (
        <Context.Provider value={{
            generalStatus,
            workspace,
            space,
            setSpace,
            spaceTasks,
            setSpaceTasks,
            loadingSpace,
            errorSpace,
            loading,
            error,
            searchValue,
            setSearchValue,
            openModal,
            setOpenModal,
            totalPending,
            totalInProcess,
            totalCompleted,
            totalTask,
            searchTask,
            selectSpace,
            addTask,
            pendingTask,
            startTask,
            completeTask,
            deleteTask,
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