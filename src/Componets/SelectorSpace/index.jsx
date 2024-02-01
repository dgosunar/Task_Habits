import styled from "styled-components";
import "./SelectorSpace.css"
import React from "react";
import { Context } from "../../Context";

function SelectorSpace() {

    const {
        getWorkspace,
        selectSpace,
        getSpace,
        setSpace,
        setSpaceTasks,
    } = React.useContext(Context);

    const onChangeSpace = (event) => {
        const id = getWorkspace().findIndex((space) => space.name === event.target.value);
        setSpace(id);
        setSpaceTasks(selectSpace(id));
    };

    return (
        <Container>
            <div className="statusBox">
                <div className="label">Espacio de Trabajo</div>
                <select className='status generalText' defaultValue={getSpace()} onChange={onChangeSpace}>
                    {getWorkspace().map((s) => (
                        <option className="option" key={s.id} value={s.id}>{s.name}</option>
                    ))}
                </select>
            </div>
        </Container>
    );
}
export { SelectorSpace }

export const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
    }
    @media screen and (max-width: 600px) {
    }
`;

