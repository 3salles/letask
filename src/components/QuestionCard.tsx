import { ReactNode } from 'react';

import { Container, Footer, UserInfo} from '../styles/components/QuestionCard'

interface QuestionProps {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
  children: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

const QuestionCard = ({
  content, 
  author, 
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) => {
  return(
    <Container isAnswered={isAnswered} isHighlighted={isHighlighted}>
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