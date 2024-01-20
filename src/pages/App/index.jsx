import React from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom'

import Home from '../Home/index';
import Tasks from '../Tasks/index';
import Habits from '../Habits/index';
import Contact from '../Contact/index';
import NotFound from '../NotFound/index';

import './App.css'

const AppRoutes = () => {

  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/tasks", element: <Tasks /> },
    { path: "/habits", element: <Habits /> },
    { path: "/contact", element: <Contact /> },
    { path: "/*", element: <NotFound /> }
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