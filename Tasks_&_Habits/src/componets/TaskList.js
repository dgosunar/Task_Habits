function TaskList(props) {
    return (
        <span className="Frame1">
            <ul className="Frame13">
                {props.children}
            </ul>
        </span>
    );
}

export { TaskList };