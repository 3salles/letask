import logoImg from "../assets/images/logo.svg";

import RoomCode from "./RoomCode";

import { Container, Content } from '../styles/components/Header'

const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo Letmeask" />
        <RoomCode />
      </Content>
    </Container>
  );
};

export default Header;
