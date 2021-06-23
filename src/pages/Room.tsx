import { useParams } from "react-router-dom";

import Button from "../components/Button";
import Header from "../components/Header";

import { RoomParams } from "../components/Header"

import { Container, RoomTitle, Textarea, FormFooter } from '../styles/pages/room'


const Room = () => {
  const params = useParams<RoomParams>();

  return (
    <>
      <Header id={params.id} />
      <Container>
        <RoomTitle>
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </RoomTitle>

        <form>
          <Textarea placeholder="O que você quer perguntar?" />
          <FormFooter>
            <span>
              Para enviar uma pergunta, 
              <button>faça seu login</button>.
            </span>
            <Button type="submit">Enviar pergunta</Button>
          </FormFooter>
        </form>
      </Container>
    </>
  );
};

export default Room;
