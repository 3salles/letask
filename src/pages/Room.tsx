import { FormEvent, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


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

type FirebaseQuestions = Record<string, {
  author: {
    name: string;
    avatar: string;
  }
  content: string,
  isAnswered: boolean;
  isHighlighted: boolean;
}>

interface Question {
  id: string;
  author: {
    name: string;
    avatar: string;
  }
  content: string,
  isAnswered: boolean;
  isHighlighted: boolean;
}

const userNotLogged = () => toast.error('Você precisa fazer log in');

const Room = () => {
  const [newQuestion, setNewQuestion] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState('');

  const { user } = useAuth();
  const params = useParams<RoomParams>();

  const roomId = params.id;
  
  useEffect(()=>{
    const roomRef = database.ref(`/rooms/${roomId}`);
    
    roomRef.on('value', room => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parseQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered,
        }
      });

      setTitle(databaseRoom.title);
      setQuestions(parseQuestions);
    })
  }, [roomId]);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();
    
    if (newQuestion.trim() === ''){
      return;
    }

    if (!user) {
      userNotLogged();
      throw new Error('You must be logged in');      
    }
    
    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
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
      </Container>
      <Toaster />
    </>
  );
};

export default Room;
