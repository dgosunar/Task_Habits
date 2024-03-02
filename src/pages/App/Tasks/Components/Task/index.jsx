import React from "react";
import { Context } from "../../../../../Context";
import {
  GoChevronLeft as Back,
  GoChevronRight as Next,
  GoCheckCircleFill as Completed,
} from "react-icons/go";
import "../../../../../styles/generalStyles.css";
import styled from "styled-components";

function Task({ task }) {
  const { generalStatus, pendingTask, startTask, completeTask, deleteTask } =
    React.useContext(Context);

  return task.status === generalStatus[0].id ? (
    <Container className="Pending">
      <TasksButtom />
      <div className="detalles">
        <span className="generalText">{task.text}</span>
        <span className="miniText">{task.date}</span>
      </div>
      <TasksButtom onClick={() => startTask(task.id)}>
        <Next />
      </TasksButtom>
    </Container>
  ) : task.status === generalStatus[1].id ? (
    <Container className="Start">
      <TasksButtom onClick={() => pendingTask(task.id)}>
        <Back />
      </TasksButtom>
      <div className="detalles">
        <span className="generalText">{task.text}</span>
        <span className="miniText">{task.date}</span>
      </div>
      <TasksButtom onClick={() => completeTask(task.id)}>
        <Next />
      </TasksButtom>
    </Container>
  ) : task.status === generalStatus[2].id ? (
    <Container className="Completed">
      <TasksButtom onClick={() => startTask(task.id)}>
        <Back />
      </TasksButtom>
      <div className="detalles">
        <span className="generalText">{task.text}</span>
        <span className="miniText">{task.date}</span>
      </div>
      <TasksButtom onClick={() => deleteTask(task.id)}>
        <Completed color="var(--accent-green)" />
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
  color: var(--black);
  border-radius: 15px;
  outline-offset: -4px;
  background-color: var(--white);
  gap: 10px;

  .detalles {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
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
`;
