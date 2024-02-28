import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./Context";

import Home from "./pages/Home";
import Contact from "./pages/Home/Contact";
import Summary from "./pages/App/Summary";
import Tasks from "./pages/App/Tasks";
import Notes from "./pages/App/Notes";
import SpaceWork from "./pages/App/SpaceWork";
import Habits from "./pages/App/Habits";
import NotFound from "./pages/NotFound";

import "./styles/App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/Task_Habits/", element: <Home /> },
    { path: "/Task_Habits/contact", element: <Contact /> },
    { path: "/Task_Habits/*", element: <NotFound /> },
    { path: "/Task_Habits/summary", element: <Summary /> },
    { path: "/Task_Habits/tasks", element: <Tasks /> },
    { path: "/Task_Habits/space", element: <SpaceWork /> },
    { path: "/Task_Habits/notes", element: <Notes /> },
    { path: "/Task_Habits/habits", element: <Habits /> },
  ]);
  return routes;
};

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
