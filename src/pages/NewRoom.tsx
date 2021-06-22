import logoImg from "../assets/images/logo.svg";

import Button from "../components/Button";
import { Link } from "react-router-dom";

import Aside from "../components/Aside";

import { Container, Main, Content, Form } from "../styles/pages/auth";


const NewRoom = () => {
  
  return (
    <Container>
      <Aside />
      <Main>
        <Content>
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <Form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar a sala</Button>
          </Form>
          <p>
            Quer entrar em uma sala já existente?
            <Link to="/"> Clique aqui</Link>
          </p>
        </Content>
      </Main>
    </Container>
  );
};

export default NewRoom;
