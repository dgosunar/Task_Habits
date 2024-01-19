import styled from "styled-components";
import { Navbar } from "./Navbar";
import { Background } from "./Background";

function GeneralApp(props) {
    return (
        <div>
            <Navbar route={props.route}/>
            <Container>
                {props.children}
            </Container>
            <Background />
        </div>
    );
}

export { GeneralApp };

export const Container = styled.div` 
    display: flex;
    margin: 0 120px 20px 120px;
    padding: 20px;
    justify-content: center;
    align-items: flex-start;
    height: calc(100% - 120px);
    border-radius: 0px 0px 15px 15px;
    background: rgba(0, 23, 36, 0.75);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #fff;
`;