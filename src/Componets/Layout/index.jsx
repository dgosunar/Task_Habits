import styled from "styled-components";
import { Navbar } from "../Navbar";
import { Background } from "../Background";
import { Div } from "../../styles/styles";

function Layout({ children, title, description }) {
    return (
        <>
            <Navbar />
            <Container>
                <Div className="presentation">
                    <Div className="primaryTitle_SM">{title}</Div>
                    <Div className="mediumText">{description}</Div>
                </Div>
                <Div className="content">
                    {children}
                </Div>
            </Container>
            <Background />
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
    height: calc(100vh - 120px);
    border-radius: 0px 0px 15px 15px;
    background: rgba(0, 23, 36, 0.75);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: var(--white);
    overflow-y: auto;
    
    @media screen and (max-width: 1024px) {
        margin: 60px 60px 0px 60px;
    }
    
    @media screen and (max-width: 768px) {
        margin: 60px 20px 0px 20px;
    }
    
    @media screen and (max-width: 600px) {
        margin: 60px 0px 0px 0px;
    }

    .presentation{
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-height: 50px; 
        gap: 20px;
    }
    
    .content {
        width: 100%;
        min-height: calc(100% - 60px);
        @media screen and (max-width: 1024px) {
        }
    }
`;