import React from "react";
import { Context } from "../../../../../Context";
import styled from "styled-components";
import "./TaskStatus.css";

function TaskStatus({ mySpace }) {
  const { totalTaskSpace, totalPendingSpace, totalCompletedSpace } =
    React.useContext(Context);

  const anchoPendiente =
    totalTaskSpace(mySpace) === 0
      ? 0
      : (100 / totalTaskSpace(mySpace)) * totalPendingSpace(mySpace);
  const anchoCompleto =
    totalTaskSpace(mySpace) === 0
      ? 0
      : (100 / totalTaskSpace(mySpace)) * totalCompletedSpace(mySpace);

  const status = [
    {
      tipo: "Pending",
      ancho: anchoPendiente,
      total: totalPendingSpace(mySpace),
    },
    {
      tipo: "Complete",
      ancho: anchoCompleto,
      total: totalCompletedSpace(mySpace),
    },
  ];

  return (
    <Container>
      <div className="bars">
        {status.map((s) => (
          <div
            key={s.tipo}
            className={`bar bar${s.tipo}`}
            style={{ width: `${s.ancho}%` }}
          >
            {s.total !== 0 && s.total}
          </div>
        ))}
      </div>
      <div className="lables miniText">
        <div className="items">
          <div className="box boxPending"></div>
          <div>Pendiente</div>
        </div>
        <div className="items">
          <div className="box boxComplete"></div>
          <div>Completado</div>
        </div>
      </div>
    </Container>
  );
}

export { TaskStatus };

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 4px);
  height: 65px;
  gap: 5px;
  border: 1px solid var(--primary-main);
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px var(--black);
  background: var(--bg-cards);
  padding: 5px 2px;
`;
