import styled from "styled-components";
import "../styles/generalStyles.css"

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

function Header({ route }) {
    return (
        <Container>
            <Pages>
                {titles.map((t) => (
                    <a href={t.route} key={t.label}>
                        <Item className={
                            t.route === route ? ("generalText itemSelected"
                            ) : ("generalText")
                        }>
                            {t.label}
                        </Item>
                    </a>
                ))}
            </Pages>
        </Container >
    );
}

export { Header };

export const Container = styled.div` 
    display: flex;
    height: 40px;
    justify-content: center;
    align-items: center;
    padding: 10px 120px;
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
