import logoImg from "../assets/images/logo.svg";

import RoomCode from "./RoomCode";
import Button from "./Button";

import { Container, Content, ButtonsSection } from '../styles/components/Header'

interface HeaderProps {
  id: string;
  isAdmin?: boolean;
}

const Header = ({ id, isAdmin }: HeaderProps) => {
  
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo Letmeask" />
        <ButtonsSection>
        <RoomCode code={id} />
        {isAdmin && <Button isOutlined >Encerrar sala</Button>}
        </ButtonsSection>
      </Content>
    </Container>
  );
};

export default Header;
