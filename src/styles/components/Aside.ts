import styled from 'styled-components'

export const Container = styled.aside`
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