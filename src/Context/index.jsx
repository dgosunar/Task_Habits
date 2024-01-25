import React from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const Context = React.createContext();

function ContextProvider({ children }) {

    const generalStatus = [
        { id: 1, name: 'Pendiente' },
        { id: 2, name: 'En Proceso' },
        { id: 3, name: 'Completado' },
    ];

    const { item: spaceWork, saveItem: saveSpace, loadingSpace, errorSpace } = useLocalStorage('Space_v1', []);
    const { item: task, saveItem: saveTask, loading, error } = useLocalStorage('Task_v1', []);

    const [space, setSpace] = React.useState(0);//espacio de trabajo en uso
    const [spaceTasks, setSpaceTasks] = React.useState([]);//datos del espacio de trabajo
    
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    React.useEffect(() => {
        if (task.length > 0) {
          setSpaceTasks(selectSpace(space));
        }
      }, [task]);

    const totalPending = spaceTasks.filter(
        task => task.status === generalStatus[0].id
    ).length;

    const totalInProcess = spaceTasks.filter(
        task => task.status === generalStatus[1].id
    ).length;

    const totalCompleted = spaceTasks.filter(
        task => task.status === generalStatus[2].id
    ).length;

    const totalTask = spaceTasks.length;

    const searchTask = task.filter(
        (task) => {
            const taskText = task.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return taskText.includes(searchText);
        }
    )

    const selectSpace = (spaceId) => {
        const selectedSpace = searchTask.filter(
            task => task.spaceWork === spaceId,
        )
        return selectedSpace;
    }

    const addTask = (text, spaceWork, date) => {
        const newTask = [...task];
        newTask.push({
            id: (newTask[newTask.length - 1].id + 1),
            text,
            status: generalStatus[0].id,
            spaceWork,
            date
        })
        saveTask(newTask);
    }

    const pendingTask = (id) => {
        const newTask = [...task];
        const taskIndex = newTask.findIndex(
            (task) => task.id === id
        );
        newTask[taskIndex].status = generalStatus[0].id;
        saveTask(newTask);
    }

    const startTask = (id) => {
        const newTask = [...task];
        const taskIndex = newTask.findIndex(
            (task) => task.id === id
        );
        newTask[taskIndex].status = generalStatus[1].id;
        saveTask(newTask);
    }

    const completeTask = (id) => {
        const newTask = [...task];
        const taskIndex = newTask.findIndex(
            (task) => task.id === id
        );
        newTask[taskIndex].status = generalStatus[2].id;
        saveTask(newTask);
    }

    const deleteTask = (id) => {
        const newTask = [...task];
        const taskIndex = newTask.findIndex(
            (task) => task.id === id
        );
        newTask.splice(taskIndex, 1);
        saveTask(newTask);
    };


    return (
        <Context.Provider value={{
            generalStatus,
            spaceWork,
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
        }}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider };