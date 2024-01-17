import { GeneralApp } from '../../componets/GeneralApp';
import React from 'react';
import styled from "styled-components";
import './tasksStyles.css';
import { TaskStatus } from '../../componets/TaskStatus';
import { TaskFinder } from '../../componets/TaskFinder';
import { Task } from '../../componets/Task';
import { CreateTask } from '../../componets/CreateTask';

const generalStatus = ['Pendiente', 'En Proceso', 'Completado'];

const defaultTask = [
  { text: 'Tender la cama', status: generalStatus[2] },
  { text: 'Ir al GyM', status: generalStatus[1] },
  { text: 'Tomar una ducha', status: generalStatus[2] },
  { text: 'Lavar la loza', status: generalStatus[0] },
  { text: 'Lavar el baño', status: generalStatus[0] },
];

//localStorage.setItem('Task_v1', JSON.stringify(defaultTask));
//localStorage.removeItem('Task_v1');

function useLocalStorage(itemName, inicialValue) {

  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(inicialValue));
    parsedItem = inicialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {

  const [task, saveTask] = useLocalStorage('Task_v1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTask = task.filter(
    task => task.status === generalStatus[2]
  ).length;

  const totalTask = task.length;

  const searchTask = task.filter(
    (task) => {
      const taskText = task.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return taskText.includes(searchText);
    }
  )

  const pendingTask = (text) => {
    const newTask = [...task];
    const taskIndex = newTask.findIndex(
      (task) => task.text === text
    );
    newTask[taskIndex].status = generalStatus[0];
    saveTask(newTask);
  }

  const startTask = (text) => {
    const newTask = [...task];
    const taskIndex = newTask.findIndex(
      (task) => task.text === text
    );
    newTask[taskIndex].status = generalStatus[1];
    saveTask(newTask);
  }

  const completeTask = (text) => {
    const newTask = [...task];
    const taskIndex = newTask.findIndex(
      (task) => task.text === text
    );
    newTask[taskIndex].status = generalStatus[2];
    saveTask(newTask);
  }

  const deleteTask = (text) => {
    const newTask = [...task];
    const taskIndex = newTask.findIndex(
      (task) => task.text === text
    );
    newTask.splice(taskIndex, 1);
    saveTask(newTask);
  };

  return (
    <GeneralApp route={"/tasks"}>
      <div className='Frame1'>
        <div className='Frame2'>
          <TaskStatus percentage={(100 / totalTask) * completedTask} />
          <TaskFinder searchValue={searchValue} setSearchValue={setSearchValue} />
          <GeneralList>
            {generalStatus.map((status) => (
              <TaskList key={status} >
                <div className='mediumText'>{status}</div>
                {searchTask.map((task) => (
                  task.status === status ? (
                    <Task
                      key={task.text}
                      text={task.text}
                      status={task.status}
                      onPending={() => pendingTask(task.text)}
                      onStart={() => startTask(task.text)}
                      onComplete={() => completeTask(task.text)}
                      onDelete={() => deleteTask(task.text)}
                    />
                  ) : (<></>)
                ))
                }
              </TaskList>
            ))}
          </GeneralList>
        </div>
        <CreateTask />
      </div>
    </GeneralApp >
  );
}

export default App;

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
  border: 1px solid #000;
  background: rgba(0, 23, 36, 0.75);
  margin: 0px;
`;