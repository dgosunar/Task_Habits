import React from 'react';
import { GoChevronLeft as Back, GoChevronRight as Next, GoCheckCircleFill as Completed } from "react-icons/go";
import "../styles/generalStyles.css";
import styled from "styled-components";
import { Context } from '../Context';

function Task(props) {
    const {
        generalStatus
    } = React.useContext(Context);

    return (
        props.task.status === generalStatus[0].id ?
            <Container className="Pending">
                <TasksButtom />
                <div className='detalles'>
                    <span className="generalText">{props.task.text}</span>
                    <span className="miniText">{props.task.date}</span>
                </div>
                <TasksButtom onClick={props.onStart}>
                    <Next />
                </TasksButtom>
            </Container> :
            props.task.status === generalStatus[1].id ?
                <Container className="Start">
                    <TasksButtom onClick={props.onPending}>
                        <Back />
                    </TasksButtom>
                    <div className='detalles'>
                        <span className="generalText">{props.task.text}</span>
                        <span className="miniText">{props.task.date}</span>
                    </div>
                    <TasksButtom onClick={props.onComplete}>
                        <Next />
                    </TasksButtom>
                </Container> :
                props.task.status === generalStatus[2].id ?
                    <Container className="Completed">
                        <TasksButtom onClick={props.onStart}>
                            <Back />
                        </TasksButtom>
                        <div className='detalles'>
                            <span className="generalText">{props.task.text}</span>
                            <span className="miniText">{props.task.date}</span>
                        </div>
                        <TasksButtom onClick={props.onDelete}>
                            <Completed color="var(--accent-green)" />
                        </TasksButtom>
                    </Container> : <></>
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

    .detalles{
        display: flex;
        flex-direction: column;
        padding: 10px 0;
    }

    &:hover{
        box-shadow: 0px 4px 10px 0px var(--black);
    }
`;

export const TasksButtom = styled.div`
    display: flex;
    cursor: pointer;
    height: 100%;
    align-items: center;
`;