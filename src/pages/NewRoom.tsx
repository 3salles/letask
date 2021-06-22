import logoImg from "../assets/images/logo.svg";

import Button from "../components/Button";
import Aside from "../components/Aside";

import { Container, Main, Content, Form } from "../styles/pages/auth";

const NewRoom = () => {
  return (
    <Container>
      <Aside />
      <Main>
        <Content>
          <img src={logoImg} alt="Letmeask" />
          <Form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar a sala</Button>
          </Form>
          <p>
            Quer entrar em uma sala já existente?
            <a href="#">clique aqui</a>
          </p>
        </Content>
      </Main>
    </Container>
  );
};

export default NewRoom;
