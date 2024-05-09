import styled from "styled-components";
import { Navbar } from "../Components/Navbar";
import { BbHome } from "../Components/Backgrounds/BgHome";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container>
        <div className="content">{children}</div>
      </Container>
      <BbHome />
    </>
  );
}

export { Layout };

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 120px 15px 120px;
  gap: 10px;
  justify-content: center;
  align-items: flex-start;
  height: calc(100% - 80px);
  color: var(--white);
  overflow-y: auto;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
    background: rgba(0, 23, 36, 0.75);
    box-shadow: 0px 4px 10px 0px var(--black);
  }

  @media screen and (max-width: 600px) {
    padding: 60px 15px 15px 15px;
  }

  .presentation {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    max-height: 50px;
    gap: 20px;
  }

  .content {
    display: flex;
    width: 100%;
    height: calc(100% - 60px);
    justify-content: center;
  }
`;
