import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../styles/generalStyles.css";
import { MyImage, MyLink } from "../styles/styles";

const titles = [
    { label: 'Inicio', route: "/Task_Habits/" },
    { label: 'Resumen', route: "/Task_Habits/summary" },
    { label: 'Tareas', route: "/Task_Habits/tasks" },
    { label: 'Habitos', route: "/Task_Habits/habits" },
    { label: 'Contacto', route: "/Task_Habits/contact" }
]

function Navbar() {
    return (
        <Container>
            <Header>
                <MyLink href="/Task_Habits/">
                    <MyImage src="./Logos/BannerTaskHabits_dev.png" alt="Imagotipo" />
                </MyLink>
                <Pages>
                    {titles.map((t) => (
                        <NavLink to={t.route} key={t.label} className={({ isActive }) =>
                            isActive ? "itemSelected" : "generalText"
                        }>
                            <Item className="generalText">
                                {t.label}
                            </Item>
                        </NavLink>
                    ))}
                </Pages>
            </Header>
        </Container >
    );
}

export { Navbar };

export const Container = styled.div` 
    display: flex;
    height: 60px;
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 1;
    background: var(--primary-main);
    color: var(--white);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.div`
    display: flex;
    padding: 10px 120px;
    width: 100%;   
    justify-content: space-between;
`;

export const Pages = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

export const Item = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    width: 80px;   

    &:hover{
    color: var(--secondary-main);
    }
`;
