import { useLocalStorage } from "../Hooks/useLocalStorage";

const useSpaceFunctions = (task, setTask) => {
  // ==============================================================
  // Uso del LocalStorage =========================================
  const defaultWork = [{ id: 0, name: "General", color: 0 }];
  const {
    item: workspace,
    saveItem: setWorkspace,
    workspaceLoading,
    workspaceError,
  } = useLocalStorage("Space_v1", defaultWork);

  // ==============================================================
  //Metodos para Espacios de Trabajo ==============================
  const addSpace = (name, color) => {
    const newSpace = workspace;
    const id = newSpace.length === 0 ? 1 : newSpace[newSpace.length - 1].id + 1;
    newSpace.push({ id: id, name, color });
    setWorkspace(newSpace);
  };

  const updateSpace = (name, color) => {};

  const deleteSpace = (id) => {
    const updatedTasks = task.filter((task) => task.workspace !== id);
    setTask(updatedTasks);
    const updatedSpace = workspace.filter((space) => space.id !== id);
    setWorkspace(updatedSpace);
  };

  return {
    workspace,
    workspaceLoading,
    workspaceError,
    addSpace,
    updateSpace,
    deleteSpace,
  };
};

export default useSpaceFunctions;
