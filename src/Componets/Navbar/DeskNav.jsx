import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/generalStyles.css";
import "./navStyles.css";
import styled from "styled-components";

function DeskNav({ titles }) {
  return (
    <Nav>
      <div className="deskMenu">
        {titles.map((t) => (
          <NavLink
            to={t.route}
            key={t.label}
            className={({ isActive }) =>
              isActive ? "itemSelected mediumText" : "mediumText"
            }
          >
            <div className="item">{t.label}</div>
          </NavLink>
        ))}
      </div>
    </Nav>
  );
}

export { DeskNav };

export const Nav = styled.div`
  display: flex;
  height: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
