import React from "react";
import TaskUI from "./taskUI";
import { Layout } from "../../layout/Dashboard";

function Tasks() {
  return (
    <Layout title={"Tareas"}>
      <TaskUI />
    </Layout>
  );
}

export default Tasks;
