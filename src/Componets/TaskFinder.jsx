import React from "react";
import { Context } from "../Context";

function TaskFinder() {
    
    const {searchValue, setSearchValue} = React.useContext(Context);

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