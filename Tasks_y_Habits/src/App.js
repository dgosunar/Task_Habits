import React from 'react';
import { TaskStatus } from './componets/TaskStatus';
import { TaskFinder } from './componets/TaskFinder';
import { TaskList } from './componets/TaskList';
import { Task } from './componets/Task';
import { CreateTask } from './componets/CreateTask';
import { Presentation } from './componets/Presentation';
import './styles/generalStyles.css';
import './styles/App.css';
import logo from './T&H.png'

const status = ['Pending', 'Start', 'Completed'];

const defaultTask = [
  { text: 'Tender la cama', status: status[2] },
  { text: 'Ir al GyM', status: status[1] },
  { text: 'Lavar la loza', status: status[0] },
  { text: 'Lavar el baño', status: status[0] },
];

//localStorage.setItem('Task_v1', JSON.stringify(defaultTask));
//localStorage.removeItem('Task_v1');

function useLocalStorage(itemName, inicialValue){

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
    task => task.status === status[2]
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
    newTask[taskIndex].status = status[0];
    saveTask(newTask);
  }

  const startTask = (text) => {
    const newTask = [...task];
    const taskIndex = newTask.findIndex(
      (task) => task.text === text
    );
    newTask[taskIndex].status = status[1];
    saveTask(newTask);
  }

  const completeTask = (text) => {
    const newTask = [...task];
    const taskIndex = newTask.findIndex(
      (task) => task.text === text
    );
    newTask[taskIndex].status = status[2];
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
    <>
      <Presentation />
      <span className='GeneralApp'>
        <span className='PrimaryTitle' style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'stretch',
          gap: '20px',
        }}>
          <img src={logo} style={{ width: "40px" }} />
          Task & Habits
        </span>
        <span className='Frame12'>
          <span className='Frame11'>
            <TaskStatus percentage={(100 / totalTask) * completedTask} />
            <TaskFinder searchValue={searchValue} setSearchValue={setSearchValue} />
            <TaskList>
              {searchTask.map(task => (
                <Task
                  key={task.text}
                  text={task.text}
                  status={task.status}
                  onPending={() =>
                    pendingTask(task.text)
                  }
                  onStart={() =>
                    startTask(task.text)
                  }
                  onComplete={() =>
                    completeTask(task.text)
                  }
                  onDelete={() =>
                    deleteTask(task.text)
                  }
                />
              ))}
            </TaskList>
          </span>
          <CreateTask />
        </span>
      </span>
    </>
  );
}

export default App;