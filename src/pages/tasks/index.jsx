import React from 'react';
import { ContextProvider } from '../../context';
import TaskUI from './taskUI';
import { Layout } from '../../Componets/Layout'

function Tasks() {

  return (
    <Layout>
      <ContextProvider>
        <TaskUI />
      </ContextProvider>
    </Layout>
  );
}

export default Tasks;