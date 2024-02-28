import React from "react";
import "../../styles/generalStyles.css";
import "./navStyles.css";
import { DeskNav } from "./DeskNav";
import { MobNav } from "./MobNav";
import { Context } from "../../Context";
import { useNavigate } from "react-router-dom";

const titlesOff = [
  { label: "Inicio", route: "/Task_Habits/" },
  { label: "Contacto", route: "/Task_Habits/contact" },
];
const titlesOn = [
  { label: "Resumen", route: "/Task_Habits/summary" },
  { label: "Tareas", route: "/Task_Habits/tasks" },
  { label: "Espacios de Trabajo", route: "/Task_Habits/space" },
  { label: "Notas", route: "/Task_Habits/notes" },
  // { label: "Habitos", route: "/Task_Habits/App/habits" },
];

function Navbar() {
  const { isLogin } = React.useContext(Context);

  const navigate = useNavigate();

  const redi = () =>
    isLogin ? navigate("/Task_Habits/summary") : navigate("/Task_Habits/");

  return (
    <div className="container">
      <div className="header">
        <div className="logo" onClick={redi}>
          <img src="./Logos/Imagotipo_light.png" alt="Imagotipo" />
          <img src="./Logos/BannerTaskHabits_dev.png" alt="Imagotipo" />
        </div>
        <DeskNav titles={isLogin ? titlesOn : titlesOff} />
        <MobNav titles={isLogin ? titlesOn : titlesOff} />
      </div>
    </div>
  );
}

export { Navbar };
