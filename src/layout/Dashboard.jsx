import styled from "styled-components";
import { Navbar } from "../Components/Navbar";
import { BgDashboard } from "../Components/Backgrounds/BgDashboard";

function Layout({ children, title, description }) {
  return (
    <>
      <Navbar />
      <Container>
        <div className="presentation">
          <div className="primaryTitle">{title}</div>
        </div>
        <div className="content">{children}</div>
      </Container>
      <BgDashboard />
    </>
  );
}

export { Layout };

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 65px 15px 15px 15px;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  height: calc(100% - 80px);
  color: var(--white);
  overflow-y: auto;
  --background: rgba(0, 23, 36, 0.5);
  --box-shadow: 0px 4px 10px 0px var(--black);

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 600px) {
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
    min-height: calc(100% - 60px);
    justify-content: center;
  }
`;
