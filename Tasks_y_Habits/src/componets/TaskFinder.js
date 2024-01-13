import React from "react";

function TaskFinder({searchValue, setSearchValue}) {

    return (
        <input
            placeholder="Buscar tareas"
            className="TodoSearch"
            value={searchValue}
            onChange={
                (event) => {
                    setSearchValue(event.target.value);
                }}
        />
    );
}

export { TaskFinder };