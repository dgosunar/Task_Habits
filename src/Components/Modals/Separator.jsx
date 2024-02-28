import React from "react";
import styled from "styled-components";

function Separator() {
    return (
        <BoxSeparator/>
    );
}

export { Separator };

export const BoxSeparator = styled.div`
    display: flex;
    width: 100%;
    border-bottom-style: solid;
`;

