import React from "react";
import { Layout } from "../../../layout/Dashboard";
import TaskUI from "./taskUI";

function Tasks() {
  return (
    <Layout title={"Tareas"}>
      <TaskUI />
    </Layout>
  );
}

export default Tasks;
