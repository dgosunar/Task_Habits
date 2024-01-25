import React from 'react';
import { ContextProvider } from '../../Context';
import TaskUI from './taskUI';
import { Layout } from '../../componets/Layout'

function Tasks() {

  return (
    //<Layout>
    <Layout title={'Tareas'} description={'Gestiona tus tareas, conquista tus metas'}>
      <ContextProvider>
        <TaskUI />
      </ContextProvider>
    </Layout>
  );
}

export default Tasks;