import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../Styles/generalStyles.css"

const titles = [
    {
        label: 'Inicio',
        route: '/',
    },
    {
        label: 'Tareas',
        route: '/tasks',
    },
    {
        label: 'Habitos',
        route: '/habits',
    },
    {
        label: 'Contacto',
        route: '/contact',
    }
]

function Navbar() {
    return (
        <Container>
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
        </Container >
    );
}

export { Navbar };

export const Container = styled.div` 
    display: flex;
    height: 40px;
    width: 100vw;
    z-index: 10;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: #001724;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Pages = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 80px;
`;

export const Item = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    cursor: pointer;

    &:hover{
    color: var(--secondary-main);
    }
`;
