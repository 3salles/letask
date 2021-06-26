import { useHistory } from "react-router-dom"

import Button from "../components/Button"
import NotFoundImg from "../assets/images/not-found.png"

import { Container } from "../styles/pages/not-found" 


const NotFoundPage = () => {
  const history = useHistory();
  
  const handleOnClick = () => {
    history.push('/');
  }

  return (
    <Container>
      <h1>Oops! Página não encontrada!</h1>
      <img src={NotFoundImg} alt="Página não encontrada" />
      <Button onClick={handleOnClick}>
        Voltar pro início
      </Button>
    </Container>
  )
}

export default NotFoundPage