import React from "react";
import { Layout } from "../../../layout/Dashboard";
import { TaskStatus } from "../Tasks/Components/TaskStatus";
import { Context } from "../../../Context";
import { TaskList } from "../Tasks/taskUI";
import { Task } from "../Tasks/Components/Task";
import styled from "styled-components";
import { CBotton } from "../../../Components/Bottons/CBotton";
import { NewTask } from "../Tasks/Mods/NewTask";
import { Modal } from "../../../Components/Modals/Modal";

function Summary() {
  const { workspace, task, openModal, setOpenModal } =
    React.useContext(Context);

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
          Tareas en Pendientes
          <div style={{ maxHeight: "185px" }}>
            <TaskList>
              <div className="list">
                {task.map((t) =>
                  t.status === 1 ? <Task key={t.id} task={t} /> : <></>
                )}
              </div>
            </TaskList>
          </div>
        </div>
        <CBotton setOpenModal={setOpenModal} />
        {openModal ? (
          <Modal>
            <NewTask />
          </Modal>
        ) : (
          <></>
        )}
      </Container>
    </Layout>
  );
}

export default Summary;

export const Container = styled.div`
  display: flex;
  gap: 20px;
  height: 100%;
  width: 100%;
  justify-content: center;

  .statusWorkplaces {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
    width: 370px;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }

  .leaveBox {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;
