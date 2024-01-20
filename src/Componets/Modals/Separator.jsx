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
    width: calc(100% - 20px);
    border-bottom-style: solid;
`;

