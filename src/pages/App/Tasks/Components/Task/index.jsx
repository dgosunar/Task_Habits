import React from "react";
import { Context } from "../../../../../Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCheck,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "../../../../../styles/generalStyles.css";
import styled from "styled-components";

function Task({ task }) {
  const { generalStatus, pendingTask, completeTask, deleteTask } =
    React.useContext(Context);

  return task.status === generalStatus[0].id ? (
    <Container className="Pending">
      <TasksButtom />
      <div className="detalles">
        <span className="generalText">{task.text}</span>
        <span className="miniText">{task.date}</span>
      </div>
      <TasksButtom onClick={() => completeTask(task.id)}>
        <FontAwesomeIcon icon={faCheck} style={{ color: "#006c85" }} />
      </TasksButtom>
    </Container>
  ) : task.status === generalStatus[1].id ? (
    <Container className="Completed">
      <TasksButtom onClick={() => pendingTask(task.id)}>
        <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#008200" }} />
      </TasksButtom>
      <div className="detalles">
        <span className="generalText">{task.text}</span>
        <span className="miniText">{task.date}</span>
      </div>
      <TasksButtom onClick={() => deleteTask(task.id)}>
        <FontAwesomeIcon icon={faTrash} style={{ color: "#F16767" }} />
      </TasksButtom>
    </Container>
  ) : (
    <></>
  );
}

export { Task };

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  padding: 0 10px;
  width: calc(100% - 20px);
  border-radius: 15px;
  outline-offset: -4px;
  background-color: var(--white);
  gap: 10px;

  .detalles {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    color: var(--black);
  }

  &:hover {
    box-shadow: 0px 4px 10px 0px var(--black);
  }
`;

export const TasksButtom = styled.div`
  display: flex;
  cursor: pointer;
  height: 100%;
  align-items: center;
  color: var(--black);
`;
