import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { all } from "@fortawesome/free-solid-svg-icons";
import "../../styles/generalStyles.css";
import "./navStyles.css";
import styled from "styled-components";
import { TBotton, SBotton } from "../Bottons";
import { Context } from "../../Context";
import { useNavigate } from "react-router-dom";

function DashNav({ titles }) {
  const { isLogin, setIsLogin } = React.useContext(Context);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();

  const redirecionar = (dirección) => navigate(dirección);

  const logOut = () => {
    setIsLogin(false);
    redirecionar("/Task_Habits/");
  };
  const logIn = () => {
    setIsLogin(true);
    redirecionar("/Task_Habits/summary");
  };
  return (
    <Nav>
      <div className="dashMenu">
        <div className="dashItemList">
          {titles.map((t) => (
            <NavLink
              to={t.route}
              key={t.label}
              className={({ isActive }) =>
                isActive ? "dashitemSelected item" : "item"
              }
            >
              <FontAwesomeIcon icon={t.icon} />
              <div className="miniText">{t.label}</div>
            </NavLink>
          ))}
        </div>
      </div>
    </Nav>
  );
}

export { DashNav };

export const Nav = styled.div`
  display: none;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
