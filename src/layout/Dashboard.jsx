import styled from "styled-components";
import { Navbar } from "../Components/Navbar";
import { BgDashboard } from "../Components/Backgrounds/BgDashboard";

function Layout({ children, title, description }) {
  return (
    <>
      <Container>
        <div className="presentation">
          <div className="primaryTitle">{title}</div>
        </div>
        <div className="content">{children}</div>
      </Container>
      <Navbar />
      <BgDashboard />
    </>
  );
}

export { Layout };

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 65px 120px 15px 120px;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  height: calc(100% - 80px);
  color: var(--white);
  overflow-y: hidden;

  @media screen and (max-width: 1024px) {
    padding: 65px 60px 15px 60px;
  }

  @media screen and (max-width: 768px) {
    padding: 15px 30px 65px 30px;
  }

  @media screen and (max-width: 600px) {
    padding: 15px 15px 65px 15px;
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
