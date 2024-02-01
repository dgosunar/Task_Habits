import React from 'react';
import { Context } from '../../Context';
import { SelectorSpace } from '../../componets/SelectorSpace';
import { Separator } from '../../componets/Modals/Separator';
import { TaskStatus } from '../../componets/TaskStatus';
import { TaskFinder } from '../../componets/TaskFinder';
import { TaskLoading } from '../../componets/Task/TaskLoading';
import { TaskError } from '../../componets/Task/TaskError';
import { TaskEmpty } from '../../componets/Task/TaskEmpty';
import { Task } from '../../componets/Task';
import { CreateTask } from '../../componets/CreateTask';
import { Modal } from '../../componets/Modals/Modal';
import { NewTask } from '../../componets/Modals/NewTask';
import styled from "styled-components";


function TaskUI() {

  const {
    getTaskLoading,
    getTaskError,
    searchTask,
    pendingTask,
    startTask,
    completeTask,
    deleteTask,
    getGeneralStatus,
    getOpenModal,
    setOpenModal,
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
            {getGeneralStatus().map((status) => (
              <TaskList key={status.id}>
                <div>{status.name}</div>
                <Separator />

                <div className='list'>
                  {getTaskLoading() ? (<TaskLoading />) :
                    getTaskError() ? (<TaskError />) :
                      (!getTaskLoading() && searchTask().length === 0) ? (<TaskEmpty />) :
                        (searchTask().map((task) => (
                          task.status === status.id ? (
                            <Task
                              key={task.id}
                              task={task}
                              onPending={() => pendingTask(task.id)}
                              onStart={() => startTask(task.id)}
                              onComplete={() => completeTask(task.id)}
                              onDelete={() => deleteTask(task.id)}
                            />
                          ) : (<></>)
                        )))}
                </div>
                
              </TaskList>
            ))}
          </GeneralList>

        </ContainerTasks>
      </WorkSpace>

      <CreateTask setOpenModal={setOpenModal} title="Nueva" />
      {getOpenModal() ? (
        <Modal title='Crear una nueva tarea'>
          <NewTask />
        </Modal>
      ) : (<></>)}

    </Container>
  );
}

export default TaskUI;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 55%;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
  }
`;

export const WorkSpace = styled.div`    
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: calc(100% - 123px);
  width: calc(100% - 40px);
  gap: 10px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
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
  height: calc(100% - 137px);
  width: 100%;
  border-radius: 8px;

  @media screen and (max-width: 1024px) {
    height: calc(100% - 78px);
  }
  
  @media screen and (max-width: 768px) {
    width: 98%;
  }

  @media screen and (max-width: 600px) {
    height: calc(100% - 167px);
  }
`;


export const GeneralList = styled.div` 
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  height: calc(100% - 20px);
  width: 100%;
  overflow-y: auto;
  border-radius: 8px;
  
  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
  }
  `;

export const TaskList = styled.div` 
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: calc(100% - 20px);
  gap: 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.15);
  color: var(--white);
  box-shadow: 0px 4px 10px 0px var(--black);
  backdrop-filter: blur(10px);
  
  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
  }
  
  @media screen and (max-width: 600px) {
    width: calc(100% - 20px);
    min-height: auto;
  }

  .list{
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

