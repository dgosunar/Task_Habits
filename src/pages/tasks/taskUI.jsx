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
import './tasksStyles.css';
import { Modal } from '../../componets/Modals/Modal';
import { NewTask } from '../../componets/Modals/NewTask';
import { Separator } from '../../componets/Modals/Separator';
import { Div } from '../../styles/styles';


function TaskUI() {

  const {
    loading,
    error,
    generalStatus,
    searchTask,
    pendingTask,
    startTask,
    completeTask,
    deleteTask,
    openModal,
    setOpenModal,
  } = React.useContext(Context);

  return (
    <div className='Frame1'>
      <div className='Frame3'>
        <Div className="primaryTitle_SM">Tareas</Div>
        <Div className="generalText">Gestiona tus tareas, conquista tus metas</Div>
        <TaskStatus />
        <CreateTask setOpenModal={setOpenModal} />

        {openModal ? (
          <Modal title='Crear una nueva tarea'>
            <NewTask />
          </Modal>
        ) : (<></>)}
      </div>

      <div className='Frame2'>
        <TaskFinder />
        <GeneralList>
          {generalStatus.map((status) => (
            <Div className='mediumText'>{status}</Div>,
            <TaskList key={status}>
              <div>{status}</div>
              <Separator/>
              {loading ? (<TaskLoading key={status} />) :
                error ? (<TaskError />) :
                  (!loading && searchTask.length === 0) ? (<TaskEmpty />) :
                    (searchTask.map((task) => (
                      task.status === status ? (
                        <Task
                          key={task.id}
                          text={task.text}
                          status={task.status}
                          onPending={() => pendingTask(task.text)}
                          onStart={() => startTask(task.text)}
                          onComplete={() => completeTask(task.text)}
                          onDelete={() => deleteTask(task.text)}
                        />
                      ) : (<></>)
                    )))}
            </TaskList>
          ))}

        </GeneralList>
      </div>
    </div>
  );
}

export default TaskUI;

export const GeneralList = styled.div` 
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  height: 100%;
`;

export const TaskList = styled.div` 
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  width: 250px;
  max-height: 100%;
  gap: 10px;
  align-self: stretch;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.75);
  color: var(--primary-main);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 0px;
`;