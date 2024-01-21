import React from 'react';
import { Context } from '../../Context';
import { TaskStatus } from '../../Componets/TaskStatus';
import { TaskFinder } from '../../Componets/TaskFinder';
import { TaskLoading } from '../../Componets/TaskLoading';
import { TaskError } from '../../Componets/TaskError';
import { TaskEmpty } from '../../Componets/TaskEmpty';
import { Task } from '../../Componets/Task';
import { CreateTask } from '../../Componets/CreateTask';
import styled from "styled-components";
import './tasksStyles.css';
import { Modal } from '../../Componets/Modals/Modal';
import { NewTask } from '../../Componets/Modals/NewTask';
import { Separator } from '../../Componets/Modals/Separator';

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
      <div className='Frame2'>
        <TaskStatus />
        <TaskFinder />
        <GeneralList>

          {generalStatus.map((status) => (
            <div className='mediumText'>{status}</div>,
            <TaskList key={status}>
              <div>{status}</div>
              <Separator />
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
      <CreateTask setOpenModal={setOpenModal} />

      {openModal ? (
        <Modal title='Crear una nueva tarea'>
          <NewTask />
        </Modal>
      ) : (<></>)}

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
  gap: 10px;
  align-self: stretch;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.75);
  color: var(--primary-main);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 0px;
`;