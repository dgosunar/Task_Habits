import React from "react";
import { Context } from "../../../Context";
import { SelectorSpace } from "../../../Components/SelectorSpace";
import { Separator } from "../../../Components/Modals/Separator";
import { TaskFinder } from "./Components/TaskFinder";
import { TaskLoading } from "./Components/Task/TaskLoading";
import { TaskError } from "./Components/Task/TaskError";
import { TaskEmpty } from "./Components/Task/TaskEmpty";
import { Task } from "./Components/Task";
import { CBotton } from "../../../Components/Bottons/CBotton";
import { Modal } from "../../../Components/Modals/Modal";
import { TaskStatus } from "./Components/TaskStatus";
import { NewTask } from "./Mods/NewTask";
import styled from "styled-components";

function TaskUI() {
  const {
    taskLoading,
    taskError,
    generalStatus,
    openModal,
    setOpenModal,
    selectTask,
    space,
  } = React.useContext(Context);

  return (
    <Container>
      <SelectorSpace />
      <Separator />
      <WorkSpace>
        <TaskStatus />
        <TaskFinder />
        <ContainerTasks>
          <GeneralList>
            {generalStatus.map((status) => (
              <TaskList key={status.id}>
                <div>{status.name}</div>
                <Separator />

                <div className="list">
                  {taskLoading ? (
                    <TaskLoading />
                  ) : taskError ? (
                    <TaskError />
                  ) : !taskLoading && selectTask(space).length === 0 ? (
                    <TaskEmpty />
                  ) : (
                    selectTask(space).map((t) =>
                      t.status === status.id ? (
                        <Task key={t.id} task={t} />
                      ) : (
                        <></>
                      )
                    )
                  )}
                </div>
              </TaskList>
            ))}
          </GeneralList>
        </ContainerTasks>
      </WorkSpace>
      <CBotton setOpenModal={setOpenModal} title="Nueva" />
      {openModal ? (
        <Modal>
          <NewTask />
        </Modal>
      ) : (
        <></>
      )}
    </Container>
  );
}

export default TaskUI;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 600px) {
  }
`;

export const WorkSpace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: calc(100% - 123px);
  gap: 10px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 600px) {
  }
`;

export const ContainerStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;

  @media screen and (max-width: 1024px) {
    height: min-content;
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 600px) {
  }
`;

export const ContainerTasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: calc(100% - 50px);
  width: 100%;
  border-radius: 8px;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 600px) {
  }
`;

export const GeneralList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  height: 100%;
  width: 100%;
  overflow: auto;
  border-radius: 8px;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 600px) {
    justify-content: flex-start;
  }
`;

export const TaskList = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  min-width: 350px;
  height: calc(100% - 20px);
  gap: 10px;
  border-radius: 8px;
  background: var(--bg-cards);
  color: var(--white);
  box-shadow: 0px 4px 10px 0px var(--black);

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 600px) {
  }

  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    overflow-y: auto;
    width: 100%;
    height: 100%;
  }
`;
