import styled from "styled-components";

export const MyImage = styled.img`
    max-height: 100%;
    max-width: 100%;
`;

export const MyLink = styled.a`
    color: inherit;
    text-decoration: none;
`;

export const MyIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    padding: 10px;
    cursor: pointer;
    
    &:hover{
        box-shadow: 0px 4px 10px 0px var(--black);
        border-radius: 8px;
    }
`;