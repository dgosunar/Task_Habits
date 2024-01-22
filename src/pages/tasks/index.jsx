import React from 'react';
import { ContextProvider } from '../../Context';
import TaskUI from './taskUI';
import { Layout } from '../../componets/Layout'

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