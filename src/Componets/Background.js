import styled from "styled-components";

function Background() {
    return (
        <Fondo>
            <Rectangle1 />
            <Rectangle2 />
            <Rectangle3 />
            <Rectangle4 />
        </Fondo>
    );
}

export { Background };

export const Fondo = styled.div` 
    position: sticky;
    z-index: -1;
`;
export const Rectangle1 = styled.div`
    position: fixed;
    width: 40vh;
    height: 40vh;
    transform: rotate(-32deg);
    background: var(--secondary-light);
    top: -5%;
    left: -5%;
    z-index: -1;
`;
export const Rectangle2 = styled.div`
    position: fixed;
    width: 40vh;
    height: 40vh;
    transform: rotate(-32deg);
    background: var(--primary-light);
    top: -10%;
    right: -5%;
    z-index: -1;
`;
export const Rectangle3 = styled.div`
    position: fixed;
    width: 40vh;
    height: 40vh;
    transform: rotate(-32deg);
    background: var(--primary-light);
    bottom: -10%;
    left: -5%;
    z-index: -1;
`;
export const Rectangle4 = styled.div`
    position: fixed;
    width: 40vh;
    height: 40vh;
    transform: rotate(-32deg);
    background: var(--secondary-light);
    bottom: -5%;
    right: -5%;
    z-index: -1;
`;