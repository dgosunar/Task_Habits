import React from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const useSpaceFunctions = (getGeneralStatus, task, setTask) => {
  // localStorage.removeItem('Space_v1');
  const defaultWork = [{ id: 0, name: "General", color: 0 }];
  // localStorage.setItem('Space_v1', JSON.stringify(defaultWork));

  const {
    item: workspace,
    saveItem: saveSpace,
    loading,
    error,
  } = useLocalStorage("Space_v1", defaultWork);
  const getWorkspace = () => workspace;
  const getWorkspaceLoading = () => loading;
  const getWorkspaceError = () => error;

  const [space, setSpace] = React.useState(0);

  //Filtrador de Espacios de Trabajo
  const selectSpace = (spaceId) =>
    task.filter((task) => task.workspace === spaceId);

  // Cantidad de tareas por Espacio de Trabajo
  const totalTaskSpace = (spaceId) => selectSpace(spaceId).length;
  const totalPendingSpace = (spaceId) =>
    selectSpace(spaceId).filter(
      (task) => task.status === getGeneralStatus()[0].id
    ).length;
  const totalStartSpace = (spaceId) =>
    selectSpace(spaceId).filter(
      (task) => task.status === getGeneralStatus()[1].id
    ).length;
  const totalCompleteSpace = (spaceId) =>
    selectSpace(spaceId).filter(
      (task) => task.status === getGeneralStatus()[2].id
    ).length;

  //Metodos para Espacios de Trabajo
  const addSpace = (name, color) => {
    const newSpace = getWorkspace();
    const id = newSpace.length === 0 ? 1 : newSpace[newSpace.length - 1].id + 1;
    newSpace.push({ id: id, name, color });
    saveSpace(newSpace);
  };
  const deleteSpace = (id) => {
    const updatedTasks = task.filter((task) => task.workspace !== id);
    setTask(updatedTasks);
    const updatedSpace = getWorkspace().filter((space) => space.id !== id);
    saveSpace(updatedSpace);
  };

  return {
    getWorkspace,
    getWorkspaceLoading,
    getWorkspaceError,
    space,
    setSpace,
    selectSpace,
    totalTaskSpace,
    totalPendingSpace,
    totalStartSpace,
    totalCompleteSpace,
    addSpace,
    deleteSpace,
  };
};

export default useSpaceFunctions;
