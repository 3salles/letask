import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
`
export const Aside = styled.aside`
  flex: 7;
  background: var(--soft-violet);
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7.5rem 5rem;

  img {
    max-width: 320px;
  }

  strong {
    font: 700 2.25rem 'Poppins', sans-serif;
    line-height: 2.625rem;
    margin-top: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 1rem;
    color: var(--very-light-gray-white);
  }
`

export const Main = styled.main`
  flex: 8;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  >img {
    align-items: center;
  }
`

export const Form = styled.form`
  input{
    height: 3.125rem;
    border-radius: 0.5rem;
    padding: 0 1rem;
    background: var(--white);
    border: 1px solid var(--grayish-blue);
  }
  button {
    margin-top: 1rem;
  }

  button, input {
    width: 100%;
  }
`
export const CreateRoomButton = styled.button`
  margin-top: 4rem;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: #ea4335;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  transition: filter 0.2s;

  img {
    margin-right: 0.5rem;
  }

  &:hover{
    filter: brightness(0.9);
  }
`

export const Separator = styled.div`
  font-size: 0.875rem;
  color: var(--grayish-blue);
  margin: 2rem 0;
  display: flex;
  align-items: center;

  &::before{
    content: '';
    flex: 1;
    height: 1px;
    background: var(--grayish-blue);
    margin-right: 1rem;
  }

  &::after{
    content: '';
    flex: 1;
    height: 1px;
    background: var(--grayish-blue);
    margin-left: 1rem;
  }
`

