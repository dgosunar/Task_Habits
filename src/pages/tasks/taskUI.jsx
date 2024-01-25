import React from 'react';
import { Context } from '../../Context';
import { TaskStatus } from '../../componets/TaskStatus';
import { TaskFinder } from '../../componets/TaskFinder';
import { TaskLoading } from '../../componets/TaskLoading';
import { TaskError } from '../../componets/TaskError';
import { TaskEmpty } from '../../componets/TaskEmpty';
import { Task } from '../../componets/Task';
import { CreateTask } from '../../componets/CreateTask';
import styled from "styled-components";
import { Modal } from '../../componets/Modals/Modal';
import { BadBotton, GoodBotton, Label, NewTask, StatusBox } from '../../componets/Modals/NewTask';
import { Separator } from '../../componets/Modals/Separator';
import { Div } from '../../styles/styles';


function TaskUI() {

  const {
    generalStatus,
    spaceWork,
    loadingSpace,
    errorSpace,
    loading,
    error,
    searchValue,
    setSearchValue,
    openModal,
    setOpenModal,
    totalPending,
    totalInProcess,
    totalCompleted,
    totalTask,
    searchTask,
    selectSpace,
    space,
    setSpace,
    spaceTasks,
    setSpaceTasks,
    addTask,
    pendingTask,
    startTask,
    completeTask,
    deleteTask,
  } = React.useContext(Context);

  const onChangeSpace = (event) => {
    const id = spaceWork.findIndex((space) => space.name === event.target.value);
    setSpace(id);
    setSpaceTasks(selectSpace(id));
  };

  const onSubmit = () => {
  };

  const onCancel = () => {
  };

  return (
    <Container>
      <SelectorSpace>
        <StatusBox>
          <Label>Espacio de Trabajo</Label>
          <select className='status generalText' selected={space} onChange={onChangeSpace}>
            {spaceWork.map((space) => (
              <option key={space.id}>{space.name}</option>
            ))}
          </select>
        </StatusBox>
        <BottonBox>
          <BadBotton className="generalText" onClick={onCancel}>Eliminar Espacio de Trabajo</BadBotton>
          <GoodBotton className="generalText" onClick={onSubmit}>Crear Nuevo Espacio de Trabajo</GoodBotton>
        </BottonBox>
      </SelectorSpace>
      <Separator />
      <WorkSpace>
        <ContainerStatus>
          <TaskStatus />
          <TaskFinder />
        </ContainerStatus>

        <ContainerTasks>
          <GeneralList>
            {generalStatus.map((status) => (
              <TaskList key={status.id}>
                <div>{status.name}</div>
                <Separator />
                <Div className='list'>
                  {loading ? (<TaskLoading />) :
                    error ? (<TaskError />) :
                      (!loading && searchTask.length === 0) ? (<TaskEmpty />) :
                        (spaceTasks.map((task) => (
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
                </Div>
              </TaskList>
            ))}
          </GeneralList>
        </ContainerTasks>

      </WorkSpace>
      
      <CreateTask setOpenModal={setOpenModal} />
      {openModal ? (
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
  width: 100%;
  gap: 10px;
`;

export const SelectorSpace = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 600px) {
  }
`;

export const BottonBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 10px 20px;
    text-align: center;
`;

export const WorkSpace = styled.div`    
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  height: 100%;
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
  height: 100%;
  width: 100%;
  justify-content: space-between;

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
  height: 100%;
  width: min-content;

  @media screen and (max-width: 1024px) {
    height: calc(100% - 78px);
  }
  
  @media screen and (max-width: 768px) {
    width: 98%;
  }

  @media screen and (max-width: 600px) {
    
  }
`;


export const GeneralList = styled.div` 
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  height: calc(100% - 50px);
  
  @media screen and (max-width: 1024px) {
    width: 100%;
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
  min-height: calc(100% - 20px);
  max-height: calc(100% - 20px);
  gap: 10px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.75);
  color: var(--primary-main);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  
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
    border-radius: 15px;
    overflow-y: auto;
    width: 100%;
  }
`;

