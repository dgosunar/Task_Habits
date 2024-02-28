import React from "react";
import { Context } from "../../../Context";
import { SelectorSpace } from "../../../componets/SelectorSpace";
import { Separator } from "../../../componets/Modals/Separator";
import { TaskFinder } from "../../../componets/TaskFinder";
import { TaskLoading } from "../../../componets/Task/TaskLoading";
import { TaskError } from "../../../componets/Task/TaskError";
import { TaskEmpty } from "../../../componets/Task/TaskEmpty";
import { Task } from "../../../componets/Task";
import { CreateTask } from "../../../componets/CreateTask";
import { Modal } from "../../../componets/Modals/Modal";
import { NewTask } from "../../../componets/Modals/NewTask";
import styled from "styled-components";

function TaskUI() {
  const {
    taskLoading,
    taskError,
    searchTask,
    pendingTask,
    startTask,
    completeTask,
    deleteTask,
    getGeneralStatus,
    openModal,
    setOpenModal,
  } = React.useContext(Context);

  return (
    <Container>
      <SelectorSpace />
      <Separator />

      <WorkSpace>
        <TaskFinder />
        <ContainerTasks>
          <GeneralList>
            {getGeneralStatus().map((status) => (
              <TaskList key={status.id}>
                <div>{status.name}</div>
                <Separator />

                <div className="list">
                  {taskLoading ? (
                    <TaskLoading />
                  ) : taskError ? (
                    <TaskError />
                  ) : !taskLoading && searchTask().length === 0 ? (
                    <TaskEmpty />
                  ) : (
                    searchTask().map((task) =>
                      task.status === status.id ? (
                        <Task
                          key={task.id}
                          task={task}
                          onPending={() => pendingTask(task.id)}
                          onStart={() => startTask(task.id)}
                          onComplete={() => completeTask(task.id)}
                          onDelete={() => deleteTask(task.id)}
                        />
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

      <CreateTask setOpenModal={setOpenModal} title="Nueva" />
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
