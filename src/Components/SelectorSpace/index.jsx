import styled from "styled-components";
import "./SelectorSpace.css";
import React from "react";
import { Context } from "../../Context";

function SelectorSpace() {
  const { workspace, space, setSpace } = React.useContext(Context);

  const onChangeSpace = (nameSpace) => {
    const id = workspace.findIndex((space) => space.name === nameSpace);
    setSpace(id);
  };

  return (
    <Container>
      <div className="statusBox">
        <div className="label">Espacio de Trabajo</div>
        <select
          className="status generalText"
          value={workspace[space].name}
          onChange={(event) => onChangeSpace(event.target.value)}
        >
          {workspace.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </div>
    </Container>
  );
}
export { SelectorSpace };

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 600px) {
  }
`;
