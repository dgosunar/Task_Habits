import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Context = React.createContext();

function ContextProvider({ children }) {

    const generalStatus = ['Pendiente', 'En Proceso', 'Completado'];

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

    const addTask = (text) =>{
        const newTask = [...task];
        newTask.push({
            text, status:'Pendiente'
        })
        saveTask(newTask);
    }

    const pendingTask = (text) => {
        const newTask = [...task];
        const taskIndex = newTask.findIndex(
            (task) => task.text === text
        );
        newTask[taskIndex].status = generalStatus[0];
        saveTask(newTask);
    }

    const startTask = (text) => {
        const newTask = [...task];
        const taskIndex = newTask.findIndex(
            (task) => task.text === text
        );
        newTask[taskIndex].status = generalStatus[1];
        saveTask(newTask);
    }

    const completeTask = (text) => {
        const newTask = [...task];
        const taskIndex = newTask.findIndex(
            (task) => task.text === text
        );
        newTask[taskIndex].status = generalStatus[2];
        saveTask(newTask);
    }

    const deleteTask = (text) => {
        const newTask = [...task];
        const taskIndex = newTask.findIndex(
            (task) => task.text === text
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