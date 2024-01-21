import React from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'

import Home from '../Home'
import Tasks from '../Tasks'
import Habits from '../Habits'
import Contact from '../Contact'
import NotFound from '../NotFound'

import '../../Styles/App.css'

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