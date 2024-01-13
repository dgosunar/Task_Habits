import { GoChevronLeft as Back, GoChevronRight as Pending, GoCheckCircle as Start, GoCheckCircleFill as Completed } from "react-icons/go";

function Task(props) {
    return (
        console.log("Entró a task"),
        <li className={
            props.status === 'Completed' ? "Frame2Completed" :
                props.status === 'Start' ? "Frame2Start" :
                    props.status === 'Pending' ? "Frame2Pending" : null
        }>
            <span onClick={
                props.status === 'Completed' ? props.onStart :
                    props.status === 'Start' ? props.onPending : null
            }>
                <Back />
            </span>

            <span>{props.text}</span>

            <span onClick={
                props.status === 'Pending' ? props.onStart :
                    props.status === 'Start' ? props.onComplete :
                        props.status === 'Completed' ? props.onDelete : null
            }>
                {props.status === 'Pending' ? <Pending /> :
                    props.status === 'Start' ? <Start /> :
                        props.status === 'Completed' ? <Completed color="91F168" /> : null
                }
            </span>
        </li>
    );
}

export { Task };