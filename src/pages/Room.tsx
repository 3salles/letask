import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";

import Button from "../components/Button";
import Header from "../components/Header";

import { RoomParams } from "../components/Header";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";

import {
  Container,
  RoomTitle,
  Textarea,
  FormFooter,
  UserInfo,
} from "../styles/pages/room";

const Room = () => {
  const [newQuestion, setNewQuestion] = useState("");
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();
    
    if (newQuestion.trim() === ''){
      return;
    }

    if (!user) {
      throw new Error('You must be logged in');
      // TODO: Add toast
      
    }
    
    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlihted: false,
      isAnswered: false,
    }

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion('');
  }

  return (
    <>
      <Header id={roomId} />
      <Container>
        <RoomTitle>
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </RoomTitle>

        <form onSubmit={handleSendQuestion}>
          <Textarea
            placeholder="O que você quer perguntar?"
            onChange={(event) => setNewQuestion(event.target.value)}
            value={newQuestion}
          />
          <FormFooter>
            {user ? (
              <UserInfo>
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </UserInfo>
            ) : (
              <span>
              Para enviar uma pergunta,
              <button>faça seu login</button>.
            </span>
            )}
            <Button type="submit" disabled={!user || !newQuestion}>
              Enviar pergunta
            </Button>
          </FormFooter>
        </form>
      </Container>
    </>
  );
};

export default Room;
