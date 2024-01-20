import { GoChevronLeft as Back, GoChevronRight as Next, GoCheckCircleFill as Completed } from "react-icons/go";
import "../Styles/generalStyles.css"
import styled from "styled-components";

function Task(props) {
    return (
        props.status === 'Pendiente' ?
            <Container className="Frame2Pending">
                <TasksButtom />
                <span className="generalText">{props.text}</span>
                <TasksButtom onClick={props.onStart}>
                    <Next />
                </TasksButtom>
            </Container> :
            props.status === 'En Proceso' ?
                <Container className="Frame2Start">
                    <TasksButtom onClick={props.onPending}>
                        <Back />
                    </TasksButtom>
                    <span className="generalText">{props.text}</span>
                    <TasksButtom onClick={props.onComplete}>
                        <Next />
                    </TasksButtom>
                </Container> :
                props.status === 'Completado' ?
                    <Container className="Frame2Completed">
                        <TasksButtom onClick={props.onStart}>
                            <Back />
                        </TasksButtom>
                        <span className="generalText">{props.text}</span>
                        <TasksButtom onClick={props.onDelete}>
                            <Completed color="var(--accent-green)"/>
                        </TasksButtom>
                    </Container> : <></>
    );
}

export { Task };

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    padding: 10px;
    background: var(--white);
    color: var(--black);
    border-radius: 15px;
    outline-offset: -4px;
    gap: 10px;
`;

export const TasksButtom = styled.div`
    display: flex;
    cursor: pointer;
    height: 100%;
    align-items: center;
`;