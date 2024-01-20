import styled from "styled-components";
import { Separator } from "../Modals/Separator";

function ContactCard({ title }) {
    return (
        <Card>
            <span className="primarySubtitlePM">{title}</span>
            <Separator />
            <MyPresentation>
                <img src={`/Images/Photo Daniel Osuna.png`} alt="PhotoDaniel"/>
                <span className="primaryTitle_main">Daniel Osuna</span>
                <span className="mediumTextSM">Desarrollador Frontend</span>
                <span className="mediumText">React | Vue | Angular | Astro | JavaScript</span>
                <SocialNetworks>
                    <a href="https://github.com/dgosunar" target="_blank" rel="noreferrer">
                        <img src={`/Iconos/GitHub.svg`} alt="IconoGithub"/>
                    </a>
                    <a href="https://www.linkedin.com/in/daniel-osuna-r/" target="_blank" rel="noreferrer">
                        <img src={`/Iconos/Linkedin.svg`} alt="IconoLinkedin"/>
                    </a>
                </SocialNetworks>
            </MyPresentation>
        </Card>
    );
}

export default ContactCard;


export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 400px;
    background-color: var(--white);
    color: var(--black);
    padding: 10px;
    gap: 10px;
    border-radius: 15px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const MyPresentation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 10px;

    & img {
        border-radius: 15px;
    }
`;

export const SocialNetworks = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    & img {
        height: 30px;
        border-radius: 0px;
    }
`;