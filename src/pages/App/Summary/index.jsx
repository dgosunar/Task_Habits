import React from "react";
import { Layout } from "../../../layout/Dashboard";
import { TaskStatus } from "../Tasks/Components/TaskStatus";
import { Context } from "../../../Context";
import { TaskList } from "../Tasks/taskUI";
import { Task } from "../Tasks/Components/Task";
import styled from "styled-components";

function Summary() {
  const { workspace, task } = React.useContext(Context);

  return (
    <Layout title={"Resumen"}>
      <Container>
        <div className="statusWorkplaces">
          {workspace.map((s) => (
            <div className="leaveBox">
              {s.name}
              <TaskStatus mySpace={s.id} />
            </div>
          ))}
        </div>
        <div className="leaveBox">
          Tareas en Progreso
          <TaskList>
            <div className="list">
              {task.map((t) =>
                t.status === 2 ? <Task key={t.id} task={t} /> : <></>
              )}
            </div>
          </TaskList>
        </div>
      </Container>
    </Layout>
  );
}

export default Summary;

export const Container = styled.div`
  display: flex;
  gap: 20px;

  .statusWorkplaces {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .leaveBox {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 600px) {
  }
`;
