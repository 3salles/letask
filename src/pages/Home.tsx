import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { AuthContext } from '../App'

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


const Home = () => {
  const history = useHistory();
  const { user, signInWithGoogle } = useContext(AuthContext)

  async function handleCreateRoom () {
    if (!user) {
      await signInWithGoogle()
    }
    
    history.push('/rooms/new');
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
        <Form>
          <input 
          type="text"
          placeholder="Digite o código da sala" 
          />
          <Button  type="submit">
            Entrar na sala
          </Button>
        </Form>
      </Content>
    </Main>
    </Container>
  )
}

export default Home;