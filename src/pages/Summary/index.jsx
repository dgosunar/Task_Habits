import React from "react";
import { Layout } from "../../layout/Dashboard";
import { TaskStatus } from "../../componets/TaskStatus";

function Summary() {
  return (
    <Layout title={"Resumen"}>
      <TaskStatus />
    </Layout>
  );
}

export default Summary;
