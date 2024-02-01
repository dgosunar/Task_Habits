import styled from "styled-components";

export const Botton = styled.div`
    display: flex;
    color: var(--black);
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 100px;
    height: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px 0px var(--black);
    cursor: pointer;
`;

export const PBotton = styled(Botton)`
    background-color: var(--secondary-main);

    &:hover{
        background-color: var(--secondary-light);
    }
    &:active {
        background-color: var(--secondary-main);
    }
`;

export const SBotton = styled(Botton)`
    background-color: var(--gray);

    &:hover{
        background-color: var(--gray-light);
    }
    &:active {
        background-color: var(--gray);
    }
`;