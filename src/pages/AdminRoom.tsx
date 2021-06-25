import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";

import { RoomParams } from '../models/index'

import { Question } from "../hooks/UseRoom";
import { useAuth } from "../hooks/useAuth";
import { useRoom } from "../hooks/UseRoom";

import { database } from "../services/firebase";

import {
  Container,
  RoomTitle,
  QuestionList,
} from "../styles/pages/room";

const userNotLogged = () => toast.error("Você precisa fazer log in");

const AdminRoom = () => {
  const [newQuestion, setNewQuestion] = useState("");
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { user } = useAuth();
  const {title, questions} = useRoom(roomId);

  const checkPlural = (questions: Question[]) => {
    const questionSize = questions.length;
    if (questionSize > 0) {
      if (questionSize === 1 ){
        return <span>{questions.length} pergunta</span>
      } else {
        return <span>{questions.length} perguntas</span>
      }
    } 
  }

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
      <Header id={roomId} isAdmin/>
      <Container>
        <RoomTitle>
          <h1>Sala {title}</h1>
          {checkPlural(questions)}
        </RoomTitle>
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

export default AdminRoom;
