function TaskStatus({ percentage }) {
    return (
        <span className="GeneralLight">
            <span>You have completed {percentage}% of your tasks, continue like this</span>
        </span>
    );
}

export { TaskStatus }