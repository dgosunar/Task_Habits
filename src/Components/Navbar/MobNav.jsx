import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GrMenu, GrClose } from "react-icons/gr";
import "../../styles/generalStyles.css";
import "./navStyles.css";
import styled from "styled-components";
import { TBotton, SBotton } from "../Bottons";
import { Context } from "../../Context";
import { useNavigate } from "react-router-dom";

function MobNav({ titles }) {
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
      <GrMenu
        className={isOpen ? "burguerButton open" : "burguerButton"}
        onClick={handleClick}
      />
      <GrClose
        className={isOpen ? "xBotton open" : "xBotton"}
        onClick={handleClick}
      />
      <div
        className={isOpen ? "background open" : "background"}
        onClick={handleClick}
      />
      <div className={isOpen ? "mobMenu open" : "mobMenu"}>
        <div>
          <div className="itemList">
            {titles.map((t) => (
              <NavLink
                to={t.route}
                key={t.label}
                className={({ isActive }) =>
                  isActive ? "itemSelected mediumTextB" : "mediumText"
                }
              >
                <div className="item">{t.label}</div>
              </NavLink>
            ))}
          </div>
        </div>
        {isLogin ? (
          <SBotton onClick={logOut}>Salir</SBotton>
        ) : (
          <TBotton onClick={logIn}>Ingresar</TBotton>
        )}
      </div>
    </Nav>
  );
}

export { MobNav };

export const Nav = styled.div`
  display: none;
  height: 100%;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
