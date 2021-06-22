import styled from 'styled-components'

export const Button = styled.button`
  margin-top: 4rem;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: var(--soft-violet);
  color: var(--white);
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  transition: filter 0.2s;

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