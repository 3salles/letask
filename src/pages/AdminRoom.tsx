import { useParams } from "react-router-dom";

import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";

import { RoomParams } from "../models/index";

import { Question } from "../hooks/UseRoom";
import { useRoom } from "../hooks/UseRoom";

import { database } from "../services/firebase";


import {
  Container,
  RoomTitle,
  QuestionList,
  DeleteButton,
  Delete,
} from "../styles/pages/room";

const AdminRoom = () => {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);

  const checkPlural = (questions: Question[]) => {
    const questionSize = questions.length;
    if (questionSize > 0) {
      if (questionSize === 1) {
        return <span>{questions.length} pergunta</span>;
      } else {
        return <span>{questions.length} perguntas</span>;
      }
    }
  };

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que deseja excluir esta pergunta?")) {
      await database.ref(`/rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  return (
    <>
      <Header id={roomId} isAdmin />
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
              >
                <DeleteButton
                  type="button"
                  title="Remover pergunta"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <Delete />
                </DeleteButton>
              </QuestionCard>
            );
          })}
        </QuestionList>
      </Container>
    </>
  );
};

export default AdminRoom;
