import React from 'react';
import { ContextProvider } from '../../Context';
import TaskUI from './taskUI';


function App() {

  return (
    <ContextProvider>
      <TaskUI/>
    </ContextProvider>
  );
}

export default App;