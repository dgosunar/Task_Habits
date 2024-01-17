import React from "react";

function TaskFinder({searchValue, setSearchValue}) {

    return (
        <input
            placeholder="Buscar tareas"
            className="TodoSearch generalText"
            value={searchValue}
            onChange={
                (event) => {
                    setSearchValue(event.target.value);
                }}
        />
    );
}

export { TaskFinder };