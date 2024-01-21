import React from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home';
import Tasks from './pages/tasks';
import Habits from './pages/Habits';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import './styles/App.css'

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