import { FormEvent, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import Button from "../components/Button";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";

import { RoomParams } from "../components/Header";
import { useAuth } from "../hooks/useAuth";
import useRoom from "../hooks/UseRoom";
import { database } from "../services/firebase";

import {
  Container,
  RoomTitle,
  Textarea,
  FormFooter,
  UserInfo,
  QuestionList,
} from "../styles/pages/room";



const userNotLogged = () => toast.error("Você precisa fazer log in");

const Room = () => {
  const [newQuestion, setNewQuestion] = useState("");
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { user } = useAuth();
  const {title, questions} = useRoom(roomId);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === "") {
      return;
    }

    if (!user) {
      userNotLogged();
      throw new Error("You must be logged in");
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion("");
  }

  return (
    <>
      <Header id={roomId} />
      <Container>
        <RoomTitle>
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
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
        <QuestionList>
          {questions?.map((question) => {
            return (
              <QuestionCard
                key={question.id}
                content={question.content}
                author={question.author}
              />
            );
          })}
        </QuestionList>
      </Container>
      <Toaster />
    </>
  );
};

export default Room;
