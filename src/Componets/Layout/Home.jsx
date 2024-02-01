import styled from "styled-components";
import { Navbar } from "../Navbar";
import { BbHome } from "../Backgrounds/BgHome";

function Layout({ children, title, description }) {
    return (
        <>
            <Navbar />
            <Container>
                <div className="presentation">
                    <div className="primaryTitle_SM">{title}</div>
                </div>
                <div className="content">
                    {children}
                </div>
            </Container>
            <BbHome />
        </>
    );
}

export { Layout };

export const Container = styled.div` 
    display: flex;
    flex-direction: column;
    margin: 60px 120px 0px 120px;
    padding: 20px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    height: calc(100vh - 100px);
    color: var(--white);
    overflow-y: auto;
    
    @media screen and (max-width: 1024px) {
        margin: 60px 60px 0px 60px;
    }
    
    @media screen and (max-width: 768px) {
        background: rgba(0, 23, 36, 0.75);
        box-shadow: 0px 4px 10px 0px var(--black);
        margin: 60px 20px 0px 20px;
    }
    
    @media screen and (max-width: 600px) {
        margin: 60px 0px 0px 0px;
        padding: 10px;
    }

    .presentation{
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