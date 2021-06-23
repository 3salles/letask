import styled from "styled-components";

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
  background: #FEFEFE;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  resize: vertical;
  min-height: 130px;
`
export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  span {
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