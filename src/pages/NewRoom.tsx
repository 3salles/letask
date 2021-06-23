import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";

import logoImg from "../assets/images/logo.svg";

import Aside from "../components/Aside";
import Button from "../components/Button";

import { Container, Main, Content, Form } from "../styles/pages/auth";


const NewRoom = () => {
  const { user } = useAuth();
  const history = useHistory();

  const [newRoom, setNewRoom] = useState("");

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === ''){
      return
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <Container>
      <Aside />
      <Main>
        <Content>
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <Form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit" disabled={!newRoom}>Criar a sala</Button>
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
