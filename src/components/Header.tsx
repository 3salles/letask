import logoImg from "../assets/images/logo.svg";

import RoomCode from "./RoomCode";
import Button from "./Button";

import { Container, Content, ButtonsSection } from '../styles/components/Header'

export interface RoomParams {
  id: string;
}

const Header = ({ id }: RoomParams) => {
  
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo Letmeask" />
        <ButtonsSection>
        <RoomCode code={id} />
        <Button>Encerrar sala</Button>
        </ButtonsSection>
      </Content>
    </Container>
  );
};

export default Header;
