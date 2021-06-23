import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

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
import { database } from '../services/firebase'





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
      // TODO: Create a toast or modal Message.
      alert('Room does not exists.'); 
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
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
  )
}

export default Home;