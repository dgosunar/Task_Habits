function CreateTask() {
    return (
        <span className='Frame9'>
            <span className='GeneralLight' style={{color: '#68D6F1'}}>Tasks</span>
            <button 
                className="CreateTodoButton"
                onClick={
                    (event) => {
                        console.log('Pos aja')
                        console.log(event)
                        console.log(event.target)
                    }
                }
                    >+</button>
            <span className='GeneralLight' style={{color: '#9E68F1'}}>Habits</span>
        </span>
    );
}

export { CreateTask }; 