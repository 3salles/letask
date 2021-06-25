import { ReactNode } from 'react';

import { Container, Footer, UserInfo} from '../styles/components/QuestionCard'

interface QuestionProps {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
  children: ReactNode;
}

const QuestionCard = ({content, author, children}: QuestionProps) => {
  return(
    <Container>
      <p>{content}</p>
      <Footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <div>
          {children}
        </div>
      </Footer>
    </Container>
  )
}

export default QuestionCard;