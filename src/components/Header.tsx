import logoImg from "../assets/images/logo.svg";

import { Container, Content } from '../styles/components/Header'

const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo Letmeask" />
        <div>Código</div>
      </Content>
    </Container>
  );
};

export default Header;
