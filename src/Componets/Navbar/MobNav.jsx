import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GrMenu, GrClose } from "react-icons/gr";
import "../../styles/generalStyles.css";
import "./navStyles.css";
import styled from "styled-components";

function MobNav({ titles }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <GrMenu className="burguerButton" onClick={handleClick} />
      <div
        className={isOpen ? "background open" : "background"}
        onClick={handleClick}
      />
      <div className={isOpen ? "mobMenu open" : "mobMenu"}>
        <GrClose
          className={isOpen ? "xBotton open" : "xBotton"}
          onClick={handleClick}
        />
        <div className="logoNav">
          <img src="./Logos/Imagotipo_dark.png" alt="Imagotipo" />
        </div>
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
