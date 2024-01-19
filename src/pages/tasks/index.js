import React from 'react';
import { ContextProvider } from '../../Context';
import TaskUI from './taskUI';


function Tasks() {

  return (
    <ContextProvider>
      <TaskUI />
    </ContextProvider>
  );
}

export default Tasks;