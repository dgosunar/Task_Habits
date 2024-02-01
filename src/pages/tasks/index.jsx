import React from 'react';
import { ContextProvider } from '../../Context';
import TaskUI from './taskUI';
import { Layout } from '../../componets/Layout/Dashboard'

function Tasks() {

  return (
    <Layout title={'Tareas'}>
      <ContextProvider>
        <TaskUI />
      </ContextProvider>
    </Layout>
  );
}

export default Tasks;