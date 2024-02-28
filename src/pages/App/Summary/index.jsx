import React from "react";
import { Layout } from "../../../layout/Dashboard";
import { TaskStatus } from "../../../Components/TaskStatus";

function Summary() {
  return (
    <Layout title={"Resumen"}>
      <TaskStatus />
    </Layout>
  );
}

export default Summary;
