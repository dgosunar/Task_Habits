import React from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const useTaskFunctions = (generalStatus) => {

  // localStorage.removeItem('Task_v1');
  // const defaultTask = [
  // { id: 1, text: 'Tarea Pendiente...', status: 1, workspace: 0, date: '' },
  // { id: 2, text: 'Tarea en Proceso...', status: 2, workspace: 0, date: '' },
  // { id: 3, text: 'Tarea Completada!!!', status: 3, workspace: 0, date: '' },
  // ];
  // localStorage.setItem('Task_v1', JSON.stringify(defaultTask));

  const { item: task, saveItem: setTask, loading, error } = useLocalStorage('Task_v1', []);
  const getTask = () => (task);
  const getTaskLoading = () => (loading);
  const getTaskError = () => (error);
  const [searchValue, setSearchValue] = React.useState('');
  const getSearchValue = () => (searchValue);
  const [spaceTasks, setSpaceTasks] = React.useState([]);
  const getSpaceTasks = () => (spaceTasks);

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
  const searchTask = () => (
    getSpaceTasks().filter((task) => (
      task.text.toLowerCase().includes(searchValue.toLowerCase())
    ))
  )

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
    setTask(newTask);
  }

  const updateTaskStatus = (id, newStatusId) => {
    const updatedTasks = task.map((t) =>
      t.id === id ? { ...t, status: newStatusId } : t
    );
    setTask(updatedTasks);
  }

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
    setTask(updatedTasks);
  }

  return {
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
  };
};

export default useTaskFunctions;