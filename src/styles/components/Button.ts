import styled, {css} from 'styled-components'

interface ButtonProps {
  hasOutline: boolean;
}

export const Button = styled.button<ButtonProps>`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: var(--desaturated-dark-blue);
  color: var(--white);
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  transition: filter 0.2s;

  ${({hasOutline}) => hasOutline && css`
    background: 0;
    color: var(--desaturated-dark-blue);
    border: 1px solid var(--desaturated-dark-blue);
    &:hover{
    color: #6F4BD8;
    border: 1px solid #6F4BD8;
  }
  `}

  img {
    margin-right: 0.5rem;
  }

  &:not(:disabled):hover{
    filter: brightness(0.9);
  }

  &:disabled{
    opacity: 0.6;
    cursor: not-allowed;
  }
`