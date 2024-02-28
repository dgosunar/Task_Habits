import React from "react";
import { Context } from "../../Context";
import styled from "styled-components";
import "./TaskStatus.css";

function TaskStatus() {
  const {
    space,
    totalPendingSpace,
    totalStartSpace,
    totalCompleteSpace,
    totalTaskSpace,
  } = React.useContext(Context);

  const anchoPendiente =
    totalTaskSpace(space) === 0
      ? 0
      : (100 / totalTaskSpace(space)) * totalPendingSpace(space);
  const anchoEnProceso =
    totalTaskSpace(space) === 0
      ? 0
      : (100 / totalTaskSpace(space)) * totalStartSpace(space);
  const anchoCompleto =
    totalTaskSpace(space) === 0
      ? 0
      : (100 / totalTaskSpace(space)) * totalCompleteSpace(space);

  const status = [
    {
      tipo: "Pending",
      ancho: anchoPendiente,
      total: totalPendingSpace(space),
    },
    { tipo: "OnStart", ancho: anchoEnProceso, total: totalStartSpace(space) },
    {
      tipo: "Complete",
      ancho: anchoCompleto,
      total: totalCompleteSpace(space),
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
          <div className="box boxOnStart"></div>
          <div>En Proceso</div>
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
  width: 100%;
  height: 65px;
  gap: 5px;
  border: 1px solid var(--primary-main);
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px var(--black);
  background: var(--bg-cards);
  padding: 5px 2px;
`;
