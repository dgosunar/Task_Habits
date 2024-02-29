import React from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const useTaskFunctions = (generalStatus, space) => {
  // ==============================================================
  // Uso del LocalStorage =========================================
  const defaultTask = [
    { id: 1, text: "Tarea Pendiente...", status: 1, workspace: 0, date: "" },
    { id: 2, text: "Tarea en Proceso...", status: 2, workspace: 0, date: "" },
    { id: 3, text: "Tarea Completada!!!", status: 3, workspace: 0, date: "" },
  ];
  const {
    item: task,
    saveItem: setTask,
    loading,
    error,
  } = useLocalStorage("Task_v1", defaultTask);

  // ==============================================================
  // Cantidad de tareas globales ==================================
  const totalTask = () => task.length;
  const totalPending = () =>
    task.filter((task) => task.status === generalStatus[0].id).length;
  const totalInProcess = () =>
    task.filter((task) => task.status === generalStatus[1].id).length;
  const totalCompleted = () =>
    task.filter((task) => task.status === generalStatus[2].id).length;

  // ==============================================================
  // Cantidad de tareas por espacio de trabajo ==================================
  const totalTaskSpace = (id) =>
    task.filter((task) => task.workspace === id).length;
  const totalPendingSpace = (id) =>
    task
      .filter((task) => task.workspace === id)
      .filter((task) => task.status === generalStatus[0].id).length;
  const totalInProcessSpace = (id) =>
    task
      .filter((task) => task.workspace === id)
      .filter((task) => task.status === generalStatus[1].id).length;
  const totalCompletedSpace = (id) =>
    task
      .filter((task) => task.workspace === id)
      .filter((task) => task.status === generalStatus[2].id).length;

  // ==============================================================
  //Filtrador de tareas ===========================================
  const selectTask = (spaceId) => task.filter((t) => t.workspace === spaceId);
  const [spaceTasks, setSpaceTasks] = React.useState(selectTask(space));

  console.log(space);
  console.log(selectTask(space));
  console.log(spaceTasks);

  const [searchValue, setSearchValue] = React.useState("");
  const searchTask = () =>
    spaceTasks.filter((t) =>
      t.text.toLowerCase().includes(searchValue.toLowerCase())
    );

  // ==============================================================
  //Metodos para tareas ===========================================
  const addTask = (text, workspace, date) => {
    const id = task.length === 0 ? 1 : task[task.length - 1].id + 1;
    const newTask = [
      ...task,
      {
        id: id,
        text,
        status: generalStatus[0].id,
        workspace,
        date,
      },
    ];
    setTask(newTask);
  };

  const updateTaskStatus = (id, newStatusId) => {
    const updatedTasks = task.map((t) =>
      t.id === id ? { ...t, status: newStatusId } : t
    );
    setTask(updatedTasks);
  };

  const pendingTask = (id) => {
    updateTaskStatus(id, generalStatus[0].id);
  };
  const startTask = (id) => {
    updateTaskStatus(id, generalStatus[1].id);
  };
  const completeTask = (id) => {
    updateTaskStatus(id, generalStatus[2].id);
  };

  const deleteTask = (idTask) => {
    const updatedTasks = task.filter((task) => task.id !== idTask);
    setTask(updatedTasks);
  };

  return {
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
  };
};

export default useTaskFunctions;
