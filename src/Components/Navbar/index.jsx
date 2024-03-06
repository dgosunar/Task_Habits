import React from "react";
import "../../styles/generalStyles.css";
import "./navStyles.css";
import { DeskNav } from "./DeskNav";
import { MobNav } from "./MobNav";
import { Context } from "../../Context";
import { useNavigate } from "react-router-dom";
import { DashNav } from "./DashNav";
import {
  faHouse,
  faSquareCheck,
  faNoteSticky,
  faClipboardList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const titlesOff = [
  { label: "Inicio", route: "/Task_Habits/" },
  { label: "Contacto", route: "/Task_Habits/contact" },
];
const titlesOn = [
  { label: "Resumen", route: "/Task_Habits/summary", icon: faHouse },
  { label: "Tareas", route: "/Task_Habits/tasks", icon: faSquareCheck },
  { label: "Notas", route: "/Task_Habits/notes", icon: faNoteSticky },
  { label: "Habitos", route: "/Task_Habits/habits", icon: faClipboardList },
  {
    label: "Perfil",
    route: "/Task_Habits/space",
    icon: faUser,
  },
  // {
  //   label: "Espacios de Trabajo",
  //   route: "/Task_Habits/space",
  //   icon: "faHouse",
  // },
];

function Navbar() {
  const { isLogin } = React.useContext(Context);

  const navigate = useNavigate();

  const redi = () =>
    isLogin ? navigate("/Task_Habits/summary") : navigate("/Task_Habits/");

  return (
    <>
      {isLogin ? (
        <div className="dashContainer">
          <div className="header">
            <div className="dashlogo" onClick={redi}>
              <img src="./Logos/Imagotipo_light.png" alt="Imagotipo" />
              <img src="./Logos/BannerTaskHabits_dev.png" alt="Imagotipo" />
            </div>
            <DeskNav titles={titlesOn} />
            <DashNav titles={titlesOn} />
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="header">
            <div className="logo" onClick={redi}>
              <img src="./Logos/Imagotipo_light.png" alt="Imagotipo" />
              <img src="./Logos/BannerTaskHabits_dev.png" alt="Imagotipo" />
            </div>
            <DeskNav titles={titlesOff} />
            <MobNav titles={titlesOff} />
          </div>
        </div>
      )}
    </>
  );
}

export { Navbar };
