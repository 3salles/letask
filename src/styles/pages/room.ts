import styled, {css} from "styled-components";

import {ReactComponent as LikeSvg} from "../../assets/images/like.svg"
import {ReactComponent as DeleteSvg} from "../../assets/images/delete.svg"
import {ReactComponent as CheckSvg} from "../../assets/images/check.svg"
import {ReactComponent as AnswerSvg} from "../../assets/images/answer.svg"

interface LikeButtonProps {
  hasLiked: boolean;
}

export const Container = styled.main`
  max-width: 50rem;
  margin: 0 auto;
`

export const RoomTitle = styled.div`
  margin: 2rem 0 1.5rem;
  display: flex;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    color: var(--very-dark-blue-black);
  }

  > span {
    margin-left: 1rem;
    background: var(--soft-magenta);
    border-radius: 999px;
    padding: 0.5rem 1rem;
    color: var(--white);
    font-weight: 500;
    font-size: 0.875rem;
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  background: var(--very-lightest-gray-white);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  resize: vertical;
  min-height: 130px;
`
export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  >span {
    font-size: 0.875rem;
    color: var(--dark-grayish-blue);
    font-weight: 500;

    >button {
      background: transparent;
      border: 0;
      color: var(--soft-violet);
      text-decoration: underline;
      font-size: 0.875rem;
      font-weight: 500;
    }
  }
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span{
    margin-left: 0.5rem;
    color: var(--very-dark-blue-black);
    font-weight: 500;
    font-size: 14px;
  }
`
export const QuestionList = styled.div`
  margin: 2rem 0;
`

export const ButtonsSection = styled.div`
  display: flex;
  gap: 1rem;
`

export const LikeButton = styled.button`
  border: 0;
  background: transparent;
  display: flex;
  align-items: flex-end;
  color: var(--soft-violet);
  gap: 0.5rem;

  &:hover{
    color: var(--soft-violet);
  }
`

export const Buttons = styled.button`
  border: 0;
  background: transparent;
`

export const Like = styled(LikeSvg)<LikeButtonProps>`
  stroke: var(--dark-grayish-blue);
  fill: none;

  ${({hasLiked}) => hasLiked && css`
    fill: var(--soft-violet);
    stroke: var(--white);
  ` }

  &:hover{
    stroke: ${({hasLiked}) => hasLiked ? '#FFFFFF' : '#835AFD'};
  }
`

export const Delete = styled(DeleteSvg)`
  stroke: var(--dark-grayish-blue);
  fill: none;

  &:hover{
    stroke: var(--bright-red);
  }
`

export const Check = styled(CheckSvg)`
  stroke: var(--dark-grayish-blue);
  fill: none;

  &:hover{
    stroke: var(--soft-violet);
  }
`

export const Answer = styled(AnswerSvg)`
  stroke: var(--dark-grayish-blue);
  fill: none;

  &:hover{
    stroke: var(--soft-violet);
  }
`
