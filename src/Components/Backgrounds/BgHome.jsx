import styled from "styled-components";

function BbHome() {
  return (
    <Fondo>
      <Base />
      <Rectangle1 />
      <Rectangle1 />
      <Rectangle2 />
      <Rectangle3 />
      <Rectangle4 />
    </Fondo>
  );
}

export { BbHome };

export const Fondo = styled.div`
  display: flex;
  background: var(--white);
  position: sticky;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

export const Base = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: var(--primary-main);
  top: 0;
  left: 0;
  z-index: -1;
`;

export const Rectangle1 = styled.div`
  position: fixed;
  width: 40vh;
  height: 40vh;
  transform: rotate(-32deg);
  background-color: var(--secondary-light);
  top: -5%;
  left: -5%;
  z-index: -1;
`;
export const Rectangle2 = styled.div`
  position: fixed;
  width: 40vh;
  height: 40vh;
  transform: rotate(-32deg);
  background-color: var(--white);
  top: -10%;
  right: -5%;
  z-index: -1;
`;
export const Rectangle3 = styled.div`
  position: fixed;
  width: 40vh;
  height: 40vh;
  transform: rotate(-32deg);
  background-color: var(--white);
  bottom: -10%;
  left: -5%;
  z-index: -1;
`;
export const Rectangle4 = styled.div`
  position: fixed;
  width: 40vh;
  height: 40vh;
  transform: rotate(-32deg);
  background-color: var(--secondary-light);
  bottom: -5%;
  right: -5%;
  z-index: -1;
`;
