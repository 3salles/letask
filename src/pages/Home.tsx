import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase'

import logoImg from '../assets/images/logo.svg'
import googleIcon from '../assets/images/google-icon.svg'

import Button from '../components/Button'
import Aside from '../components/Aside'


import { 
  Container, 
  Main, 
  Content, 
  Form, 
  Separator,
  CreateRoomButton 
} from '../styles/pages/auth'

const roomError = () => toast.error('Sala não existe!');

const Home = () => {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom () {
    if (!user) {
      await signInWithGoogle()
    }
    
    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if(!roomRef.exists()){
      roomError();
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <>
    <Container>
    <Aside />
    <Main>
      <Content>
        <img src={logoImg} alt="Letmeask" />
        <CreateRoomButton onClick={handleCreateRoom}>
          <img src={googleIcon} alt="Logo do Google" />
          Crie sua sala com o Google
        </CreateRoomButton>
        <Separator>ou entre em uma sala</Separator>
        <Form onSubmit={handleJoinRoom}>
          <input 
          type="text"
          placeholder="Digite o código da sala"
          onChange={event => setRoomCode(event.target.value)}
          value={roomCode} 
          />
          <Button  type="submit" disabled={!roomCode}>
            Entrar na sala
          </Button>
        </Form>
      </Content>
    </Main>
    </Container>
    <Toaster />
    </>
  )
}

export default Home;