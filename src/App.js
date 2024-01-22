import React from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Summary from './pages/Summary';
import Tasks from './pages/tasks';
import Habits from './pages/Habits';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import './styles/App.css'

const AppRoutes = () => {

  let routes = useRoutes([
    { path: "/Task_Habits/", element: <Home /> },
    { path: "/Task_Habits/summary", element: <Summary/> },
    { path: "/Task_Habits/tasks", element: <Tasks /> },
    { path: "/Task_Habits/habits", element: <Habits /> },
    { path: "/Task_Habits/contact", element: <Contact /> },
    { path: "/Task_Habits/*", element: <NotFound /> }
  ])
  return routes;
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;