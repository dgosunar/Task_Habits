import React from "react";
import "../../styles/generalStyles.css";
import "./navStyles.css";
import { DeskNav } from "./DeskNav";
import { MobNav } from "./MobNav";

const titles = [
  { label: "Inicio", route: "/Task_Habits/" },
  { label: "Resumen", route: "/Task_Habits/summary" },
  { label: "Tareas", route: "/Task_Habits/tasks" },
  { label: "Espacios de Trabajo", route: "/Task_Habits/space" },
  { label: "Notas", route: "/Task_Habits/notes" },
  { label: "Habitos", route: "/Task_Habits/habits" },
  { label: "Contacto", route: "/Task_Habits/contact" },
];

function Navbar() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <a href="/Task_Habits/">
            <img src="./Logos/Imagotipo_light.png" alt="Imagotipo" />
            <img src="./Logos/BannerTaskHabits_dev.png" alt="Imagotipo" />
          </a>
        </div>
        <DeskNav titles={titles} />
        <MobNav titles={titles} />
      </div>
    </div>
  );
}

export { Navbar };
