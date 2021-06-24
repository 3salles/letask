import { Container, Footer, UserInfo } from '../styles/components/QuestionCard'

interface QuestionProps {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
}

const QuestionCard = ({content, author}: QuestionProps) => {
  return(
    <Container>
      <p>{content}</p>
      <Footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <div></div>
      </Footer>
    </Container>
  )
}

export default QuestionCard;