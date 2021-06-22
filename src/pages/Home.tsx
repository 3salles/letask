import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIcon from '../assets/images/google-icon.svg'

import Button from '../components/Button'

import { 
  Container, 
  Aside, 
  Main, 
  Content, 
  Form, 
  Separator,
  CreateRoomButton 
} from '../styles/pages/auth'

const Home = () => {
  return (
    <Container>
    <Aside>
      <img 
      src={illustrationImg} 
      alt="Ilustração simbolizando perguntas e respostas" 
      />
      <strong>Crie salas Q&amp;A ao-vivo</strong>
      <p>Tire as dúvidas da sua audiência em tempo-real</p>
    </Aside>
    <Main>
      <Content>
        <img src={logoImg} alt="Letmeask" />
        <CreateRoomButton>
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