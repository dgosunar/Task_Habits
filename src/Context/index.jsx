import React from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const Context = React.createContext();

function ContextProvider({ children }) {

    const generalStatus = [
        { id: 1, name: 'Pendiente' },
        { id: 2, name: 'En Proceso' },
        { id: 3, name: 'Completado' },
    ];

    const spaceWork = [
        { id: 0, name: 'General' },
        { id: 1, name: 'Casa' },
        { id: 2, name: 'Proyecto T&H' },
        { id: 3, name: 'Clase de Multiservicios' },
    ];

    const { item: task, saveItem: saveTask, loading, error } = useLocalStorage('Task_v1', []);
    const [searchValue, setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);

    const completedTask = task.filter(
        task => task.status === generalStatus[2]
    ).length;

    const totalTask = task.length;

    const searchTask = task.filter(
        (task) => {
            const taskText = task.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return taskText.includes(searchText);
        }
    )

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
            loading,
            error,
            totalTask,
            completedTask,
            searchValue,
            setSearchValue,
            generalStatus,
            spaceWork,
            searchTask,
            pendingTask,
            startTask,
            completeTask,
            deleteTask,
            openModal,
            setOpenModal,
            addTask,
        }}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider };