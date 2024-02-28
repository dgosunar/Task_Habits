import styled from "styled-components";
import { Separator } from "../../../Components/Modals/Separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function ContactCard({ title }) {
  return (
    <Card>
      <MyPresentation>
        <span className="primaryTitle">Daniel Osuna</span>
        <Separator />
        <span className="mediumTextSM">Desarrollador Frontend</span>
        <span className="mediumText">React | Astro | JavaScript</span>
        <span className="mediumText">dgosunar@gmail.com</span>
        <SocialNetworks>
          <a
            href="https://github.com/dgosunar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-osuna-r/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
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
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px var(--black);

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 10px;
  }
`;

export const MyPresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
  width: 100%;

  & img {
    border-radius: 8px;
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 600px) {
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

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 600px) {
  }
`;
