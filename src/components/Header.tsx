import logoImg from "../assets/images/logo.svg";

import RoomCode from "./RoomCode";

import { Container, Content } from '../styles/components/Header'

export interface RoomParams {
  id: string;
}

const Header = ({ id }: RoomParams) => {
  
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo Letmeask" />
        <RoomCode code={id} />
      </Content>
    </Container>
  );
};

export default Header;
